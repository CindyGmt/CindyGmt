import Vue from 'vue'
import Vuex from 'vuex'
import navmenu from './modules/navmenu'
import app from './modules/app'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        navmenu,
        app
    }
  })
  
  export default store