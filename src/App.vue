<template>
  <div id="app">
    <Header />
    <div class="content">
      <Home />
      <About />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    About,
    Contact
  },
  data() {
    return {};
  }
};
</script>
