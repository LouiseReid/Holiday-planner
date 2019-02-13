<template lang="html">
  <div class="basket-item">
    <h4>{{ item.location }}</h4>
    <p>{{ item.name }}</p>
    <p>{{ item.date | moment("dddd, MMMM Do YYYY")}}</p>
    <p>£{{ item.cost }}</p>
    <form v-on:submit="submit" method="post">
      <button type="submit">X</button>
    </form>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'basket-item',
  props: ['item'],
  methods: {
    ...mapActions(['deleteData']),
    submit(e){
      e.preventDefault()
      this.deleteData(this.item._id)
    }
  }
}
</script>

<style lang="css" scoped>

.basket-item {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
}

h4 {
  letter-spacing: 1.5px;
  margin: 5px 0;
}

p {
  margin: 0;
  padding: 0;
  font-weight: lighter;
  color: #4d4d4d
}

form {
  align-self: flex-end;
}

input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
  border: none;
  padding: 0;
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 15px;
  font-weight: bolder;
}

button {
  color: #23b090;
  background-color: #fafafa;
  display: block;
  align-self: flex-end;
  width: 30px;
  text-align: center;
  border:  1px solid #23b090;
  text-decoration: none;
  transition: all .5s
}

button:hover {
  color: #ffffff;
  background-color: #23b090;
  transform: translateY(-2px);
}

hr {
  width: 80%;
  background-color: #bff4e8;
  height: 2px;
  border: 0
}
</style>
