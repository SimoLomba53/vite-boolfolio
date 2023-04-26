<script>
import AppHeader from "./components/AppHeader.vue";


export default {
  data() {
    return {
      title: "BOOLFOLIO",
    };
  },
  components: { AppHeader },

  
};
</script>

<template>
  <AppHeader />
  <h1 class="text-center p-2">{{ title }}</h1>
  <main class="container">
    <router-view></router-view>
  </main>
  
</template>

<style lang="scss" scoped></style>
