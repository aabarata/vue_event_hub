import Vue from "vue";
import Vuex from "vuex";
import * as todos from "@/store/modules/todos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos
  }
});
