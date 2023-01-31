<template>
  <div
    class="home"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    }"
  >
    <h1>Samuel Burbano</h1>
    <div class="home-card" :class="{ active, inactive: !active }">
      <img src="@/assets/images/ios-blackWhite.png" alt="Pengu" />
      <transition appear name="home-card--left">
        <div class="home-card--left">
          <img src="@/assets/images/Iso-IOs.png" alt="Logo" />
        </div>
      </transition>
      <div class="home-card--right">
        <div class="right__content">
          <h3>IO</h3>
          <p>{{ $t("home.io") }}</p>
          <h3>Samuel</h3>
          <p>{{ $t("home.samuel") }}</p>
        </div>
        <transition appear name="home-card--bottom">
          <SocialIcons className="home-card--bottom"></SocialIcons>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";

export default {
  props: {
    active: Boolean
  },
  components: {
    SocialIcons
  },
  methods: {
    visibilityChanged(visible, { intersectionRatio }) {
      this.$emit("visible", { from: "home", visible, intersectionRatio });
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/pages/home.scss"></style>
