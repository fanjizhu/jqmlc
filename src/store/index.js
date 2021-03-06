import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import globalVal from './modules/global'
import auth from './modules/auth'
import products from './modules/products'
import pay from './modules/pay'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state,
  mutations,
  actions,
  getters,
  modules: {
    globalVal,
    auth,
    products,
    pay
  }
})

export default store
