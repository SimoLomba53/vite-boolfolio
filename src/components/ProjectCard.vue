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
      <router-link class="btn btn-primary btn-sm" :to="{name:'proj-detail',params:{'id': proj.id,},}" >Details</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
