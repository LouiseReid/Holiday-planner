<template lang="html">
  <section>
    <label for="location-search">Where are you going?</label>
    <input type="text" v-model="searchLocation" placeholder="search for city..." id="location-search" />

    <p>What do you want to do?</p>
    <label for="tour">Tour</label>
    <input type="checkbox" id="tour" value="tour" v-model="checkedCategories">
    <label for="adventure">Adventure</label>
    <input type="checkbox" id="tour" value="adventure" v-model="checkedCategories">

    <p v-if="searchLocation === '' && checkedCategories.length === 0">All Experiences</p>
    <p v-else>Search Results</p>
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
      searchLocation: '',
      checkedCategories: []
    }
  },
  props: ['experiences'],
  components: {
    'experience-card': ExperienceCard
  },
  computed: {
    searchedExperiences(){
      let searchLocation = this.searchLocation.charAt(0).toUpperCase() + this.searchLocation.slice(1)
      let experiences = []

      if(this.searchLocation === '' && this.checkedCategories.length === 0){
        return this.experiences
      } else if (this.searchLocation === '' && this.checkedCategories.length > 0 ) {
        this.experiences.forEach(experience => {
          experience.categories.forEach(category => {
            if(this.checkedCategories.includes(category)){
              experiences.push(experience)
            }
          })
        })
        return experiences
      } else if (this.searchLocation !== '' && this.checkedCategories.length > 0) {
        this.experiences.forEach(experience => {
          if(experience.location.indexOf(searchLocation) > -1){
            experience.categories.forEach(category => {
              if(this.checkedCategories.includes(category)){
                experiences.push(experience)
              }
            })
          }
        })
        return experiences
      } else {
        return this.experiences.filter(experience => {
          return experience.location.indexOf(searchLocation) > -1
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
