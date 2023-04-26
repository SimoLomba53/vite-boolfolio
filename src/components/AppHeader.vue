<script>
export default {
  title: "Hello world",
};
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" href="#">Navbar</a>
    </div>
  <div>
    <div>
    <router-link :to="{ name:'home' }" class="nav-link" >
      HomePage
    </router-link>
    </div>
    <div>
    <router-link :to="{ name:'contacts' }" class="nav-link" >
      Contacts
    </router-link>
    </div>
    </div>
  </nav>
  
</template>

<style lang="scss" scoped></style>
