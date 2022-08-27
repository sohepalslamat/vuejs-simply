<template>
  <div class="app">
    <h3>My root</h3>
    <SInput v-model="x" />
    <p>{{x}}</p>
    <button @click="x='Hi'">say Hi</button>
  </div>
</template>

<script>
import SInput from './components/SInput.vue'

export default {
  name: 'App',
  components: {
    SInput
  },
  data(){
    return{
      x: 'hi'
    }
  }
}
</script>

<style>
.app {
  height: fit-content;
  width: fit-content;
  padding: 10px;
   border: 1px solid rgb(0, 255, 106);
     
}
</style>
