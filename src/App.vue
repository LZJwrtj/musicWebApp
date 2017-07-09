<template>
  <div id="app">
    <!--头部-->
    <v-header v-show="isShowHeader"></v-header>
    <!--导航-->
    <v-nav v-show="isShowNav"></v-nav>
    <!--路由展示区-->
    <div v-show="isShowRouter">
      <router-view></router-view>
    </div>
    <v-play v-show="isShowPlay"></v-play>
    <v-playBar v-show="isShowPlayBar"></v-playBar>
    <audio src="" ref="audio" autoplay></audio>
    <div>{{location}}</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import header from './components/header/header.vue'
  import nav from './components/nav/nav.vue'
  import play from './components/play/play.vue'
  import playBar from './components/playBar/playBar.vue'

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'isShowHeader', // 是否显示头部
        'isShowNav',
        'isShowRouter',
        'isShowPlay',
        'isShowPlayBar',
        'location'
      ])
    },
    mounted () {
      this.$store.dispatch('sendAudio', this.$refs.audio)
    },
    components: {
      'v-header': header,
      'v-nav': nav,
      'v-play': play,
      'v-playBar': playBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {

  }

</style>
