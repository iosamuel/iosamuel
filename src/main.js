import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./assets/css/main.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
