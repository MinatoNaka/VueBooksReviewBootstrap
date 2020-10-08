import Vue from "vue";
import Vuex from "vuex";
import { UPDATE_CURRENT } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: null,
  },
  mutations: {
    [UPDATE_CURRENT](state, payload) {
      state.current = payload;
    },
  },
  actions: {
    [UPDATE_CURRENT]({ commit }, payload) {
      commit(UPDATE_CURRENT, payload);
    },
  },
});
