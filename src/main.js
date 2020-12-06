import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/scss/custom.scss";
// import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
// import { required } from "vee-validate/dist/rules";

// extend("required", required);
// Vue.component("ValidationProvider", ValidationProvider);
// Vue.component("ValidationObserver", ValidationObserver);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.prototype.$http = (url, opts) => fetch(url, opts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
