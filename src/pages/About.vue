<template>
  <div
    class="about"
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.6,
        throttle: 300,
        throttleOptions: {
          leading: 'visible'
        }
      }
    }"
  >
    <h2>About</h2>
    <div class="about-card">
      <img src="@/assets/images/ios-blackWhite.png" alt="Pengu" />
      <div class="about-card--right">
        <img src="@/assets/images/pp.jpg" alt="ME" />
      </div>
      <div class="about-card--left">
        <div class="left__content">
          <h3>Historia</h3>
          <p>
            Soy Samuel Burbano, estudio programacion desde que tengo 12 años,
            trabajo en el ambito profesional de la programacion desde los 14, a
            dia de hoy tengo 23 años y cada dia me enamoro mas de este
            maravilloso mundo.
          </p>
          <p>
            He trabajado en tecnologias de backend y frontend, en los ultimos
            5-6 años me he dedicado al frontend y actualmente soy Senior
            Frontend Developer.
          </p>
          <p>
            Amo las comunidades y siempre busco organizar o participar en ellas.
            Hago parte de
            <a href="https://discord.gg/mucYjqJ" target="_blank">
              #EStreamerCoders
            </a>
            , una comunidad de streamers programadores en español, donde hago
            streams regularmente sobre JavaScript y VueJS
          </p>
          <h3>Frase</h3>
          <p>
            <em>
              “ Coding is easy, logically coding is what makes it special
            </em>
          </p>
          <p>
            Cualquiera puede programar, pero aprender a programar “bien” y
            usando la logica es algo que se aprende a traves de los años con
            practica y diligencia
          </p>
          <h3>Skills</h3>
        </div>
      </div>
      <Skills />
    </div>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";

export default {
  components: {
    Skills
  },
  methods: {
    visibilityChanged(visible, { intersectionRatio }) {
      this.$emit("visible", { from: "about", visible, intersectionRatio });
    }
  }
};
</script>

<style lang="scss" src="@/assets/css/pages/about.scss"></style>
