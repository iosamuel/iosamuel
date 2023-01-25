<template>
  <footer>
    <button @click="navigateTo()" :aria-label="t('volver')">
      <fa :icon="['fas', 'arrow-circle-up']"></fa>
    </button>
    <LocaleSwitcher />
  </footer>
</template>

<script>
import { useI18n } from "vue-i18n";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

export default {
  components: {
    LocaleSwitcher
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
  methods: {
    navigateTo() {
      this.$emit("scroll", "home");
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/components/footer.scss"></style>

<i18n>
{
  "es": {
    "volver": "Volver arriba"
  },
  "en": {
    "volver": "Back to top"
  }
}
</i18n>
