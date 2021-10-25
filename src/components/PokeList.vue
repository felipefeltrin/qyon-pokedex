<template>
  <div class="search-container">
    <input type="text" placeholder="Busca por nome ou número" class="search-field" name="pokemon_search">
    <button class="btn-search" v-on:click="searchPokemon">
      <font-awesome-icon icon="search" />
    </button>
  </div>
  <div class="row">
    <PokeCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
  <button class="btn-load-more" v-on:click="changePage">
    Carregar Mais
  </button>
</template>

<script>
import Endpoints from "../endpoints";
import axios from 'axios';
import PokeCard from './PokeCard.vue';
import commonScripts from '../commonScripts';

let cs = new commonScripts();
let endpoints = new Endpoints();
let pokemons = [];
let pageSize = 20;
let offset = 0;

export default {
  name: 'PokemonListing',
  components: {
    PokeCard
  },
  data() {
    return {
      pokemons
    }
  },
  async mounted() {
    pokemons = await this.fetchPokesFromUrl();
    cs.toggleSpinner();
  },
  methods: {
    changePage: async function() {
      cs.toggleSpinner();
      offset += pageSize;
      let pokeArray = await this.fetchPokesFromUrl();
      this.pokemons = pokeArray;
      cs.toggleSpinner();
    },
    fetchPokesFromUrl: async function() {
      try {
        let pokemonsArray = this.pokemons
        await axios.get(endpoints.getPaginationUrl(pageSize,offset)).then(async (response) => {
          for (let i = 0; i < response.data.results.length; i++) {
            let poke = response.data.results[i];
            await axios.get(poke.url).then((response) => {
              pokemonsArray.push(response.data);
            });
          }
        });
        document.getElementsByClassName("btn-load-more")[0].classList.remove("disabled-button");
        return pokemonsArray;
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar Pokémons");
      }
    },
    searchPokemon: async function() {
      let vm = this;
      cs.toggleSpinner();
      try {
        let searchFieldValue = document.getElementsByName("pokemon_search")[0].value;
        searchFieldValue = searchFieldValue.toLowerCase();
        if(searchFieldValue) {
          await axios.get(endpoints.getSearchUrl(searchFieldValue)).then((response) => {
            vm.pokemons = [response.data];
          });
          document.getElementsByClassName("btn-load-more")[0].classList.add("disabled-button");
        } else {
          vm.pokemons = [];
          offset = 0;
          this.fetchPokesFromUrl()
        }
        
      } catch (error) {
        console.log(error);
        alert("Erro ao buscar Pokémon");
      }
      
      cs.toggleSpinner();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .row {
    margin-top: 30px;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-load-more {
    background: #D4D4D4;
    border: 0;
    border-radius: 5px;
    color: #979797;
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    width: 250px;
    height: 50px;
  }

  .btn-load-more:hover {
    color: #D4D4D4;
    background: #979797;
  }

  .search-container {
    width: 100%;
    text-align: left;
    margin-left: 1.4%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .search-field {
    width: 350px;
    height: 20px;
    padding: 7px;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
    margin-right: 10px;
  }

  .btn-search {
    width: 36px;
    height: 36px;
    background-color: #e74c3c;
    border: 0;
    border-radius: 3px;
    color: #fff;
  }

  .btn-search:hover {
      background-color: #CA4335;
  }
</style>
