import Vue from 'vue';
import Vuex from 'vuex';
import {AxiosResponse} from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {groupBy} from 'lodash';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadSpin: true,
        users: [],
        actionUserId: 0,
        toDoList: [],
    },
    getters: {},
    mutations: {
        setUsers(state, array) {
            state.users = array;
        },

        setLoadSpin(state, flag: boolean) {
            state.loadSpin = flag;
        },

        setToDoList(state, array) {
            state.toDoList = array;
        },

        setUserId(state, id: number) {
            state.actionUserId = id;
        }
    },
    actions: {

        loadingToDoFromUserId({commit}, [$http, actionUserId]): void {
            commit('setLoadSpin', true);
            $http.get(`https://jsonplaceholder.typicode.com/user/` + actionUserId + `/todos/`).then((response: AxiosResponse) => {
                commit('setToDoList', groupBy(response.data, 'completed'));
            }).finally(() => {
                commit('setLoadSpin', false);
            });
        },

        getToDoList({commit}, [$http]) {
            commit('setLoadSpin', true);
            $http.get('https://jsonplaceholder.typicode.com/todos/').then((response: AxiosResponse) => {
                commit('setToDoList', groupBy(response.data, 'completed'));
                commit('setLoadSpin', false);
            })
        },
    },
    modules: {}
})
