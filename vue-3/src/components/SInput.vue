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
  props: ['modelValue', 'first_name', 'modelModifiers',  'first_nameModifiers'],
  emits: ['update:modelValue', 'update:first_name'],
  computed :{
    v: {
      get() {
        return this.modelValue
      },
      set(val) {
        // this.$emit('update:modelValue', val)
        this.emitvalue(val)
      }
    },
    name: {
      get() {
        return this.first_name
      },
      set(val) {
        // this.$emit('update:first_name', val)
        this.emitFirst_name(val)
      }
    }
  },
  methods: {
    emitvalue(val){
      let value = val
      if(this.modelModifiers.capitalize){
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    },
    emitFirst_name(val){
      let value = val
      if(this.first_nameModifiers.capitalize){
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:first_name', value)
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
