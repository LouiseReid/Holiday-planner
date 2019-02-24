<template lang="html">
  <div id="app">
    <router-view :experiences="experiences"></router-view>
    <basket></basket>
  </div>
</template>

<script>
import EventService from './services/EventService.js'
import Basket from './components/Basket.vue'

export default {
  name: 'app',
  data(){
    return {
      experiences:[],
    }
  },
  mounted(){
    EventService.getExperiences()
    .then(data => this.experiences = data)
  },
  components: {
    'basket': Basket
  }
}
</script>


<style lang="css">

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'PT Sans Narrow', sans-serif;
  background: linear-gradient(rgba(191, 244, 232, 0.5),rgba(255, 255, 255, 0.7)), url('./assets/background.jpg');
  background-size: cover;
  display: flex;
  justify-content: space-around;
  height: 100vh;
  overflow:scroll;
}



</style>
