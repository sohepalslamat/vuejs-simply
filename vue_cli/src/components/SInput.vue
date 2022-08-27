<template>
<div class="s-input">
  <h4>My component</h4>
  <!-- <input type="text" :value="value" @input="$emit('update', $event.target.value)" > -->
  <input type="text" v-model="v" >
  
</div>
</template>

<script>
export default {
  name: "SInput",
  model: {
    prop: 'value',
    event: 'update'
  },
  props: ['value'],
  computed :{
    v: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update', val)
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
