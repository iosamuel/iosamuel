<template>
  <div>
    <header>
      <figure>
        <img src="@/assets/images/IOS-Isotipo.png" alt="Logo" />
        <figcaption>
          <span>IO</span>
          <span>Samuel</span>
        </figcaption>
      </figure>
      <nav>
        <button class="nav-button active">
          <span>Home</span>
        </button>
        <button class="nav-button">
          <span>About</span>
        </button>
        <button class="nav-button">
          <span>Contact</span>
        </button>
        <button
          class="burger"
          :class="{ active: showNavContent }"
          @click="showNavContent = !showNavContent"
        >
          <fa :icon="['fas', 'bars']"></fa>
        </button>
      </nav>
    </header>
    <section class="nav-content" v-show="showNavContent">
      <button class="nav-content__button active">Home</button>
      <button class="nav-content__button">About</button>
      <button class="nav-content__button">Contact</button>
    </section>
  </div>
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
