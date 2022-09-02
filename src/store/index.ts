import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    actionUserId: 0,
    toDoList: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, array: any) {
      state.users = array;
    },

    setToDoList(state, array: any) {
      state.toDoList = array;
    },

    setUserId(state, id: number) {
      state.actionUserId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
