<template lang="html">
  <div class="">
    <img src="./assets/logo.png" alt="TravTrips logo">
    <div class="container">
      <router-view :experiences="experiences"></router-view>
      <basket></basket>
    </div>
  </div>
</template>

<script>
import Basket from './components/Basket.vue'

export default {
  name: 'app',
  data(){
    return {
      experiences:[],
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/experiences')
    .then(res => res.json())
    .then(data => this.experiences = data)
  },
  components: {
    'basket': Basket
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
}

img {
  width: 15vw;
}
</style>
