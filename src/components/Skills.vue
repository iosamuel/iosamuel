<template>
  <div class="skills">
    <button
      v-for="icon in icons"
      :key="icon.icon"
      :class="icon.icon"
      class="skills__icon"
      v-tooltip.bottom-start="{
        content: icon.text,
        trigger: 'hover click focus'
      }"
      :aria-label="`Habilidad ${icon.icon}`"
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
          text: "HTML & HTML5 API (WebStorage, Offline, Graphics, etc)",
          color: "#CE6809"
        },
        {
          icon: "css3-alt",
          text: "CSS & CSS3 (Animations, Grid, etc)",
          color: "#E14D4D"
        },
        {
          icon: "sass",
          text: "Preprocesadores CSS como SASS, Stylus y PostCSS",
          color: "#D62383"
        },
        {
          icon: "js",
          text:
            "JavaScript como mi lenguaje principal, usando siempre su última sintaxis descrita por la W3C. Asi cómo También TypeScript y todos sus features.",
          color: "#EFCE58"
        },
        {
          icon: "vuejs",
          text: "VueJS, incluido Vuex, Vue-Router, NuxtJS, NativeScript, etc",
          color: "#0F7B27"
        },
        {
          icon: "node-js",
          text:
            "NodeJS para crear APIs con Express y KOA, GraphQL servers, DBM con Mongoose, etc",
          color: "#35A132"
        },
        {
          icon: "npm",
          text: "Creación y distribución de paquetes en NPM con y sin lerna.",
          color: "#D22020"
        },
        {
          icon: "git-alt",
          text: "Version managers como Git altamente usado todos los días.",
          color: "#CD3B1A"
        },
        {
          icon: "gulp",
          text:
            "Transpilers/Compilers/Bundlers como Gulp, Webpack, Babel, entre otros.",
          color: "#E11010"
        },
        {
          icon: "trello",
          text: "Metodologias Agiles (SCRUM) con JIRA o Trello.",
          color: "#3D458B"
        },
        {
          icon: "linux",
          text:
            "Manejo de servidores y entornos virtuales (SSH) en sistemas operativos Linux.",
          color: "#000000"
        },
        {
          icon: "python",
          text:
            "Python fue mi primer lenguaje principal y he programado muchas cosas con el (juegos, web con Django, desktop aplications con PyQt, etc)",
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
