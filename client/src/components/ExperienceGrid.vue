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
          let search = this.search.charAt(0).toUpperCase() + this.search.slice(1)
          return experience.location.indexOf(search) > -1
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
