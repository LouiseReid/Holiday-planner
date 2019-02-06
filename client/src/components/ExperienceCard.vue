<template lang="html">
  <div class="experience-card">
    <h3>{{ experience.name }}</h3>
    <router-link :to="{ name: 'experience', params: {id: experience._id} }">More</router-link>
  </div>
</template>

<script>
export default {
  name: 'experience',
  props: ['experience']
}
</script>

<style lang="css" scoped>
  .experience-card {
    flex: 25%;
    border: 1px solid red;
    padding: 0 10px
  }

  h3 {
    text-align: center;
  }
</style>
