<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      title: "BOOLFOLIO",
      projs: [],
    };
  },
  components: { AppHeader, ProjectList },

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
  <h1 class="text-center p-2">{{ title }}</h1>
  <ProjectList :projs="projs" />
</template>

<style lang="scss" scoped></style>
