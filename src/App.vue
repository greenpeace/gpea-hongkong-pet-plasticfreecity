<template>
  <div id="app">
    <fade-transition :duration="300">
      <v-app>
        <v-content>
          <v-container fluid ma-0 pa-0>
            <AppHeader/>
            <!-- -->
            <router-view></router-view>
            <!-- -->
            <AppFooter/>
          </v-container>
        </v-content>
      </v-app>
    </fade-transition>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import AppHeader from "@/components/basic/AppHeader";
import AppFooter from "@/components/basic/AppFooter";
export default {
  components: {
    FadeTransition,
    AppHeader,
    AppFooter
  }
};
</script>
