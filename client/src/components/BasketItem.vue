<template lang="html">
  <div class="basket-item">
    <h4>{{ item.location }}</h4>
    <p>{{ item.name }}</p>
    <p>{{ item.date | moment("dddd, MMMM Do YYYY")}}</p>
    <p>£{{ item.cost }}</p>
  </div>
</template>

<script>
export default {
  name: 'basket-item',
  props: ['item']
}
</script>

<style lang="css" scoped>
</style>
