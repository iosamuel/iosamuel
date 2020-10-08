<template>
  <div :class="className" v-if="!split">
    <a
      v-for="icon in socialIcons"
      :key="icon.name"
      :href="icon.link"
      :class="`social-icon ${icon.name}`"
      rel="noopener noreferrer"
      target="_blank"
      :aria-label="`Link a ${icon.name}`"
    >
      <fa :icon="['fab', icon.name]"></fa>
    </a>
  </div>
  <div :class="className" v-else>
    <slot></slot>
    <div class="" v-for="(iconWrap, key) in socialIcons" :key="key">
      <a
        v-for="icon in iconWrap"
        :key="icon.name"
        :href="icon.link"
        :class="`social-icon ${icon.name}`"
        rel="noopener noreferrer"
        target="_blank"
        :aria-label="`Link a ${icon.name}`"
      >
        <fa :icon="['fab', icon.name]"></fa>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["className", "split"],
  data() {
    return {
      icons: [
        {
          link: "https://twitter.com/iosamuel",
          name: "twitter"
        },
        {
          link: "https://facebook.com/iosamuel.dev",
          name: "facebook"
        },
        {
          link: "https://linkedin.com/in/iosamuel",
          name: "linkedin"
        },
        {
          link: "https://github.com/iosamuel",
          name: "github"
        },
        {
          link: "https://twitch.tv/iosamuel",
          name: "twitch"
        },
        {
          link: "https://youtube.com/channel/UCTvtM8ZisSrp9rii77D85Zw",
          name: "youtube"
        }
      ]
    };
  },
  computed: {
    socialIcons() {
      if (this.split) {
        const half = this.icons.length / 2;
        return [this.icons.slice(0, half), this.icons.slice(half, half * 2)];
      }
      return this.icons;
    }
  }
};
</script>

<style lang="scss">
.social-icon {
  @apply text-2xl;

  svg {
    @apply transition-transform duration-75 ease-in;
  }

  &:hover {
    svg {
      @apply transform scale-125;
    }
  }

  &.twitter {
    color: #53a6e2;
  }
  &.facebook {
    color: #3d5fd8;
  }
  &.linkedin {
    color: #1e82cb;
  }
  &.github {
    color: #000000;
  }
  &.twitch {
    color: #89608f;
  }
  &.youtube {
    color: #e04343;
  }
}
</style>
