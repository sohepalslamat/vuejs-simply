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
  beforeRouteEnter (to, from, next) {
    console.log(from.path)
    if(from.path == '/'){
      next({name:"money"})
    }
    else { next()}
  }

}
</script>

<style>
  .border{
    border: gray 1px dashed;
    display: block;
  }

</style>