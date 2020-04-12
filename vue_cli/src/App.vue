<template>
  <div id="app">
    <ul class="left">
      <li><router-link :to="{name: 'homepage'}">الصفحة الرئيسية</router-link> </li>
      <li><router-link :to="{ name: 'news'}">الأخبار</router-link></li>
      <li><router-link :to="{name: 'money', query: {username: 'admin', lastname: 'last'}}">الاقتصاد</router-link></li>
    </ul>
    <router-view class="right"></router-view>
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
.left{
  height: 400px;
  float: left;
  margin: 20px;
  margin-right: 50px;
  padding: 20px;
  border: 1px solid gray;
}
.right{
  padding: 20px;
  display: inline-block;
  
}
</style>
