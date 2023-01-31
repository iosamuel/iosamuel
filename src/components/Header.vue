<template>
  <header>
    <figure>
      <img src="@/assets/images/IOS-Isotipo.png" alt="Logo" />
      <figcaption>
        <span>IO</span>
        <span>Samuel</span>
      </figcaption>
    </figure>
    <nav :class="{ 'show-nav': showNavContent }">
      <section class="nav-content">
        <a
          href="#home"
          class="nav-content__button"
          :class="{ active: active === 'home' }"
          @click.prevent="navigateTo('home')"
        >
          <span>Home</span>
        </a>
        <a
          href="#about"
          class="nav-content__button"
          :class="{ active: active === 'about' }"
          @click.prevent="navigateTo('about')"
        >
          <span>About</span>
        </a>
        <a
          href="#contact"
          class="nav-content__button"
          :class="{ active: active === 'contact' }"
          @click.prevent="navigateTo('contact')"
        >
          <span>Contact</span>
        </a>
      </section>
      <button
        class="burger"
        @click="showNavContent = !showNavContent"
        :aria-label="t('abrir')"
      >
        <fa :icon="['fas', 'bars']"></fa>
      </button>
    </nav>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  props: ["active"],
  data() {
    return {
      showNavContent: false
    };
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    navigateTo(where) {
      this.showNavContent = false;
      this.$emit("scroll", where);
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/components/header.scss"></style>

<i18n>
{
  "es": {
    "abrir": "Abrir menú"
  },
  "en": {
    "abrir": "Open menu"
  }
}
</i18n>
