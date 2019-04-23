import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '广州'
  },
  // actions: {
  //   changeCity (ctx, city) { // city是外部传进来的， ctx可以帮助获取commit方法
  //     ctx.commit('changeCity', city)
  //     console.log(city)
  //   }
  // },
  mutations: {
    changeCity (state, city) { // city是外部传过来的 state是指的所有的公用数据
      state.city = city
    }
  }
})
