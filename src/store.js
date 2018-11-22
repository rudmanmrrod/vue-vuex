import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url : "https://api.github.com/",
  },
  mutations: {

  },
  getters: {
    getUser: (state) => (user) => {
      return state.base_url + 'users/' + user
    },
    getRepos: (state, getters) => (user,page) => {

      return getters.getUser(user) + '/repos?page=' + page
    }
  },
  actions: {
  }
})
