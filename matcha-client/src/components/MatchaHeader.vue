<template>
  <header class="navbar px-2 py-1">
    <section class="navbar-section">
      <a href="..." class="navbar-brand">matcha</a>
    </section>
    <section class="navbar-section">
      <router-link to="/login">Login</router-link>
    </section>
  </header>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand {
  font-family: 'GrundschriftRegular';
  font-weight: normal;
  font-style: normal;
  font-size: 26px;
}
</style>
