<script>

import axios from "axios";
import ProjectList from "../components/ProjectList.vue";

export default {
  data() {
    return {
      projs: [],
    };
  },

  components: { ProjectList },

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
}
</script>

<template>
  <ProjectList :projs="projs" />
</template>

<style lang="scss" scoped></style>
