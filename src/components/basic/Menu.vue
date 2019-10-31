<template>
<transition name="fade">
    <div class="menu" v-if="open">
      <div class="menu--container" @click="closeMenu">
      <button class="menu--close" @click.once="closeMenu">
        <i class="material-icons">close</i>
      </button>
        <nav class="menu--nav">
        <router-link class="nav--item" to="/" @click="closeMenu">Header</router-link>
        <router-link class="nav--item" to="/pledge" @click="closeMenu">Go to Pledge</router-link>
        <router-link class="nav--item" to="/entity" @click="closeMenu">Entity</router-link>
        </nav>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeMenu() {
      this.$store.commit("closeMenu");
    }
  },
  computed: {
    open() {
      return this.$store.state.menuActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.95);
  &--container {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  &--close {
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    z-index: 100;
  }
  &--nav {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
}
.nav--item {
  font-size: 30px;
}
.nav--item + .nav--item {
  margin-top: 30px;
}
</style>


