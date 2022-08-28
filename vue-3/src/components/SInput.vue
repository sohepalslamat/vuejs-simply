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
  props: ['modelValue', 'first_name'],
  emits: ['update:modelValue', 'update:first_name'],
  computed :{
    v: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
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
