<template>
  <transition name="moveLeft">
    <div id="play">
      <div class="down" @click="hidePlay"><i class="fa fa-arrow-down"></i></div>
      <div class="header">
        <p class="header_title">我是头部</p>
      </div>
      <div class="avatar_wrapper">
        1122
        <img src="" alt="">
      </div>
      <ul class="lyrics">
        <li>我是歌词</li>
      </ul>
      <mt-range v-model="val" class="process"></mt-range>
      <div class="play_bar">
        <div class="play_bar_l">
          <span class="fa fa-backward"></span>
          <span :class="btnClass" @click="play"></span>
          <span class="fa fa-forward"></span>
        </div>
        <div class="play_bar_r">
          <span class="fa fa-bars"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      return {
        val: 50
      }
    },
    computed: mapGetters(['btnClass']),
    methods: mapActions(['hidePlay', 'play'])
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
#play{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: #ccc;
  z-index: 20;
  &.moveLeft-enter-active,&.moveLeft-leave-active{
    transition: all 0.2s linear;
  }
  &.moveLeft-enter,&.moveLeft-leave-active{
    transform: translate3D(0, 100%, 0);
  }
  .down{
    position: absolute;
    top: 0;
    left: 0;
    i{
      display: block;
      padding: 0.15rem;
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .header{
    width: 100%;
    height: 1rem;
    .header_title{
      line-height: 1rem;
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .avatar_wrapper{
    width: 4.5rem;
    height: 4.5rem;
    margin: 1rem auto 0.5rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #ff4466;
    animation: rotate 3s linear infinite paused;
  }
  .lyrics{
    width: 6rem;
    height: 1rem;
    margin: 0 auto 1rem;
    background: #f60;
    li{
      width: 100%;
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .process{
    position: absolute;
    left: 15%;
    bottom: 1.5rem;
    width: 70%;
    margin: 0 auto;
  }
  .play_bar{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    .play_bar_l{
      width: 4.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 0.6rem;
      span{
        line-height: 1.5rem;
      }
    }
    .play_bar_r{
      position: absolute;
      right: 0.3rem;
      top: 0;
      font-size: 0.6rem;
    }
  }
}
  @keyframes rotate {
    0% {transform: rotate(0)}
    50%{transform: rotate(180deg)}
    100% {transform: rotate(360deg)}
  }
</style>
