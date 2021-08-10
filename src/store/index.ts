import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarReduced:false,
    loggedIn: false
  },
  getters: {
    isSidebarReduced(state){
      return state.sidebarReduced;
    },
    isLoggedIn(state){
      return state.loggedIn;
    }
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
  }
})