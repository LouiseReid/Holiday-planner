<template lang="html">
  <section>
    <div class="search_wrapper">
      <img src="../assets/logo.png" alt="TravTrips logo">
      <div class="search_container__outer">
        <div class="search_container__inner">
          <label id="location-label" for="location-search">Where are you going?</label>
          <div class="search_container__inner-location-search" tabindex="0">
            <span><font-awesome-icon icon="search" /></span> <input type="text" v-model="searchLocation" placeholder="search for city..." id="location-search" />
          </div>
        </div>


        <div class="search_container__inner">
          <p id="categories-label">What do you want to do?</p>
          <div id="checkbox_container">
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


      </div>
    </div>

    <p v-if="searchLocation === '' && checkedCategories.length === 0">All Experiences</p>
    <p v-else>Search Results</p>
    <div id="experience_container">
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
  width: 65vw;
  margin-top: 20px
}

.search_wrapper {
  display: flex;
  width: 64vw;
  color: #ffffff;
}

img {
  width: 12%;
  height: 10%;
}

.search_container__outer {
  display: flex;
  padding: 10px 20px;
  background-color: #23b090;
  width: 100%
}

.search_container__inner {
  display: flex;
  flex: 1
}

.search_container__inner-location-search {
  border: 1px solid #afafaf;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  align-self: center;
  height: fit-content;
}

.search_container__inner-location-search:focus-within{
  border: 2px solid #26cde4;
  outline: none
}

span {
  padding-right: 10px;
  color: #000000;
}

p {
  text-align: center;
}

#location-label {
  align-self: center;
  font-size: 20px;
  margin-right: 20px;

}

#location-search {
  border: none;
  outline: none;
}

#categories-label {
  font-size: 20px;
  padding: 0 10px;
  margin: 0;
  margin-right: 20px;
  align-self: center;
}

#checkbox_container {
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  width: 15%;
  color: #000000;
}

.grid-item {
  display: flex;
  justify-content: space-between;
}

.grid-item label {
  font-size: 14px
}

#experience_container {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
}



</style>
