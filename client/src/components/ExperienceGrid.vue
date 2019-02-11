<template lang="html">
  <div class="container">
    <experience-card
      v-for="experience in experiences"
      :key="experience._id"
      :experience="experience"
    />
  </div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue'

export default {
  name: 'experience-grid',
  props: ['experiences'],
  components: {
    'experience-card': ExperienceCard
  }
}
</script>

<style lang="css" scoped>
  .container {
    display: flex;
    width: 65vw
  }
</style>
