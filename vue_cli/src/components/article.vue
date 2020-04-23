<template>
<div>
    <h1>id: {{$route.params.id}}</h1>
    <h2> عنوان المقال رقم {{$route.params.id}} </h2>
    <p> نص المثال رقم {{$route.params.id}}</p>
    <p>{{isLogin}}</p>
    <p v-for="item in todosdone" :key="item.id">{{item.name}}</p>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['isLogin']),
        ...mapGetters(['todosdone'])
    }

}
</script>

<style>

</style>