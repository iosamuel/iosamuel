<template>
  <div
    class="contact"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    }"
  >
    <h2>Contact</h2>
    <div class="contact-card" :class="{ active, inactive: !active }">
      <img src="@/assets/images/ios-blackWhite.png" alt="Pengu" />
      <div class="contact-card--left"></div>
      <div class="contact-card--right">
        <div class="right__content">
          <h3>Comunidad</h3>
          <p>
            Puedes hacer parte
            <a href="https://discord.gg/mucYjqJ" target="_blank">
              #EStremaerCoders
            </a>
            y ver todo el contenido en español que estamos generando para el
            mundo
          </p>
          <div class="discord-icon">
            <a
              href="https://discord.gg/hRnfXTZ"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
            >
              <fa :icon="['fab', 'discord']"></fa>
            </a>
            <span class="discord-icon__hand">
              <fa :icon="['far', 'hand-pointer']"></fa>
            </span>
          </div>
          <h3>Me</h3>
          <p>
            Puedes seguirme a través de mis redes sociales Twitter, Facebook,
            Twitch, etc. O puedes escribirme a
            <a href="mailto:me@iosamuel.dev">me@iosamuel.dev</a>
          </p>
        </div>
        <SocialIcons
          className="contact-card--bottom"
          :split="true"
          :discord="true"
        >
          <div class="discord-icon">
            <a
              href="https://discord.gg/hRnfXTZ"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
            >
              <fa :icon="['fab', 'discord']"></fa>
            </a>
            <span class="discord-icon__hand">
              <fa :icon="['far', 'hand-pointer']"></fa>
            </span>
          </div>
        </SocialIcons>
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
      this.$emit("visible", { from: "contact", visible, intersectionRatio });
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/pages/contact.scss"></style>
