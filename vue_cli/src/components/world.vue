<template>
  <div>
      <h1>عالمي</h1>
      <ul>
        <li v-for="i in 4 " :key="i"><router-link :to="{name: 'article', params: { id: i}}">المثال {{i}}</router-link></li>
      </ul>
      <p>{{$store.state.isLogin}}</p>
      <router-view class="border"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>