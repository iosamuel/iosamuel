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
          <h3 v-t="'contact.comunidad'"></h3>
          <i18n path="contact.comunidad_explicacion" tag="p">
            <template #estreamercoders>
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/mucYjqJ"
                target="_blank"
                aria-label="discord link"
              >
                #EStremaerCoders
              </a>
            </template>
          </i18n>
          <div class="discord-icon">
            <a
              href="https://discord.gg/3nhN8TE"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
              aria-label="discord link"
            >
              <fa :icon="['fab', 'discord']"></fa>
            </a>
            <span class="discord-icon__hand">
              <fa :icon="['far', 'hand-pointer']"></fa>
            </span>
          </div>
          <h3 v-t="'contact.yo'"></h3>
          <i18n path="contact.yo_descripcion" tag="p">
            <template #mailto>
              <a href="mailto:me@iosamuel.dev">me@iosamuel.dev</a>
            </template>
          </i18n>
        </div>
        <SocialIcons
          className="contact-card--bottom"
          :split="true"
          :discord="true"
        >
          <div class="discord-icon">
            <a
              href="https://discord.gg/3nhN8TE"
              target="_blank"
              class="social-icon discord"
              rel="noopener noreferrer"
              aria-label="discord link"
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
