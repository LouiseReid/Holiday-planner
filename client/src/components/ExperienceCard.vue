<template lang="html">
  <div class="experience-card">
    <h3>{{ experience.name }}</h3>
    <p>{{ experience.description | briefDesc }}</p>
    <router-link :to="{ name: 'experience', params: {id: experience._id} }">More Info</router-link>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'experience',
  props: ['experience'],
  filters: {
    briefDesc(string){
      return _.truncate(string, {
        length: 200,
        separator: /,?\.* +/ 
      })
    }
  }
}
</script>

<style lang="css" scoped>
.experience-card {
  flex: 25%;
  border: 1px solid red;
  padding: 0 10px;
  margin: 10px
}

h3 {
  text-align: center;
}

p {
  background-image: linear-gradient(0deg, rgba(1, 1, 1, 0.52) 10%,  #000000 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
