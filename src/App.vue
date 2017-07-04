<template>
  <div id="app">

    <v-header></v-header>
    <v-nav></v-nav>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import nav from './components/nav/nav.vue'
  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-nav': nav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {

  }

</style>
