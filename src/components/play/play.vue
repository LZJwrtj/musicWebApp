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
      <scroll class="lyric-container" ref="lyricList" :data="lyrics && lyrics.lines">
        <div class="lyric-wrapper">
          <div v-if="lyrics">
            <p ref="lyricLine" :class="{'active': currentLineNum === index}" v-for="(item, index) in lyrics.lines">{{item.txt}}</p>
          </div>
        </div>
      </scroll>
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
  import { Base64 } from 'js-base64'
  import Lyric from 'lyric-parser'
  import Scroll from '../scroll/scroll.vue'

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
        time: 0,
        currentLineNum: 0
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
        'duration',
        'playing'
      ])
    },
    mounted () {
//      this.getLycs()
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
            this.setCurrentTime(this.val * this.duration / 100)
            this.lyrics.seek(this.val * this.duration / 100 * 1000)
          }, 0)
        }
      },
      getLycs: function () {
        if (this.nowSong.id !== -1) {
          var id = this.nowSong.songid ? this.nowSong.songid : this.nowSong.id
          this.$http.jsonp('https://api.darlin.me/music/lyric/' + id + '/?').then(function (res) {
            var lyc = Base64.decode(res.data.lyric)
            this.lyrics = new Lyric(lyc, this.handleLyric)
            this.$store.dispatch('sendLyc', this.lyrics)
            if (this.playing) {
              this.lyrics.play()
            }
          })
        }
      },
      handleLyric ({lineNum, txt}) {
        this.currentLineNum = lineNum
        if (lineNum > 4) {
          let lineEl = this.$refs.lyricLine[lineNum - 4]
          this.$refs.lyricList.scrollToElement(lineEl, 1000)
        } else {
          this.$refs.lyricList.scrollTo(0, 0, 1000)
        }
      }
    },
    watch: {
      nowSong (newSong, oldSong) {
        if (newSong.id === oldSong.id) {
          return
        }
        setTimeout(() => {
          this.getLycs()
        }, 1000)
        if (this.lyrics) {
          this.lyrics.stop()
        }
      },
      currentTime () {
        this.time = parseInt(this.currentTime)
      },
      time () {
        this.val = (this.currentTime / this.duration).toFixed(4) * 100
      }
    },
    components: {
      'v-music': musicList,
      Scroll
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
    .lyric-container {
      width: 100%;
      height: 30%;
      overflow: hidden;
      .lyric-wrapper {
        width: 6rem;
        /*height: 2.9rem;*/
        /*height: 2rem;*/
        /*height: 100%;*/
        margin: 0 auto 1rem;
        /*overflow: hidden;*/
        p {
          width: 100%;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.3rem;
          color: #000;
          &.active {
            color: #f46;
          }
        }
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
