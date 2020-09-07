<template>
  <header class="header headroom">
    <div class="py-1 header__container container">
      <div class="header__item header__item--social">
        <img
          src="@/assets/png/plasticfreecity-logo.png"
          alt=""
          @click="backHome()"
        />
      </div>
      <div class="header__item header__item--logo">
        <div class="site-logo">
          <a href="">
            <gplogo />
          </a>
        </div>
      </div>
      <div class="hidden header__item header__item--menu">
        <button class="header--hamburger" @click="openMenu">
          <i class="material-icons">menu</i>
        </button>
      </div>
      <div class="header__item header__item--form-btn" style="display: none;">
        <form-modal></form-modal>
      </div>
    </div>
  </header>
</template>

<script>
import gplogo from "@/assets/svg/gp-logo.svg";
import FormModal from "@/components/plasticfree/FormModal";

export default {
  components: {
    gplogo,
    FormModal
  },
  data() {
    return {
      gplogo: gplogo
    };
  },
  methods: {
    backHome() {
      this.$router.push("home");
    },
    openMenu() {
      this.$store.commit("toggleMenu");
    },
    openForm() {
      alert("form opened");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $wod-light-blue;
  z-index: 1;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @supports (display: grid) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    &--social {
      justify-content: flex-start;
      width: 100%;
      max-width: 150px;
      img {
        cursor: pointer;
        max-width: 60px;
      }
      .social__icons {
        fill: #fff;
        &:first-child {
          margin-right: 2rem;
        }
      }
    }
    &--logo {
      justify-content: center;
      .site-logo {
        width: 100%;
        max-width: 150px;
      }
    }
    &--menu {
      justify-content: flex-end;
      .material-icons {
        color: #fff;
        font-size: 4rem;
      }
      img {
        max-width: 60px;
      }
    }
    &--form-btn {
      justify-content: flex-end;
      color: #fff;
    }
  }
}
</style>
