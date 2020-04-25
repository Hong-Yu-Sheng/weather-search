<template>
  <v-app>
    <Navbar />
    <v-content>
     
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

<style>
.fontbig-3 {
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  font-family: "Microsoft Yahei", "Roboto", sans-serif !important;
}

.fontbig-1 {
  font-size: 2.125rem !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: "Microsoft Yahei", "Roboto", sans-serif !important;
}
</style>
