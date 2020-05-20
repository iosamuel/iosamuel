import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitch,
  faYoutube,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faArrowCircleUp,
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitch,
  faYoutube,
  faDiscord,
  faHandPointer
);

Vue.component("fa", FontAwesomeIcon);
