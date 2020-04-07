<template>
  <div id="app">
    <ul>
      <li><router-link to="/">الصفحة الرئيسية</router-link> </li>
      <li><router-link to="/news">الأخبار</router-link></li>
      <li><router-link to="/money">الاقتصاد</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
