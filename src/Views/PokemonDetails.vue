<template>
  <PokeDetails :pokemon="pokemon" />
</template>

<script>
import Endpoints from "../endpoints";
import axios from 'axios';
import PokeDetails from '../components/PokeDetails.vue';
let endpoints = new Endpoints();
let pokemon = null;

export default {
  name: "PokemonDetails",
  components: {
    PokeDetails
  },
  data() {
    return {
      pokemon
    }
  },
  mounted: async function() {
    let vm = this;
    let pokemonId = this.$route.params.id;
    await axios.get(endpoints.getSearchUrl(pokemonId)).then(function(response) {
      vm.pokemon = response.data;
    });
  }
}
</script>
