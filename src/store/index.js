import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const TOKEN_KEY='ZUFANG_USER'
export default new Vuex.Store({
  state: {
    // 用来存储用户登陆信息（token）
    // user:null
    user:JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      
      state.user = payload
      // 为了防止刷新丢失，需要把数据备份到本地存储 
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user ))
    },
  },
  actions: {},
  modules: {},
});
