<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <Home></Home>
      <Contact></Contact>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
    Contact
  },
  data() {
    return {};
  }
};
</script>
