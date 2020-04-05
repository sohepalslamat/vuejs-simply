<template>
<ul>
    <li v-for="(list,i) in lists" :key="i">{{list.name}} - {{list.v}}</li>
</ul>
  
</template>

<script>
export default {
    data(){
        return{
            lists: [
                {name: "vue", v: "0.1"},
                {name: "cli", v: "1.2"}
            ]
        }
    }

}
</script>

<style>

</style>