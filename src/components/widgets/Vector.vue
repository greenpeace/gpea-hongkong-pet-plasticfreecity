<template>
  <div class="svg__wrapper" v-once v-html="path">
  </div>
</template>

<script>
export default {
  props: ["path"]
};
</script>

<style lang="scss">
</style>
