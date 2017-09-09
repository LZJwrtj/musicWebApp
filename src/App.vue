<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-play></v-play>
  </div>
</template>

<script>
  import Header from 'components/header/header.vue'
  import Tab from 'components/tab/tab.vue'
  import Play from 'components/player/player.vue'
  export default {
    components: {
      'v-header': Header,
      'v-tab': Tab,
      'v-play': Play
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }
</style>
