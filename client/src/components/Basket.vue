<template lang="html">
  <div class="container__outter">
    <h3>Basket</h3>
    <div class="container__inner">
      <basket-item
        v-for="item in basket"
        :key="item._id"
        :item="item"
      />
    </div>
    <p v-if="basket.length > 0">Total: £{{ total }}</p>
    <p class="basket-empty" v-else>Your basket is empty</p>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'basket',
  components: {
    'basket-item': BasketItem
  },
  computed: {
    ...mapState(['basket']),
    total(){
      let total = 0;
      this.basket.forEach(item => total += item.cost);
      return total
    }
  },
  mounted(){
     this.getData()
    // this.loadBasket()
    // eventBus.$on('basket-updated', (data) => {
    //   if (data) {
    //     this.loadBasket()
    //   }
    // })
    //
    // eventBus.$on('basket-updated-item-removed', (data) => {
    //   if (data) {
    //     this.loadBasket()
    //   }
    // })

  },
  methods: {
    ...mapActions([
      'getData'
    ])
  }
}
</script>

<style lang="css" scoped>

.container__outter {
  width: 25vw;
  height: 650px;
  background-color: #fafafa;
  transform: skewY(-2deg);
  border: 1px solid #bff4e8;
  padding-bottom: 20px;
}

.container__inner {
  overflow-y: scroll;
  height: 85%;
  width: 95%;
  background-color: #fafafa;
  margin: 0 auto;
  transform: skewY(2deg);
}

h3 {
  text-align: center;
  letter-spacing: 1.5px;
  transform: skewY(2deg);
}

p {
  text-align: center;
  transform: skewY(2deg);
  padding-bottom: 10px;
}

.basket-empty {
  font-style: italic;
  font-weight: lighter;
  color: #4d4d4d
}
</style>
