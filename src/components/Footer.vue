<template>
  <footer>
    <button @click="navigateTo()">
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
