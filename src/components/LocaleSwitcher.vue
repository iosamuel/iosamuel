<template>
  <div class="locale-switcher">
    <select id="locale" v-model="$i18n.locale">
      <option v-for="locale in locales" :key="locale.key" :value="locale.key">
        {{ locale.label }}
      </option>
    </select>
    <label for="locale" aria-label="Locale">
      <fa :icon="['fas', 'globe']"></fa>
    </label>
  </div>
</template>

<script>
export default {
  data: () => ({
    locales: [
      { key: "es", label: "Español" },
      { key: "en", label: "English" }
    ]
  }),
  watch: {
    "$i18n.locale": {
      handler(locale) {
        localStorage.setItem("locale", locale);
      }
    }
  }
};
</script>

<style lang="scss">
.locale-switcher {
  @apply absolute z-50;
  right: 2rem;

  label > svg {
    @apply text-white ml-2;
  }
}
</style>
