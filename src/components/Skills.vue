<template>
  <div class="skills">
    <button
      v-for="icon in icons"
      :key="icon.icon"
      :class="icon.icon"
      class="skills__icon"
      v-tooltip.bottom-start="{
        content: $t(icon.icon),
        trigger: 'hover click focus'
      }"
      :aria-label="`${$tc('about.habilidades', 1)} ${icon.icon}`"
    >
      <fa :icon="['fab', icon.icon]"></fa>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "html5",
          color: "#CE6809"
        },
        {
          icon: "css3-alt",
          color: "#E14D4D"
        },
        {
          icon: "sass",
          color: "#D62383"
        },
        {
          icon: "js",
          color: "#EFCE58"
        },
        {
          icon: "vuejs",
          color: "#0F7B27"
        },
        {
          icon: "node-js",
          color: "#35A132"
        },
        {
          icon: "npm",
          color: "#D22020"
        },
        {
          icon: "git-alt",
          color: "#CD3B1A"
        },
        {
          icon: "gulp",
          color: "#E11010"
        },
        {
          icon: "trello",
          color: "#3D458B"
        },
        {
          icon: "linux",
          color: "#000000"
        },
        {
          icon: "python",
          color: "#024B6A"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.skills {
  @apply relative mx-auto w-64 z-30 grid grid-flow-row grid-cols-3 grid-rows-4 row-gap-6;

  &__icon {
    @apply text-4xl flex items-center justify-center;

    &:focus {
      @apply outline-none;
    }

    &.html5 {
      &:focus,
      &:hover {
        color: #ce6809;
      }
    }
    &.css3-alt {
      &:focus,
      &:hover {
        color: #e14d4d;
      }
    }
    &.sass {
      &:focus,
      &:hover {
        color: #d62383;
      }
    }
    &.js {
      &:focus,
      &:hover {
        color: #efce58;
      }
    }
    &.vuejs {
      &:focus,
      &:hover {
        color: #0f7b27;
      }
    }
    &.node-js {
      &:focus,
      &:hover {
        color: #35a132;
      }
    }
    &.npm {
      &:focus,
      &:hover {
        color: #d22020;
      }
    }
    &.git-alt {
      &:focus,
      &:hover {
        color: #cd3b1a;
      }
    }
    &.gulp {
      &:focus,
      &:hover {
        color: #e11010;
      }
    }
    &.trello {
      &:focus,
      &:hover {
        color: #3d458b;
      }
    }
    &.linux {
      &:focus,
      &:hover {
        color: #000000;
      }
    }
    &.python {
      &:focus,
      &:hover {
        color: #024b6a;
      }
    }
  }
}

.tooltip {
  @apply block z-50 max-w-sm;

  .tooltip-inner {
    @apply bg-black text-white rounded-md p-4;
  }

  .tooltip-arrow {
    @apply w-0 h-0 absolute border border-black border-solid z-10;
  }

  &[x-placement^="bottom"] {
    @apply mt-2;

    .tooltip-arrow {
      @apply border-8 border-t-0 mt-0 mb-0;
      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      top: -8px;
      left: calc(50% - 4px);
    }
  }

  &[aria-hidden="true"] {
    @apply invisible opacity-0 transition-all ease-in duration-75;
  }

  &[aria-hidden="false"] {
    @apply visible opacity-100 transition-opacity ease-in duration-75;
  }
}
</style>

<i18n>
{
  "es": {
    "html5": "HTML & HTML5 API (WebStorage, Offline, Graphics, etc)",
    "css3-alt": "CSS & CSS3 (Animations, Grid, etc)",
    "sass": "Preprocesadores CSS como SASS, Stylus y PostCSS",
    "js": "JavaScript como mi lenguaje principal, usando siempre su última sintaxis descrita por la W3C. Asi cómo También TypeScript y todos sus features.",
    "vuejs": "VueJS, incluido Vuex, Vue-Router, NuxtJS, NativeScript, etc",
    "node-js": "NodeJS para crear APIs con Express y KOA, GraphQL servers, DBM con Mongoose, etc",
    "npm": "Creación y distribución de paquetes en NPM con y sin lerna",
    "git-alt": "Version managers como Git altamente usado todos los días",
    "gulp": "Transpilers/Compilers/Bundlers como Gulp, Webpack, Babel, entre otros",
    "trello": "Metodologias Agiles (SCRUM) con JIRA o Trello",
    "linux": "Manejo de servidores y entornos virtuales (SSH) en sistemas operativos Linux.",
    "python": "Python fue mi primer lenguaje principal y he programado muchas cosas con el (juegos, webs con Django, desktop aplications con PyQt, etc)"
  },
  "en": {
    "html5": "HTML & HTML5 API (WebStorage, Offline, Graphics, etc)",
    "css3-alt": "CSS & CSS3 (Animations, Grid, etc)",
    "sass": "CSS Preprocessors like SASS, Stylus and PostCSS",
    "js": "JavaScript as my main language, always using the last syntax provided by W3C. As well as TypeScript and all it's features",
    "vuejs": "VueJS, including Vuex, Vue-Router, NuxtJS, NativeScript, etc",
    "node-js": "NodeJS to create APIs with Express and KOA, GraphQL servers, DBM with Mongoose, etc",
    "npm": "Creating and distributing packages using NPM with or without lerna",
    "git-alt": "Version managers like Git highly used everyday",
    "gulp": "Transpilers/Compilers/Bundlers like Gulp, Webpack, Babel, between others",
    "trello": "Agile Methodologies (SCRUM) with JIRA or Trello",
    "linux": "Server management and virtual environments (SSH) on Linux Operative Systems",
    "python": "Python was my first main language and I've programmed a lot of things with it (games, webs with Django, desktop aplications with PyQt, etc)"
  }
}
</i18n>
