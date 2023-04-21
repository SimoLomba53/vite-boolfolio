<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Hello world",
      projs: [],
    };
  },
  components: { AppHeader },

  methods: {
    fetchProjs() {
      axios.get("http://127.0.0.1:8000/api/projs").then((response) => {
        this.projs = response.data;
      });
    },
  },

  created() {
    this.fetchProjs();
  },
};
</script>

<template>
  <AppHeader />
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="proj in projs">
      <p>{{ proj.id }}</p>
      <p>{{ proj.title }}</p>
      <p>{{ proj.description }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
