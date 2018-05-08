import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

//  vuex是一个插件
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
