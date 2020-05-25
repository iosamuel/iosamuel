<template>
  <div class="skills">
    <span
      v-for="icon in icons"
      :key="icon.icon"
      v-tooltip.bottom-start="icon.text"
      :data-color="icon.color"
      class="skills__icon"
    >
      <fa :icon="['fab', icon.icon]"></fa>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "html5",
          text: "Description",
          color: "#CE6809"
        },
        {
          icon: "css3-alt",
          text: "Description",
          color: "#E14D4D"
        },
        {
          icon: "sass",
          text: "Description",
          color: "#D62383"
        },
        {
          icon: "js",
          text: "Description",
          color: "#EFCE58"
        },
        {
          icon: "vuejs",
          text: "VueJS, incluido Vuex, Vue-Router, NuxtJS, NativeScript, etc",
          color: "#0F7B27"
        },
        {
          icon: "node-js",
          text: "Description",
          color: "#35A132"
        },
        {
          icon: "npm",
          text: "Description",
          color: "#D22020"
        },
        {
          icon: "git-alt",
          text: "Description",
          color: "#CD3B1A"
        },
        {
          icon: "gulp",
          text: "Description",
          color: "#E11010"
        },
        {
          icon: "trello",
          text: "Description",
          color: "#3D458B"
        },
        {
          icon: "linux",
          text: "Description",
          color: "#000000"
        },
        {
          icon: "python",
          text: "Description",
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

    &:hover {
      color: attr(data-color);
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
