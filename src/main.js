import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const eventHub = new Vue();
Vue.prototype.$eventHub = eventHub;

Vue.config.errorHandler = (err, vm, info) => {
  console.log("errorHandler");
  //error
  console.log(err);
  //component
  console.log(vm);
  //tracing
  console.log(info);
};

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
