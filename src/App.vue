<template>
  <div id="app">
    <Header></Header>
    <div class="content">
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
                Viene de Input/Output, como el flujo de todo sistema
                informatico, representando las entradas y salidas
              </p>
              <h3>Samuel</h3>
              <p>
                Mi nombre, mucho gusto! Te invito a seguirme en mis redes
                sociales y asi estar atento a nuevas noticias
              </p>
            </div>
            <div class="home-card--bottom">
              <a href="#" rel="noopener noreferrer" class="social-icon twitter">
                <fa :icon="['fab', 'twitter']"></fa>
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="social-icon facebook"
              >
                <fa :icon="['fab', 'facebook']"></fa>
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                class="social-icon linkedin"
              >
                <fa :icon="['fab', 'linkedin']"></fa>
              </a>
              <a href="#" rel="noopener noreferrer" class="social-icon github">
                <fa :icon="['fab', 'github']"></fa>
              </a>
              <a href="#" rel="noopener noreferrer" class="social-icon twitch">
                <fa :icon="['fab', 'twitch']"></fa>
              </a>
              <a href="#" rel="noopener noreferrer" class="social-icon youtube">
                <fa :icon="['fab', 'youtube']"></fa>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.content {
  @apply p-8;
}

.home {
  @apply overflow-hidden;

  > h2 {
    @apply mb-8 text-center text-3xl;
    font-family: ND_LOGOS_REGULAR;
  }
  .home-card {
    @apply rounded-lg grid grid-flow-col relative;
    grid-template-columns: 0.5fr 1.5fr;
    background: #004f85;

    > img {
      @apply absolute z-20;
      width: 50px;
      height: 50px;
      left: calc(50% - 25px);
      transform: translateY(-50%);
    }

    &--left {
      @apply bg-white flex items-end justify-around rounded-l-lg;
      clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);

      img {
        @apply relative;
        bottom: 5rem;
        max-width: 75%;
      }
    }

    &--bottom {
      @apply absolute w-full left-0 bottom-0 h-10 bg-white flex items-center justify-evenly;

      &::after {
        content: "";
        @apply w-0 h-0 absolute top-0;
        border-top: 2.5rem solid #004f85;
        border-left: 1.75rem solid transparent;
        right: 0;
      }

      .social-icon {
        @apply text-2xl;

        &.twitter {
          color: #53a6e2;
        }
        &.facebook {
          color: #3d5fd8;
        }
        &.linkedin {
          color: #1e82cb;
        }
        &.github {
          color: #000000;
        }
        &.twitch {
          color: #89608f;
        }
        &.youtube {
          color: #e04343;
        }
      }
    }

    &--right {
      .right__content {
        @apply pl-2 pt-10 pr-4 pb-20 text-white;

        h3 {
          @apply text-2xl;
          font-family: ND_LOGOS_REGULAR;
        }

        p {
          @apply text-lg;

          &:nth-child(2) {
            @apply mb-4;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      grid-template-columns: 0.5fr 1fr;

      &--left {
        @apply items-center;
        img {
          @apply bottom-0 max-h-full;
        }
      }

      &--right {
        @apply relative;
      }

      &--bottom {
        width: 25rem;
        left: calc(50% - 12.5rem);

        &::before {
          content: "";
          @apply w-0 h-0 absolute top-0;
          border-top: 2.5rem solid #004f85;
          border-right: 1.75rem solid transparent;
          left: 0;
        }
      }
    }
  }
}
</style>
