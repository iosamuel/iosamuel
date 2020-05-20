<template>
  <div class="home">
    <h2>HOME</h2>
    <div class="home-card">
      <img src="@/assets/images/ios-blackWhite.png" alt="Pengu" />
      <div class="home-card--left">
        <img src="@/assets/images/Iso-IOs.png" alt="Logo" />
      </div>
      <div class="home-card--right">
        <div class="right__content">
          <h3>IO</h3>
          <p>
            Viene de Input/Output, como el flujo de todo sistema informatico,
            representando las entradas y salidas
          </p>
          <h3>Samuel</h3>
          <p>
            Mi nombre, mucho gusto! Te invito a seguirme en mis redes sociales y
            asi estar atento a nuevas noticias
          </p>
        </div>
        <SocialIcons className="home-card--bottom"></SocialIcons>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";

export default {
  components: {
    SocialIcons
  }
};
</script>

<style lang="scss" src="@/assets/css/pages/home.scss"></style>
