import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store/store";
import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";
import "vue2-animate/dist/vue2-animate.min.css";

import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, regex, email } from "vee-validate/dist/rules";

extend("required", required);
extend("regex", regex);
extend("email", email);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(Snotify, {
  toast: {
    timeout: 3000,
    showProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false
  }
});

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    clearInput(dataObject) {
      Object.keys(dataObject).forEach(input => {
        dataObject[input] = "";
      });
    }
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.$snotify = this.$snotify;
  }
}).$mount("#app");
