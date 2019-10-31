<template>
  <div>
    <hero />
    <restaurant-list />
    <plastic-map />
    <entity-list />
  </div>
</template>

<script>
import Hero from "@/components/plasticfree/Hero.vue";
import RestaurantList from "@/components/plasticfree/RestaurantList.vue";
import PlasticMap from "@/components/plasticfree/Map.vue";
import EntityList from "@/components/plasticfree/EntityList.vue";

export default {
  name: "restaurant",
  components: {
    Hero,
    RestaurantList,
    PlasticMap,
    EntityList
  }
};
</script>
