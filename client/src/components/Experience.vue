<template lang="html">
  <div class="" v-if="experience">
    <h3>{{experience.name}}</h3>
    <p>{{experience.description}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      experience: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/api/experiences/' + this.$route.params.id)
    .then(res => res.json())
    .then(data => this.experience = data[0])
  }
}
</script>

<style lang="css" scoped>
</style>
