<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  props: {
    projs: Array,
  },

  components: { ProjectCard },
};
</script>

<template>
  <div
    class=" d-flex flex-row flex-wrap gap-5 mt-5 align-items-center justify-content-center"
  >
    <ProjectCard v-for="proj in projs" :key="proj.id" :proj="proj" />
  </div>
</template>

<style lang="scss" scoped></style>
