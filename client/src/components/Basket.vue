<template lang="html">
  <div>
    <h3>Basket</h3>
    <basket-item
      v-for="item in items"
      :key="item._id"
      :item="item"
    />
    <p>Total: £{{ total }}</p>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';
import { eventBus } from '../main.js';

export default {
  name: 'basket',
  data(){
    return {
      items: []
    }
  },
  components: {
    'basket-item': BasketItem
  },
  computed: {
    total(){
      let total = 0;
      this.items.forEach(item => total += item.cost);
      return total
    }
  },
  mounted(){
    this.loadBasket()
    eventBus.$on('basket-updated', (data) => {
      if (data) {
        this.loadBasket()
      }
    })

    eventBus.$on('basket-updated-item-removed', (data) => {
      if (data) {
        this.loadBasket()
      }
    })

  },
  methods: {
    loadBasket(){
      fetch('http://localhost:3000/api/basket')
      .then(res => res.json())
      .then(data => this.items = data)
    }
  }
}
</script>

<style lang="css" scoped>
div {
  width: 35vw;
}
h3 {
  text-align: center;
}
</style>
