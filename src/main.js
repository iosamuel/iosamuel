import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./assets/css/main.scss";
import VTooltip from "v-tooltip";

Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
