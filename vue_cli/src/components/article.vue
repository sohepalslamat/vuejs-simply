<template>
<div>
    <h1>id: {{id}}</h1>
    <h2> عنوان المقال رقم {{$route.params.id}} </h2>
    <p> نص المثال رقم {{$route.params.id}}</p>
</div>
</template>

<script>
export default {
    data(){
        return{
            id : ''
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.id = to.params.id
    }

}
</script>

<style>

</style>