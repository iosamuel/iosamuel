import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./assets/css/main.scss";
import { VTooltip } from "v-tooltip";
import ObserveVisibility from "vue-observe-visibility/src/directives/observe-visibility";
import i18n from "./i18n";

Vue.directive("observe-visibility", ObserveVisibility);
Vue.directive("tooltip", VTooltip);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
