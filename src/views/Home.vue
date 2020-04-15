<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <WeatherData msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import WeatherData from "@/components/WeatherData.vue";

export default {
  name: "Home",
  components: {
    WeatherData
  }
};
</script>
