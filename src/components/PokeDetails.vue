<template>
  <div class="overlay">
    <div class="upper">
      <div class="upper-full">
        <h1 class="pokemon-name-number">
          {{capitalizedPokeName}} <span class="pokemon-number">Nº{{corretedPokeNumber}}</span>
        </h1>
      </div>
      <div class="upper-right">
        <div class="pokemon-image-container">
          <img :src=pokemon.sprites.front_default alt="pokemon image" class="pokemon-image">
        </div>
        <div class="pokemon-stats-container">
          <h3>Stats</h3>
          <StatGraphBar v-for="stat in this.pokemon.stats" v-bind:key="stat.stat.name" :stat="stat" />
        </div>
      </div>
      <div class="upper-left">
        <div class="pokemon-description-container">
          <p class="pokemon-description"></p>
        </div>
        <div class="pokemon-data-card">
          <span class="left">
            <span class="height">
              <span class="title">Height</span>
              <span class="text">{{corretedPokeHeight}}m</span>
            </span>
            <span class="weight">
              <span class="title">Weight</span>
              <span class="text">{{correctedPokeWeight}}kg</span>
            </span>
            <span class="gender">
              <span class="title">Gender</span>
              <span class="text"></span>
            </span>
          </span>
          <span class="right">
            <span class="category">
              <span class="title">Category</span>
              <span class="text">{{pokeCategory}}</span>
            </span>
            <span class="abilities">
              <span class="title">Abilities</span>
              <!-- <span class="text" v-for="ability in pokeHabilities" v-bind:key="ability.slot">{{ability.name}}</span> -->
            </span>
          </span>
        </div>
        <div class="pokemontypes">
          <div class="title">Type</div>
          <div class="types-container">
            <PokeTypeListBig v-for="type in this.pokemon.types" v-bind:key="type.slot" :pokemonType="type" />
          </div>
        </div>
        <div class="pokemonweaknesses">
          <div class="title">Weaknesses</div>
          <div class="types-container">
            <PokeTypeListBig v-for="weakness in pokemonWeaknesses" v-bind:key="weakness" :pokemonType="weakness" />
          </div>
        </div>
      </div>
    </div>
    <div class="evolutions-container">
      <h2>Evoluções</h2>
    </div>
  </div>
</template>


<script>
import Endpoints from "../endpoints";
import axios from 'axios';
import PokeTypeListBig from "./PokeTypeListBig.vue";
import StatGraphBar from "./StatGraphBar.vue";
import commonScripts from '../commonScripts';

let cs = new commonScripts();
let endpoints = new Endpoints();
let pokeCategory = null;
let pokeHabilities = [];
let pokeGender = null;
let evolutionLine = null;
let detailedPokeSpecies = [];
let pokemonWeaknesses = [];

export default {
  name: "PokemonDetails",
  components: {
    PokeTypeListBig,
    StatGraphBar
  },
  props: {
  pokemon: {
      type: Object,
      required: true
    }
  },
  data() {
    let lowerStringPokeName = this.pokemon.name.toLowerCase();
    let capitalizedPokeName = lowerStringPokeName[0].toUpperCase() + lowerStringPokeName.substring(1);
    
    let pokeNumber = parseInt(this.pokemon.id);
    let corretedPokeNumber = 0;
    if(pokeNumber < 10) {
      corretedPokeNumber = `00${pokeNumber}`;
    } else if (pokeNumber < 100) {
      corretedPokeNumber = `0${pokeNumber}`;
    } else {
      corretedPokeNumber = pokeNumber
    }

    let corretedPokeHeight = this.pokemon.height / 10
    let correctedPokeWeight = this.pokemon.weight / 10

    return{
      capitalizedPokeName,
      corretedPokeNumber,
      corretedPokeHeight,
      correctedPokeWeight,
      pokeCategory,
      pokeHabilities,
      pokeGender,
      evolutionLine,
      detailedPokeSpecies,
      pokemonWeaknesses
    }
  },
  mounted: async function() {
    cs.toggleSpinner();
    await this.getDetailedPokeSpecies();
    this.getPokeCategory();
    this.improveAbilityReadability();
    this.getPokemonWeaknesses();
  },
  methods: {
    getDetailedPokeSpecies: async function() {
      let vm = this;
      await axios.get(endpoints.getPokeDetailsBySpecies(this.pokemon.species.name)).then(function(response) {
        vm.detailedPokeSpecies = response.data;
      });
    },
    improveAbilityReadability: function() {
      for(const ability of this.pokemon.abilities) {
        let abilityName = ability.ability.name.toLowerCase().split("-");
        for(let i = 0; i < abilityName.length; i++) {
          abilityName[i] = abilityName[i][0].toUpperCase() + abilityName[i].substring(1);
        }
        abilityName = abilityName.join(" ");
        this.pokeHabilities.push({name: abilityName, slot: ability.slot});
      }
    },
    getPokeCategory: function() {
      let pokeSpecies = JSON.parse(JSON.stringify(this.detailedPokeSpecies));
      let vm = this;
      for(const category of pokeSpecies.genera) {
        if(category.language.name == "en") {
          vm.pokeCategory = category.genus.replace(" Pokémon", "");
          break;
        }
      }
      return;
    },
    getPokemonWeaknesses: async function() {
      let vm = this;
      for(const type of this.pokemon.types) {
        await axios.get(type.type.url).then(function(response) {
          let weaknesses = response.data.damage_relations.double_damage_from;
          for(const weakness of weaknesses) {
            vm.pokemonWeaknesses.push({type:{name: weakness.name}});
          }
        });
      }
    }
  }
}
</script>


<style scoped>
  .overlay {
    /* display: none; */
    width: 100%;
    max-width: 1024px;
    height: fit-content;
    top: 55px;
    background-color: #D4D4D4;
    z-index: 9999;
    /* padding: 15px;? */
  }
  .upper {
    padding: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .upper-full {
    flex: 0 0 100%;
  }

  .pokemon-number {
    color: #919191;
  }

  .upper-right, .upper-left {
    flex: 0 0 45%;
  }

  .pokemon-image-container {
    width: 390px;
    height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F2F2F2;
    padding: 15px;
    border-radius: 15px;
  }

  .pokemon-image {
    width: 100%;
    height: 100%;
  }

  .pokemon-description-container {
    text-align: left;
    font-size: 18px;
  }

  .pokemon-data-card {
    background-color: #30a7d7;
    border-radius: 15px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px 25px;
  }

  .pokemon-data-card .left, .pokemon-data-card .right {
    flex: 0 0 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: left;
  }

  .pokemon-data-card .left span, .pokemon-data-card .right span {
    flex: 0 0 100%;
    text-align: left;
    margin-bottom: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: left;
  }

  .pokemon-data-card .left span .title, .pokemon-data-card .right span .title {
    color: #FFF;
    font-size: 17px;
  }


  .pokemon-data-card .left span .text, .pokemon-data-card .right span .text {
    color: #000;
  }

  .pokemontypes, .pokemonweaknesses {
    margin-top: 15px;
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .pokemontypes .title, .pokemonweaknesses .title {
    font-size: 19px;
    margin-bottom: 10px;
    flex: 0 0 100%;
  }

  .pokemontypes .types-container, .pokemonweaknesses .types-container {
    flex: 0 0 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .pokemon-stats-container {
    width: 390px;
    height: 280px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-evenly;
    background: #979797;
    padding: 15px;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #000;
    font-size: 14px;
  }

  .pokemon-stats-container h3{
    flex: 0 0 100%;
    text-align: left;
    margin-top: 0;
    padding-left: 10px;
  }

  .evolutions-container {
    color: #fff;
    background-color: #424242;
    height: fit-content;
    min-height: 350px;
    border-radius: 15px;
    margin-bottom: 30px;
    text-align: left;
    padding: 5px 15px;
  }
</style>
