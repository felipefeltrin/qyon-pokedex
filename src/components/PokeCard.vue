<template>
  <router-link class="pokecard" :to=url>
    <div class="pokeimage-container">
      <img alt="pokemon picture" :src=pokemon.sprites.front_default class="pokeimage">
    </div>
    <div class="pokemon-info">
      <div class="pokenumber-container">
        <span class="pokenumber">Nº {{corretedPokeNumber}}</span>
      </div>
      <div class="pokename-container">
        <h3 class="pokename">{{capitalizedPokeName}}</h3>
      </div>
      <div class="pokemon-types">
        <PokeTypeList v-for="type in pokemon.types" :pokemonType=type v-bind:key="type" />
      </div>
    </div>
  </router-link>
</template>

<script>
  import PokeTypeList from './PokeTypeList.vue';

  export default {
      name: 'PokemonCard',
      components: {
        PokeTypeList
      },
      props: {
        pokemon: {type: Object, required: true}
      },
      data() {
        let lowerStringPokeName = this.pokemon.name.toLowerCase();
        let capitalizedPokeName = lowerStringPokeName[0].toUpperCase() + lowerStringPokeName.substring(1);
        let url = `/pokemon/${this.pokemon.id}`;
        
        let pokeNumber = parseInt(this.pokemon.id);
        let corretedPokeNumber = 0;
        if(pokeNumber < 10) {
          corretedPokeNumber = `00${pokeNumber}`;
        } else if (pokeNumber < 100) {
          corretedPokeNumber = `0${pokeNumber}`;
        } else {
          corretedPokeNumber = pokeNumber
        }

        return{
          capitalizedPokeName,
          corretedPokeNumber,
          url
        }
      }
  }
</script>

<style scoped>
  .pokecard {
    border-radius: 1rem;
    background: #fff;
    padding: 15px 15px;
    flex: 0 0 19%;
    max-width: 19%;
    transition: all .2s ease-in-out;
    margin-right: 1.4%;
    margin-left: 1.4%;
    margin-bottom: 25px;
    text-decoration: none;
    color: unset;
  }

  .pokecard:hover {
    transform: scale(1.1);
  }

  .pokeimage-container {
    width: 100%;
    text-align: center;
    background: #F2F2F2;
  }

  .pokeimage {
    padding: 5px;
    width: 180px;
    height: 180px;
    border-radius: 4px;
  }

  .pokemon-info {
    padding: 3px 15px;
  }

  .pokenumber-container {
    width: 100%;
    text-align: left; 
  }

  .pokenumber {
    font-size: 14px;
    color: #919191;
    font-weight: bold;
  }

  .pokename-container {
    width: 100%;
    text-align: left;
  }

  .pokename {
    font-size: 24px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .pokemon-types {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
