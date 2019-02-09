<template lang="html">
  <div class="container" v-if="experience">
    <h3>{{experience.name}}</h3>
    <p>{{experience.description}}</p>
    <date-picker
      :inline="true"
      :disabledDates="disabledDates"
      v-model="date"
      />
    <form v-on:submit="submit" method="post">
      <button type="submit">Add to Basket</button>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { eventBus } from '../main.js';

export default {
  data(){
    return {
      id: this.$route.params.id,
      experience: null,
      disabledDates: {
        days: []
      },
      date: null
    }
  },
  components: {
    'date-picker': Datepicker
  },
  mounted(){
    fetch('http://localhost:3000/api/experiences/' + this.$route.params.id)
    .then(res => res.json())
    .then(data => this.experience = data[0])
    .then(experience => this.disabledDates.days = experience['disable-days'])
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
      .then( eventBus.$emit('basket-updated', data))
    },
    createBasketObject(experience){
      return {
        'location': experience.location,
        'name': experience.name,
        'cost': experience.cost,
        'date': this.date
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
