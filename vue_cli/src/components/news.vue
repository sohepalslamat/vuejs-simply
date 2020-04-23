<template>
  <div>
      <h1>صفحة الأخيار </h1>
      <router-link :to="{name: 'seasa'}">سياسة</router-link>
      <span> / </span>
      <router-link :to="{name: 'world'}">عالمي</router-link>
      <router-view class="border"></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .border{
    border: gray 1px dashed;
    display: block;
  }

</style>