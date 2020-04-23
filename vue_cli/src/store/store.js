import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        isLogin: true,
        todos:[
            {id:1 , name:"مهمة1", done: true},
            {id:2 , name:"مهمة2", done: false},
            {id:3 , name:"مهمة3", done: true},
            {id:4 , name:"مهمة4", done: true}
        ]

    },
    getters:{
        todosdone(state){
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations:{
        set_isLogin(state, val){
            state.isLogin = val
        }
    }    

})

export default store