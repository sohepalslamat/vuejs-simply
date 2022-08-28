<template>
  <main class="app">
    <h3>My root</h3>
    <SInput v-model.capitalize="x" v-model:first_name.capitalize="s" />
    <p>{{x}}</p>
    <button @click="x='Hi'">say Hi</button>
    ------------
    <p>{{s}}</p>
    <button @click="s='jon'">set Jon</button>
  </main>
</template>

<script>
import SInput from "./components/SInput.vue";
export default {
  components: {
    SInput,
  },
  data(){
    return{
      x: 'hi',
      s: 'Ahmed'
    }
  }
};
</script>
<style scoped>
  .app {
  height: fit-content;
  width: fit-content;
  padding: 10px;
  border: 1px solid rgb(0, 255, 106);
     
}
</style>
