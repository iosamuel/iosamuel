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
        <button class="nav-content__button active"><span>Home</span></button>
        <button class="nav-content__button"><span>About</span></button>
        <button class="nav-content__button"><span>Contact</span></button>
      </section>
      <button class="burger" @click="showNavContent = !showNavContent">
        <fa :icon="['fas', 'bars']"></fa>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavContent: false
    };
  }
};
</script>

<style lang="scss" src="@/assets/css/components/header.scss"></style>
