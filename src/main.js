import { ViteSSG } from "vite-ssg/single-page";
import ObserveVisibility from "@/directives/observe-visibility";
import i18n from "@/plugins/i18n";
import Fontawesome from "@/plugins/fontawesome";
import FloatingVue from "floating-vue";
import App from "@/App.vue";

import "@/assets/css/main.scss";
import "floating-vue/dist/style.css";

export const createApp = ViteSSG(App, ({ app }) => {
  app.use(i18n);
  app.use(Fontawesome);
  app.use(FloatingVue);
  app.directive("observe-visibility", ObserveVisibility);
});
