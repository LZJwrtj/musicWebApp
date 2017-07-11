<template>
  <transition name="moveUp">
    <div id="musicList" v-show="isMusicList">
      <h3 class="title">播放列表</h3>
      <span class="close" @click="close"><i class="fa fa-close"></i></span>
      <ul class="musicList_cotent">
        <li>{{songInfo.name}}-{{songInfo.author}}</li>

      </ul>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { mapActions, mapGetters } from 'vuex'
  export default {
    methods: {
      ...mapActions(['close'])
    },
    computed: {
      ...mapGetters(['songInfo', 'isMusicList'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #musicList {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 3rem;
    background: rgb(35, 96, 198);
    z-index: 10;
    &.moveUp-enter-active, &.moveUp-leave-active {
      transition: all 0.2s linear;
    }
    &.moveUp-enter, &.moveUp-leave-active {
      transform: translate3D(0, 100%, 0);
    }
    .title {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      font-size: 0.35rem;
      /*background: #fff;*/
      color: #ffffff;
    }
    .close {
      position: absolute;
      top: 0;
      right: 0.1rem;
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      font-size: 0.45rem;
      color: #ffffff;
    }
    .musicList_cotent{
      width: 100%;
      padding-left: 0.2rem;
      li{
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.3rem;
        color: #ffffff;
        border-bottom: 1px solid #ccc;
      }
    }
  }
</style>
