import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";

import vTooltip from "v-tooltip";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(vTooltip);

new Vue({
  components: { App },
  router,
  template: "<App/>"
}).$mount("#app");
