<template>
  <div class="main">
    <h1>Bem vindo à Pokedex</h1>
    <div class="container ">
      <div class="spinner">
        <img src="../assets/loading.gif" alt="">
      </div>
      <PokeList/>
    </div>
  </div>
</template>

<script>
  import PokeList from '../components/PokeList.vue';

  export default {
    name: 'Pokedex',
    components: {
      PokeList
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #D4D4D4;
    margin: 0;
    padding: 15px 0;
    width: 100%;
    height: 100%;
  }

  .is-loading {
    overflow: hidden;
  }

  .spinner {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    background: white;
    top: 0;
    left: 0;
    z-index: 999;
  }

  h1 {
    margin-top: 0;
  }

  .main {
    max-width: 1280px;
    text-align: center;
    margin: 0 auto;
    background-color: #D4D4D4;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    text-align: center;
    margin: 0 auto;
    padding: 1em 0;
    background: #D4D4D4;
  }

  .disabled-button {
    pointer-events: none;
    opacity: 0.3;
  }
</style>
