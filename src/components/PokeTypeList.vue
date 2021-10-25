<template>
        <span :class="pokemonTypeClass">{{capitalizedPokeType}}</span>
</template>    

<script>
export default {
    name: "PokemonType",
    
    props: {
      pokemonType: {
        type: Object,
        required: true
      }
    },
    data() {
      let lowerStringPokeType = this.pokemonType.type.name.toLowerCase();
      let capitalizedPokeType = lowerStringPokeType[0].toUpperCase() + lowerStringPokeType.substring(1);
      return{
        capitalizedPokeType,
        pokemonTypeClass: `poketype ${lowerStringPokeType}`
      }
    }
}
</script>


<style scoped>


  .poketype {
    text-align: center;
    flex: 0 0 43%;
    max-width: 110px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border-radius: 3px;
    margin-right: 5px;
  }

  .poketype:not(:last-of-type) {
    margin-bottom: 5px;
  }

  .poketype.bug {
    background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
    background-color: #729f3f;
    color: #fff;
  }

  .poketype.dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
    background-color: #53a4cf;
    color: #fff;
  }

  .poketype.fairy {
    background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
    background-color: #fdb9e9;
  }

  .poketype.fire {
    background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
    background-color: #fd7d24;
    color: #fff;
  }

  .poketype.ghost {
    background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
    background-color: #7b62a3;
    color: #fff;
  }

  .poketype.ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    background-color: #f7de3f;
  }

  .poketype.normal {
    background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
    background-color: #a4acaf;
  }

  .poketype.psychic {
    background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
    background-color: #f366b9;
    color: #fff;
  }

  .poketype.steel {
    background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
    background-color: #9eb7b8;
  }

  .poketype.dark {
    background: linear-gradient(180deg, #707070 50%, #707070 50%);
    background-color: #707070;
    color: #fff;
  }


  .poketype.electric {
    background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
    background-color: #eed535;
  }

  .poketype.fighting {
    background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
    background-color: #d56723;
    color: #fff;
  }

  .poketype.flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    background-color: #3dc7ef;
  }

  .poketype.grass {
    background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
    background-color: #9bcc50;
  }

  .poketype.ice {
    background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
    background-color: #51c4e7;
  }

  .poketype.poison {
    background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
    background-color: #b97fc9;
    color: #fff;
  }

  .poketype.rock {
    background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
    background-color: #a38c21;
    color: #fff;
  }

  .poketype.water {
    background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
    background-color: #4592c4;
    color: #fff;
  }
</style>
