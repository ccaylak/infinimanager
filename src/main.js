import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, regex } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("regex", {
  ...regex,
  message: "This field is not valid"
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
