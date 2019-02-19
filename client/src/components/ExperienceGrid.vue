<template lang="html">
  <section>
    <div class="search_container__outer">
      <img src="../assets/logo.png" alt="TravTrips logo">

      <label id="location-label" for="location-search">Where are you going?</label>
      <div class="search_container__inner-location" tabindex="0">
        <span><font-awesome-icon icon="search" /></span> <input type="text" v-model="searchLocation" placeholder="search for city..." id="location-search" />
      </div>


      <p id="categories-label">What do you want to do?</p>
      <div class="checkbox_container">
        <div class="grid-item">
          <label for="tour">Tour</label>
          <input type="checkbox" id="tour" value="tour" v-model="checkedCategories">
        </div>

        <div class="grid-item">
          <label for="adventure">Adventure</label>
          <input type="checkbox" id="tour" value="adventure" v-model="checkedCategories">
        </div>

        <div class="grid-item">
          <label for="art">Art</label>
          <input type="checkbox" id="art" value="art" v-model="checkedCategories">
        </div>

        <div class="grid-item">
          <label for="history">History</label>
          <input type="checkbox" id="history" value="history" v-model="checkedCategories">
        </div>

        <div class="grid-item">
          <label for="sport">Sport</label>
          <input type="checkbox" id="sport" value="sport" v-model="checkedCategories">
        </div>

      </div>

    </div>
    <p v-if="searchLocation === '' && checkedCategories.length === 0">All Experiences</p>
    <p v-else>Search Results</p>
    <div class="experience_container">
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
          if(this.checkedCategories.every(category => experience.categories.includes(category))){
            experiences.push(experience)
          }
        })
        return [...new Set(experiences)]
      } else if (this.searchLocation !== '' && this.checkedCategories.length > 0) {
        this.experiences.forEach(experience => {
          if(experience.location.indexOf(searchLocation) > -1){
            experience.categories.forEach(category => {
              if(this.checkedCategories.every(category => experience.categories.includes(category))){
                experiences.push(experience)
              }
            })
          }
        })
        return [...new Set(experiences)]
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

section {
  width: 65vw
}

img {
  width: 12%;
  height: 10%;
}

.search_container__outer {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #23b090
}

.search_container__inner-location {
  border: 1px solid #afafaf;
  background-color: #ffffff;
  border-radius: 5px;
  width: 25%;
  padding: 2px;
  display: flex;
  align-self: center;
  height: fit-content;
}

span {
  padding-right: 10px;
}

p {
  text-align: center;
}

#location-label {
  align-self: center;
  font-size: 20px;
  margin-left: 25px;
  width: 17%;
}

#location-search {
  border: none;
  outline: none;
}

#categories-label {
  font-size: 20px;
  padding: 0 10px
}

.checkbox_container {
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  width: 15%

}

.grid-item {
  display: flex;
  justify-content: space-between;
}

.grid-item label {
  font-size: 14px
}

.experience_container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}



</style>
