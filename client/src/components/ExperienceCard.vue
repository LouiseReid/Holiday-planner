<template lang="html">
  <div class="experience-card">
    <h3>{{ experience.name }}</h3>
    <p>{{ experience.description | briefDesc }}</p>
    <router-link :to="{ name: 'experience', params: {id: experience._id} }">More Info &rarr;</router-link>
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
  padding: 10px 10px;
  margin: 10px;
  border: 2px solid #bff4e8;
  border-radius: 5%;
  transition: all 0.2s
}

.experience-card:hover {
  box-shadow: 4px 5px 10px #d4d4d4;
  transform: scale(1.05);
}

h3 {
  text-align: center;
}

p {
  background-image: linear-gradient(0deg, rgba(1, 1, 1, 0.52) 10%,  #000000 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

a {
  color: #23b090;
  display: block;
  margin: 0 auto;
  width: 80px;
  text-align: center;
  border-bottom:  1px solid #23b090;
  padding: 5px;
  text-decoration: none;
  transition: all .5s
}

a:hover {
  color: #ffffff;
  background-color: #23b090;
  transform: translateY(-2px);
}

</style>
