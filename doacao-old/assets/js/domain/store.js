import Vue from '../vendor/vue.js'
import Vuex from '../vendor/vuex.js'

import state from './state.js'
import mutations from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
})