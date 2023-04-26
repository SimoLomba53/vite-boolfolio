<script>
import AppHeader from "./components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";


export default {
  data() {
    return {
      title: "BOOLFOLIO",
    };
  },
  components: { AppHeader,HomePage },

  
};
</script>

<template>
  <AppHeader />
  <h1 class="text-center p-2">{{ title }}</h1>
  <HomePage/>
</template>

<style lang="scss" scoped></style>
