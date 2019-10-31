<template>
  <div class="home">
    <hero />
    <!-- Hero -->
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