<template>
  <div class="status">
    <span class="bar" v-for="value in [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]" v-bind:key="value" v-bind:class="{'active': stat.base_stat >= (value*17)}"></span>
    <span class="text">{{cirrectedName}}</span>
  </div>
</template>


<script>

export default {
  name: "StatGraph",
  props: {
    stat: {
      type: Object,
      required: true
    }
  },
  data: function() {
    let lowerStringStatName = this.stat.stat.name.toLowerCase();
    let correctedName = lowerStringStatName.split("-");
    for (let i = 0; i < correctedName.length; i++) {
      if(correctedName[i] == "special")  {
        correctedName[i] = "Sp.";
      } else if (correctedName[i] == "attack") {
        correctedName[i] = "Atk.";
      } else if (correctedName[i] == "defense") {
        correctedName[i] = "Def.";
      } else if(correctedName[i] == "hp") {
        correctedName[i] = "HP"
      } else {
        correctedName[i] = correctedName[i][0].toUpperCase() + correctedName[i].substring(1);
      }
    }
    let cirrectedName = correctedName.join(" ");
    return{
      cirrectedName,
    }
  }
}

</script>


<style scoped>
  .status {
    flex: 0 0 15%;
    width: 65px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 225px;
  }

  .status .bar {
    width: 100%;
    background-color: #fff;
    height: 10px;
    content: "";
    border: none;
    display: inline-block;
  }

  .status .bar.active {
    background-color: #30a7d7;
  }
</style>