<template>
  <div id="app">
    <HelloWorld />
    <List />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    List
  }
}
</script>

<style>
#app {
 
}
</style>
