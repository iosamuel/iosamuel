<template>
  <div id="app">
    <Header :active="header.active" @scroll="scroll($event)" />
    <div class="content">
      <Home
        ref="home"
        :active="header.active === 'home'"
        @visible="changeActive"
      />
      <About
        ref="about"
        :active="header.active === 'about'"
        @visible="changeActive"
      />
      <Contact
        ref="contact"
        :active="header.active === 'contact'"
        @visible="changeActive"
      />
    </div>
    <Footer @scroll="scroll($event)" />
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
    return {
      header: {
        active: "home",
        intersectionRatios: {
          home: 1,
          about: 0,
          contact: 0
        }
      }
    };
  },
  methods: {
    changeActive({ from, visible, intersectionRatio }) {
      this.header.intersectionRatios[from] = visible ? intersectionRatio : 0;
      const key = Object.keys(this.header.intersectionRatios).reduce(
        (prev, current) => {
          return this.header.intersectionRatios[prev] >
            this.header.intersectionRatios[current]
            ? prev
            : current;
        }
      );
      this.header.active = key;
    },
    scroll(where) {
      this.$refs[where].$el.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
