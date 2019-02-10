<template lang="html">
  <div class="basket-item">
    <h4>{{ item.location }}</h4>
    <p>{{ item.name }}</p>
    <p>{{ item.date | moment("dddd, MMMM Do YYYY")}}</p>
    <p>£{{ item.cost }}</p>
    <form v-on:submit="submit" method="post">
      <button type="submit">X</button>
    </form>
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'basket-item',
  props: ['item'],
  methods: {
    submit(e){
      console.log(this.item);
      e.preventDefault()
      fetch('http://localhost:3000/api/basket/' + this.item._id, {
        method: 'DELETE'
      })
      .then( eventBus.$emit('basket-updated-item-removed', true))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
