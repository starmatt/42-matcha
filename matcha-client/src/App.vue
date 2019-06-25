<template>
  <div id="app">
    <matcha-header></matcha-header>
    <router-view/>
  </div>
</template>

<script>
import MatchaHeader from '@/components/MatchaHeader'

export default {
  name: 'App',
  components: { MatchaHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
