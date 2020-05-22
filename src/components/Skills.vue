<template>
  <div class="skills">
    <span class="skills__icon" v-for="icon in icons" :key="icon.icon">
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
          text: "Description"
        },
        {
          icon: "css3-alt",
          text: "Description"
        },
        {
          icon: "sass",
          text: "Description"
        },
        {
          icon: "js",
          text: "Description"
        },
        {
          icon: "vuejs",
          text: "Description"
        },
        {
          icon: "node-js",
          text: "Description"
        },
        {
          icon: "npm",
          text: "Description"
        },
        {
          icon: "git-alt",
          text: "Description"
        },
        {
          icon: "gulp",
          text: "Description"
        },
        {
          icon: "trello",
          text: "Description"
        },
        {
          icon: "linux",
          text: "Description"
        },
        {
          icon: "python",
          text: "Description"
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
  }
}
</style>
