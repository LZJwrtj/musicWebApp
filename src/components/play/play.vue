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
        <li v-for="item in lyrics">{{item.txt}}</li>
      </ul>
      <mt-range v-model="val" class="process" @change="moveSetTime">
        <div slot="start" class="start">{{currentTime | date}}</div>
        <div slot="end" class="end">{{duration | date}}</div>
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
  import Vue from 'vue'
  import { mapActions, mapGetters } from 'vuex'
  import musicList from '../musicList/musicList.vue'
  import $ from 'jquery'
  //  import Base64 from '../../assets/js/base64'
  //  import parseLyc from '../../assets/js/lyc'
  import { Base64 } from 'js-base64'
  import Lyric from 'lyric-parser'

  Vue.filter('date', function (val) {
    var time = new Date()
    time.setTime(val * 1000)
    var sec = time.getSeconds() > 10 ? time.getSeconds() : '0' + time.getSeconds()
    return time.getMinutes() + ':' + sec
  })
  export default {
    data () {
      return {
        val: 0,
        lyrics: [],
        time: 0
      }
    },
    computed: {
      ...mapGetters([
        'btnClass',
        'songInfo',
        'songImg',
        'isMusicList',
        'nowSong',
        'currentTime',
        'duration'
      ])
    },
    mounted () {
      this.getLycs()
    },
    methods: {
      ...mapActions([
        'hidePlay',
        'prevSong',
        'play',
        'nextSong',
        'showMusicList',
        'setCurrentTime'
      ]),
      moveSetTime: function () {
        if (this.duration > 0) {
          setTimeout(() => {
            this.setCurrentTime(this.val * this.duration / 100);
          }, 0);

        }
      },
      getLycs: function () {
        if (this.nowSong.id !== -1) {
          var that = this
          $.ajax({
            url: 'https://api.darlin.me/music/lyric/' + this.nowSong.id + '/?',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            jsonpCallback: 'MusicJsonCallback',
            success: function (res) {
              let lyric = new Lyric(Base64.decode(res.lyric))
              that.lyrics = lyric.lines
            },
            error: function (res) {
              console.log(res)
            }
          })
        }
      }
    },
    watch: {
      nowSong () {
        this.getLycs()
      },
      currentTime () {
        this.time = parseInt(this.currentTime)
      },
      time () {
        this.val = (this.currentTime / this.duration).toFixed(4) * 100
      }
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
      height: 2.9rem;
      margin: 0 auto 1rem;
      overflow: hidden;
      li {
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.3rem;
        color: #000;
      }
    }
    .process {
      position: absolute;
      left: 9%;
      bottom: 1.5rem;
      width: 85%;
      margin: 0 auto;
      .start, .end {
        font-size: 0.25rem;
      }
      .start {
        margin-right: 0.2rem;
      }
      .end {
        margin-left: 0.2rem;
      }
      .mt-range-thumb {
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
