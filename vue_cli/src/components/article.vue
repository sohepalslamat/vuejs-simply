<template>
<div>
    <h1>id: {{$route.params.id}}</h1>
    <h2> عنوان المقال رقم {{$route.params.id}} </h2>
    <p> نص المثال رقم {{$route.params.id}}</p>
    <p>{{$store.state.isLogin}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }

}
</script>

<style>

</style>