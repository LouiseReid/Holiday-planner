<template lang="html">
  <div class="container" v-if="experience">
    <h3>{{experience.name}}</h3>
    <p>{{experience.description}}</p>
    <form v-on:submit="submit" method="post">
      <button type="submit">Add to Basket</button>
    </form>
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
  },
  methods: {
    submit(e){
      e.preventDefault()
      let data = this.createBasketObject(this.experience)
      fetch('http://localhost:3000/api/basket', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      })
    },
    createBasketObject(experience){
      return {
        'location': experience.location,
        'name': experience.name,
        'cost': experience.cost
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  border: 1px solid black;
  width: 65vw
}
</style>
