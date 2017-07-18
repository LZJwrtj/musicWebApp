<template>
  <transition name="moveUp">
    <div id="musicList" v-show="isMusicList">
      <h3 class="title">播放列表({{musicLists ? musicLists.length : 0}}首)</h3>
      <span class="close" @click="close"><i class="fa fa-close"></i></span>
      <ul class="musicList_cotent">
        <li v-for="(item, index) in musicLists">
          <p>{{index + 1}}.{{item.name ? item.name : item.songname}}<i class="fa fa-close"></i></p>
        </li>
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
      ...mapGetters(['songInfo', 'isMusicList', 'musicLists'])
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
      font-size: 0.5rem;
      color: #ffffff;
    }
    .musicList_cotent {
      width: 100%;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
      li {
        position: relative;
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        color: #ffffff;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        i {
          position: absolute;
          top: 0.2rem;
          right: 0.3rem;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          font-size: 0.45rem;
          color: #fff;
        }
      }
    }
  }
</style>
