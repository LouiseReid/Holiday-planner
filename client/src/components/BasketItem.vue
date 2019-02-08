<template lang="html">
  <div class="basket-item">
    <h4>{{ item.location }}</h4>
    <p>{{ item.name }}</p>
    <p>{{ item.cost | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
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
