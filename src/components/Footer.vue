<template>
  <footer>
    <button @click="navigateTo()" aria-label="Volver arriba">
      <fa :icon="['fas', 'arrow-circle-up']"></fa>
    </button>
  </footer>
</template>

<script>
export default {
  methods: {
    navigateTo() {
      this.$emit("scroll", "home");
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/components/footer.scss"></style>
