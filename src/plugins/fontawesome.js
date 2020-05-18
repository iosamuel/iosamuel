import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faArrowCircleUp);

Vue.component("fa", FontAwesomeIcon);
