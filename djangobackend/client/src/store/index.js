import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loadingStatus: 'notLoading',
        buttons: []
    },

    mutations: {
        SET_LOADING_STATUS(state, loadingStatus) {
            state.loadingStatus = loadingStatus
        },
        SET_BUTTONS(state, buttons) {
            state.buttons = buttons
        }
    },

    actions: {
        fetchButtons(context) {
            // Initially set status to loading
            context.commit('SET_LOADING_STATUS', 'loading')

            axios({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/buttons/'
            })
            .then(response => {
                context.commit('SET_LOADING_STATUS', 'notLoading')
                context.commit('SET_BUTTONS', response.data)
            })
        }
    }
})
