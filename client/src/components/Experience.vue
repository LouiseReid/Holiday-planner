<template lang="html">
  <div class="container__outter" v-if="experience">
    <h3>{{experience.name}}</h3>
    Categories:<ul>
      <li v-for="category in experience.categories"> {{ category }}</li>
    </ul>
    <div class="container__inner">
      <p>{{experience.description}}</p>
      <date-picker
      :inline="true"
      :disabledDates="disabledDates"
      v-model="date"
      />
    </div>
    Includes: <ul>
      <li v-for="includes in experience.includes"> {{ includes }}</li>
    </ul>

    <p>Cost: £{{ experience.cost }}</p>
    <form v-on:submit="submit" method="post">
      <button type="submit">Add to Basket</button>
    </form>
    <router-link :to="{ name: 'experience-grid'}">Return to results</router-link>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { eventBus } from '../main.js';
import _ from 'lodash';

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
      eventBus.$emit('basket-updated', true)
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
.container__outter {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 65vw
}

.container__inner {
  display: flex;
}

p {
  white-space: pre-line;
}

ul {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin: 0
}

li:not(:first-child) {
  margin-left: 10%
}

</style>
