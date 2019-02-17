<template lang="html">
  <section>
    <input type="text" v-model="search" placeholder="search for city...">
    <div class="container">
      <experience-card
      v-for="experience in searchedExperiences"
      :key="experience._id"
      :experience="experience"
      />
    </div>
  </section>

</template>

<script>
import ExperienceCard from './ExperienceCard.vue'

export default {
  name: 'experience-grid',
  data(){
    return {
      search: ''
    }
  },
  props: ['experiences'],
  components: {
    'experience-card': ExperienceCard
  },
  computed: {
    searchedExperiences(){
      if(this.search === ''){
        return this.experiences
      } else {
        return this.experiences.filter(experience => {
          return experience.location.indexOf(this.search) > -1
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 65vw
}
</style>
