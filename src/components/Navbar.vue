<template>
  <nav>
    <v-app-bar flat app color="grey lighten-1" height="65px">
      <v-toolbar-title>
        <img src="/logo2.png" width="200px" />
      </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-btn class="mx-5" :to="{ name: 'Home' }">回主頁面</v-btn>
      <v-btn :to="{ name: 'tmp' }">實際操作</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
