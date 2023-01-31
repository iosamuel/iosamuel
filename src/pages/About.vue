<template>
  <div
    class="about"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    }"
  >
    <h2>About</h2>
    <div class="about-card" :class="{ active, inactive: !active }">
      <img src="@/assets/images/ios-blackWhite.png" alt="Pengu" />
      <div class="about-card--right">
        <img src="@/assets/images/pp.jpeg" alt="ME" />
      </div>
      <div class="about-card--left">
        <div class="left__content">
          <h3>{{ $t("about.historia") }}</h3>
          <p>{{ $t("about.historia_p1") }}</p>
          <p>{{ $t("about.historia_p2") }}</p>
          <i18n-t keypath="about.historia_p3" tag="p" scope="global">
            <template #estreamercoders>
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/mucYjqJ"
                target="_blank"
                aria-label="discord link"
              >
                #EStreamerCoders
              </a>
            </template>
          </i18n-t>
          <h3>{{ $t("about.frase") }}></h3>
          <p>
            <em>
              “ Coding is easy, logically coding is what makes it special
            </em>
          </p>
          <p>{{ $t("about.frase_explicacion") }}</p>
          <h3>{{ $t("about.habilidades", 3) }}</h3>
        </div>
      </div>
      <Skills />
    </div>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  props: {
    active: Boolean
  },
  components: {
    Skills
  },
  methods: {
    visibilityChanged(visible, { intersectionRatio }) {
      this.$emit("visible", {
        from: "about",
        visible,
        intersectionRatio
      });
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/pages/about.scss"></style>
