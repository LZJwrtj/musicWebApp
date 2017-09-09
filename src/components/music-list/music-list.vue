<template>
  <div id="music-list">
    <div class="back" @click="back">
      <span class="icon-arrow_left"></span>
    </div>
    <div class="img_wrapper" ref="img_wrapper">
      <img :src="image" alt="">
      <div class="list_info">
        <div class="des_title" v-html="title"></div>
        <div class="count_author">
          <span class="listen_count">{{des}}</span>
          <span class="author">{{author}}</span>
        </div>
      </div>
      <span class="icon_play icon-play" @click="playAll"></span>
      <div class="gradient"></div>
      <div class="loading-container" v-show="!songs.length">
        <loading></loading>
      </div>
    </div>
    <scroll :data="songs" class="list" ref="scroll">
      <div id="song-list-wrapper">
        <song-list @selectItem="selectItem" :songs="songs"></song-list>
      </div>
    </scroll>

  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'components/scroll/scroll.vue'
  import SongList from 'components/song-list/song-list.vue'
  import Loading from 'components/loading/loading.vue'
  import {mapActions} from 'vuex'

  export default {
    props: {
      image: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      songs: {
        type: Array,
        default: function () {
          return []
        }
      },
      des: {
        type: String,
        default: ''
      },
      author: {
        type: String,
        default: ''
      }
    },
    methods: {
      selectItem (item, index) {
        this.selectPlay({
          list: this.songs,
          index: index
        })
      },
      playAll() {
        this.allPlay({
          list: this.songs
        })
      },
      back () {
        this.$router.back()
      },
      ...mapActions([
        'selectPlay',
        'allPlay'
      ])
    },
    mounted () {
      console.log(this.currentIndex)
      this.$refs.scroll.$el.style.top = `${this.$refs.img_wrapper.clientHeight}px`
    },
    components: {
      Scroll,
      SongList,
      Loading
    }
  }

</script>

<style lang="less" rel="stylesheet/less" scoped>
  #music-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 10;
    .img_wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 70%;
      z-index: 10;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .list_info {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 0.3rem 0.5rem;
        color: #ffffff;
        z-index: 5;
        .des_title {
          width: 5.68rem;
          height: 0.72rem;
          line-height: 0.72rem;
          font-size: 0.48rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .count_author {
          font-size: 0.28rem;
          .listen_count {
            margin-right: 0.3rem;
          }
        }
      }
      .icon_play {
        position: absolute;
        right: 0.3rem;
        bottom: 0.5rem;
        width: 0.92rem;
        height: 0.92rem;
        padding-left: 0.32rem;
        padding-top: 0.25rem;
        border: 0.02rem solid #ffffff;
        border-radius: 50%;
        font-size: 0.35rem;
        color: #ffffff;
        box-sizing: border-box;
        z-index: 5;
      }
      .gradient {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        color: rgb(149, 178, 205);
        background-image: -webkit-linear-gradient(top, transparent, currentColor 80%);
        &:after {
          content: "";
          display: block;
          padding-top: 60%;
        }
      }
    }
    .list {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
    }
    .loading-container{
      position: absolute;
      top: 110%;
      width: 100%;
    }
    .back{
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      z-index: 20;
      color: #fff;
    }
  }
</style>
