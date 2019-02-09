<template lang="html">
  <div class="">
    <h3>Basket</h3>
    <basket-item
      v-for="item in items"
      :key="item._id"
      :item="item"
    />
    <p>Total: £{{ total}}</p>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';
import { eventBus } from '../main.js';

export default {
  name: 'basket',
  data(){
    return {
      items: [],
      total: 0
    }
  },
  components: {
    'basket-item': BasketItem
  },
  mounted(){
    fetch('http://localhost:3000/api/basket')
    .then(res => res.json())
    .then(data => this.items = data)
    .then(items => this.calcTotal(items))

    eventBus.$on('basket-updated', (data) => {
      this.items.push(data)
      this.calcTotal(this.items)
    })
  },
  methods: {
    calcTotal(items){
      items.forEach(item => this.total += item.cost)
    }
  }
}
</script>

<style lang="css" scoped>
div {
  width: 35vw
}
h3 {
  text-align: center;
}
</style>
