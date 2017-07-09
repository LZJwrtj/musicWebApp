<template>
  <div id="playBar" >
    <ul class="clear">
      <li class="playBar_l">
        <img class="avatar" src="./defaultSongImg.jpg" @click="showPlay" alt="">
      </li>
      <li class="playBar_c">
        <p class="song_name">你啊多少</p>
        <p class="song_author">阿斯顿</p>
      </li>
      <li class="playBar_r">
        <span class="fa fa-play"></span>
        <span class="fa fa-forward"></span>
        <span class="fa fa-bars"></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  export default {
    methods: mapActions(['showPlay'])
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #playBar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    /*padding: 0 0.3rem;*/
    padding-left: 0.3rem;
    z-index: 10;
    background: #fff;
    .playBar_l{
      width: 1.13rem;
      height: 1.12rem;
      margin-top: 0.19rem;
      float: left;
      border: 0.04rem solid #cdcdcd;
      .avatar{
        width: 100%;
        height: 100%;
      }
    }
    .playBar_c{
      float: left;
      width: 2.5rem;
      margin-left: 0.32rem;
      margin-top: 0.34rem;
      font-size: 0.3rem;
      .song_name{
        width: 100%;
        height: 0.47rem;
        line-height: 0.47rem;
      }
      .song_author{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
      }
    }
    .playBar_r{
      float: right;
      height: 1.6rem;
      line-height: 1.6rem;
      span{
        margin-right: 0.4rem;
        font-size: 0.65rem;
      }
    }
  }
</style>
