<template>
<div class="s-input">
  <h4>My component</h4>
  <!-- <input type="text" :value="value" @input="$emit('update', $event.target.value)" > -->
  <input type="text" v-model="v" >
  <input type="text" v-model="name" title="name" >
  
</div>
</template>

<script>
export default {
  name: "SInput",
  props: ['value', 'first_name'],
  emits: ['update:value', 'update:first_name'],
  computed :{
    v: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    },
    name: {
      get() {
        return this.first_name
      },
      set(val) {
        this.$emit('update:first_name', val)
      }
    }
  }
  
};
</script>

<style>
.s-input{
  margin: 15px;
  height: fit-content;
  width: fit-content;
  padding: 15px;
  border: 1px solid red;
}
</style>
