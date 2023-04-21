<script>
export default {
  name: "ProjCard",

  props: {
    proj: Object,
  },
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <p>{{ proj.id }}</p>
      <h1>{{ proj.title }}</h1>
      <p class="card-text">{{ proj.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
