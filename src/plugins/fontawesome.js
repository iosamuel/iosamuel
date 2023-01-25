import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBars,
  faArrowCircleUp,
  faArrowCircleRight,
  faArrowCircleLeft,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitch,
  faYoutube,
  faDiscord,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faVuejs,
  faNodeJs,
  faNpm,
  faGitAlt,
  faGulp,
  faJira,
  faTrello,
  faLinux,
  faPython
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faArrowCircleUp,
  faArrowCircleRight,
  faArrowCircleLeft,
  faGlobe,
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitch,
  faYoutube,
  faDiscord,
  faHandPointer,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faVuejs,
  faNodeJs,
  faNpm,
  faGitAlt,
  faGulp,
  faJira,
  faTrello,
  faLinux,
  faPython
);

export default {
  install: (app) => {
    app.component("fa", FontAwesomeIcon);
  }
};
