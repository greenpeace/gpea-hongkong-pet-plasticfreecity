<template>
  <div id="app">
    <fade-transition :duration="300">
      <v-app>
        <v-content>
          <v-container fluid ma-0 pa-0>
            <AppHeader />
            <!-- -->
            <router-view></router-view>
            <!-- -->
            <AppFooter />
          </v-container>
        </v-content>
      </v-app>
    </fade-transition>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
<style lang="scss"></style>
