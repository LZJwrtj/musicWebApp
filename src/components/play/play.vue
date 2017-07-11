<template>
  <transition name="moveUp">
    <div id="play">
      <v-music></v-music>
      <div class="header">
        <div class="down" @click="hidePlay"><i class="fa fa-arrow-down"></i></div>
        <p class="header_title">{{songInfo.name}}-{{songInfo.author}}</p>
      </div>
      <div class="avatar_wrapper">
        <img :src="songImg" alt="">
      </div>
      <ul class="lyrics">
        <li>努力开发中...</li>
      </ul>
      <mt-range v-model="val" class="process">
        <div slot="start" class="start">0%</div>
        <div slot="end" class="end">100%</div>
      </mt-range>
      <div class="play_bar">
        <div class="play_bar_l">
          <span class="fa fa-backward" @click="prevSong"></span>
          <span :class="btnClass" @click="play"></span>
          <span class="fa fa-forward" @click="nextSong"></span>
        </div>
        <div class="play_bar_r">
          <span class="fa fa-bars" @click="showMusicList"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapGetters} from 'vuex'
  import musicList from '../musicList/musicList.vue'
  export default {
    data () {
      return {
        val: 50
      }
    },
    computed: {
      ...mapGetters([
        'btnClass',
        'songInfo',
        'songImg',
        'isMusicList'
      ])
    },
    methods: {
      ...mapActions([
        'hidePlay',
        'prevSong',
        'play',
        'nextSong',
        'showMusicList',
        'close'
      ])
    },
    components: {
      'v-music': musicList
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #play {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: #ccc;
    z-index: 20;
    &.moveUp-enter-active, &.moveUp-leave-active {
      transition: all 0.2s linear;
    }
    &.moveUp-enter, &.moveUp-leave-active {
      transform: translate3D(0, 100%, 0);
    }
    .down {
      position: absolute;
      top: 0;
      left: 0;
      i {
        display: block;
        padding: 0.15rem;
        font-size: 0.5rem;
        color: #fff;
      }
    }
    .header {
      position: absolute;
      width: 100%;
      height: 1rem;
      .header_title {
        position: absolute;
        top: 0;
        left: 10%;
        width: 70%;
        line-height: 1rem;
        text-align: center;
        font-size: 0.35rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .avatar_wrapper {
      width: 4rem;
      height: 4rem;
      margin: 1rem auto 0.5rem;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      background: #ff4466;
      animation: rotate 20s linear infinite;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .lyrics {
      width: 6rem;
      height: 1rem;
      margin: 0 auto 1rem;
      background: #98f9c9;
      li {
        width: 100%;
        text-align: center;
        font-size: 0.4rem;
      }
    }
    .process {
      position: absolute;
      left: 9%;
      bottom: 1.5rem;
      width: 85%;
      margin: 0 auto;
      .start,.end{
        font-size: 0.25rem;
      }
      .start{
        margin-right: 0.2rem;
      }
      .end{
        margin-left: 0.2rem;
      }
      .mt-range-thumb{
        width: 10px;
        height: 10px;
      }
    }
    .play_bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      .play_bar_l {
        width: 4.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        font-size: 0.6rem;
        span {
          line-height: 1.5rem;
        }
      }
      .play_bar_r {
        position: absolute;
        right: 0.3rem;
        top: 0;
        font-size: 0.6rem;
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0)
    }
    50% {
      transform: rotate(180deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
</style>
