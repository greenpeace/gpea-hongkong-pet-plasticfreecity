<template>
  <div class="home">
    <!-- Hero -->
    <hero />
    <!-- Landing -->
    <landing />
    <!-- List -->
    <restaurant-list />
    <!-- Map -->
    <plastic-map />
    <!-- storygrid -->
    <story-grid />
    <!-- Entity -->
    <entity-list />
    <!-- Partners -->
    <partners />
  </div>
</template>
<script>
// @ is an alias to /src
import Landing from "@/components/plasticfree/Landing.vue";
import Hero from "@/components/plasticfree/Hero.vue";
import PlasticMap from "@/components/plasticfree/Map.vue";
import EntityList from "@/components/plasticfree/EntityList.vue";
import RestaurantList from "@/components/plasticfree/RestaurantList.vue";
import StoryGrid from "@/components/plasticfree/StoryGrid.vue";
import Partners from "@/components/plasticfree/Partners.vue";
export default {
  name: "home",
  components: {
    Landing,
    Hero,
    PlasticMap,
    EntityList,
    RestaurantList,
    StoryGrid,
    Partners
  }
};
</script>

<style lang="scss">
.iframe-container {
  position: relative;
  overflow: hidden;
  overflow: hidden;
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
}
.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
