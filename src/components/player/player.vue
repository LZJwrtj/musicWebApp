<template>
  <div id="player" v-show="playList.length>0">
    <transition name="slideDown">
      <div class="fullScreen" v-show="fullScreen">
        <div class="top">
          <div class="back" @click="back">
            <i class="icon-arrow_down"></i>
          </div>
          <div class="title">
            <div class="songName">{{currentSong.name}}</div>
            <div class="author">{{currentSong.singer}}</div>
          </div>
        </div>
        <div class="middle">
          <div class="img_wrapper" :class="rotate">
            <img :src="currentSong.image" alt="">
          </div>
            <scroll ref="lyricList" class="lyric_wrapper" :data="currentLyric && currentLyric.lines">
              <div>
                <p ref="lyricLine" :class="{'current':currentLineNum === index}" class="txt" v-for="(item,index) in lyrics">{{item.txt}}</p>
              </div>
            </scroll>
          <div class="process_wrapper">
            <mt-range v-model="value"
                      :min="0"
                      :max="100"
                      :step="1"
                      :bar-height="2"
                      @change="updateCurrentTime">
              <div slot="start">{{format(currentTime)}}</div>
              <div slot="end">{{format(currentSong.duration)}}</div>
            </mt-range>
          </div>
        </div>
        <div class="bottom">
          <div class="icon_mode">
            <i :class="iconMode" @click="changeMode"></i>
          </div>
          <div class="icon_prev">
            <i @click="prevSong" class="icon-backward"></i>
          </div>
          <div class="icon_play">
            <i @click="togglePlay" :class="playIcon"></i>
          </div>
          <div class="icon_next">
            <i @click="nextSong" class="icon-forward"></i>
          </div>
          <div class="icon_like">
            <i class="icon-heart"></i>
          </div>
        </div>
      </div>
    </transition>
    <div class="miniPlay" v-show="!fullScreen" @click="open">
      <div class="mini_imgWrapper" :class="rotate">
        <img :src="currentSong.image" alt="">
      </div>
      <div class="songDetail">
        <div class="mini_songName">{{currentSong.name}}</div>
        <div class="mini_singer">{{currentSong.singer}}</div>
      </div>
      <div class="control">
        <span @click.stop="togglePlay" class="mini_play" :class="mini_playIcon"></span>
        <span @click.stop="nextSong" class="mini_next icon-forward"></span>
        <span class="mini_bar icon-bar"></span>
      </div>
    </div>
    <audio ref="audio" :src="currentSong.url" @play="ready" @error="error" @timeupdate="updateTime" @ended="end"></audio>
  </div>


</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'
  import {playMode} from 'assets/js/config'
  import {shuffle} from 'assets/js/until'
  import Lyric from 'lyric-parser'
  import Scroll from 'components/scroll/scroll.vue'

  export default {
    data() {
      return {
        songReady: false,
        value: 0,
        currentTime: 0,
        currentLyric: null,
        lyrics: [],
        currentLineNum: 0
      }
    },
    computed: {
      rotate() {
        return this.playState ? 'play' : 'play pause'
      },
      playIcon() {
        return this.playState ? 'icon-pause' : 'icon-play'
      },
      mini_playIcon() {
        return this.playState ? 'icon-pause' : 'icon-play'
      },
      iconMode() {
        return this.mode === playMode.sequence ? 'icon-arrow-repeat' : this.mode === playMode.loop ? 'icon-repeat' : 'icon-random'
      },
      ...mapGetters([
        'playList',
        'fullScreen',
        'playState',
        'currentIndex',
        'mode',
        'sequenceList',
        'currentSong'
      ])
    },
    methods: {
      back() {
        this.setFullScreen(false)
      },
      open() {
        this.setFullScreen(true)
      },
      togglePlay() {
        if (!this.songReady) {
          return
        }
        if (this.currentLyric) {
          this.currentLyric.togglePlay()
        }
        this.setPlayState(!this.playState)
        if (this.currentLyric) {
          this.currentLyric.stop()
        }
      },
      end() {
        if (this.mode === playMode.loop) {
          this.loop()
        } else {
          this.nextSong()
        }
      },
      loop() {
        this.$refs.audio.currentTime = 0
        this.$refs.audio.play()
        if (this.currentLyric) {
          this.currentLyric.seek(0)
        }
      },
      prevSong() {
        if (!this.songReady) {
          return
        }
        if (this.playList.length === 1) {
          this.loop()
          return
        }
        let index = this.currentIndex - 1
        if (index === -1) {
          index = this.playList.length - 1
        }
        this.setCurrentIndex(index)
        if (!this.playState) {
          this.togglePlay()
        }
        this.songReady = false
      },
      nextSong() {
        if (!this.songReady) {
          return
        }
        if (this.playList.length === 1) {
          this.loop()
          return
        }
        let index = this.currentIndex + 1
        if (index === this.playList.length) {
          index = 0
        }
        this.setCurrentIndex(index)
        if (!this.playState) {
          this.togglePlay()
        }
        this.songReady = false
      },
      ready() {
        this.songReady = true
      },
      error() {
        this.songReady = true
      },
      updateTime(e) {
        this.currentTime = e.target.currentTime
        this.value = this.currentTime / this.currentSong.duration * 100
      },
      updateCurrentTime() {
        this.currentTime = this.value * this.currentSong.duration / 100
        this.$refs.audio.currentTime = this.currentTime
        if (!this.playState) {
          this.togglePlay()
        }
        if (this.currentLyric) {
          this.currentLyric.seek(this.currentTime * 1000)
        }
      },
      changeMode() {
        let mode = (this.mode + 1) % 3
        this.setMode(mode)
        let list = null
        if (mode === playMode.random) {
          list = shuffle(this.sequenceList)
        } else {
          list = this.sequenceList
        }
        this.resetCurrentIndex(list)
        this.setPlayList(list)
      },
      resetCurrentIndex(list) {
        let index = list.findIndex((item) => {
          return item.id === this.currentSong.id
        })
        this.setCurrentIndex(index)
      },
      getLyric() {
        this.currentSong.getLyric().then((lyric) => {
          this.currentLyric = new Lyric(lyric, this.handleLyric)
          this.lyrics = this.currentLyric.lines
          if (this.playState) {
            this.currentLyric.play()
          }
        }).catch(() => {
          this.currentLyric = null
          this.currentLineNum = 0
        })
      },
      handleLyric({lineNum, txt}) {
        this.currentLineNum = lineNum
        if (lineNum > 4) {
          let lineEl = this.$refs.lyricLine[lineNum - 4]
          this.$refs.lyricList.scrollToElement(lineEl, 1000)
        } else {
          this.$refs.lyricList.scrollTo(0, 0, 1000)
        }
//        console.log(txt)
      },
      format(interval) {
        interval = Math.floor(interval)
        const m = Math.floor(interval / 60)
        const s = this._pad(interval % 60)
        return `${m}:${s}`
      },
      _pad(num, n = 2) {
        let len = num.toString().length
        while (len < n) {
          num = '0' + num
          len++
        }
        return num
      },
      ...mapMutations({
        setFullScreen: 'SET_FULLSCREEN',
        setPlayState: 'SET_PLAYSTATE',
        setCurrentIndex: 'SET_CURRENT_INDEX',
        setMode: 'SET_MODE',
        setPlayList: 'SET_PLAYLIST'
      })
    },
    watch: {
      currentSong(newSong, oldSong) {
        if (!newSong.id) {
          return
        }
        if (newSong.id === oldSong.id) {
          return
        }
        if (this.currentLyric) {
          this.currentLyric.stop()
        }
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs.audio.play()
          this.getLyric()
        }, 1000)
      },
      playState(newPlayState) {
        const audio = this.$refs.audio
        this.$nextTick(() => {
          newPlayState ? audio.play() : audio.pause()
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .slideDown-enter-active, .slideDown-leave-active {
    transition: all 0.2s linear;
  }

  .slideDown-enter, .slideDown-leave-to {
    transform: translate3d(0, 100%, 0);
  }

  #player {
    .fullScreen {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      .top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        padding-top: 0.2rem;
        .back {
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
          font-size: 0.8rem;
        }
        .title {
          width: 100%;
          height: 1rem;
          padding: 0 1rem;
          box-sizing: border-box;
          .songName {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            font-size: 0.3rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .author {
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.25rem;
          }
        }
      }
      .middle {
        position: fixed;
        top: 1.2rem;
        bottom: 1.5rem;
        width: 100%;
        .img_wrapper {
          position: fixed;
          top: 1.8rem;
          left: 23%;
          width: 4rem;
          height: 4rem;
          border: 5px solid #666;
          box-shadow: 0 0 20px #000;
          border-radius: 50%;
          overflow: hidden;
          &.play {
            animation: rotate 20s linear infinite;
            -webkit-animation: rotate 20s steps(15) linear infinite;
          }
          &.pause {
            animation-play-state: paused;
            -webkit-animation-play-state: paused;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .lyric_wrapper {
          position: fixed;
          top: 6.5rem;
          left: 0;
          bottom: 2.5rem;
          width: 100%;
          padding: 0 0.2rem;
          box-sizing: border-box;
          overflow: hidden;
          .txt {
            width: 100%;
            height: 0.45rem;
            line-height: 0.45rem;
            text-align: center;
            font-size: 0.3rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &.current {
              color: #f46
            }
          }
        }
        .process_wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          font-size: 0.3rem;
          padding: 0 0.3rem;
          box-sizing: border-box;
          .mt-range-thumb {
            top: 7px;
            width: 15px;
            height: 15px;
          }
          .mt-range-content {
            margin-left: 10px;
          }
          .mt-range-runway {
            right: -15px;
          }
        }
      }
      .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.2rem;
        display: flex;
        div {
          flex: 1;
          height: 1.2rem;
          line-height: 1.2rem;
          text-align: center;
          font-size: 0.7rem;
        }
      }
    }
    .miniPlay {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.2rem;
      display: flex;
      background-color: #eeeeee;
      .mini_imgWrapper {
        width: 1rem;
        height: 1rem;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
        border-radius: 50%;
        overflow: hidden;
        &.play {
          animation: rotate 20s linear infinite;
          -webkit-animation: rotate 20s linear infinite;
        }
        &.pause {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .songDetail {
        float: left;
        margin-left: 0.3rem;
        padding-top: 0.1rem;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        div {
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.3rem;
        }
        .mini_songName {
        }
      }
      .control {
        width: 2.5rem;
        height: 1.2rem;
        span {
          font-size: 0.6rem;
        }
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg)
    }
    100% {
      -webkit-transform: rotate(360deg)
    }
  }
</style>
