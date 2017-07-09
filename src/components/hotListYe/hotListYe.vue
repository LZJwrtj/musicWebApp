<template>
  <transition name="moveLeft">
    <div id="hotListYe">
      <div class="list_content">
        <div class="img_wrapper">
          <img :src="cdLists.logo" alt="">
          <div class="list_info">
            <div class="des_title">{{cdLists.dissname}}</div>
            <div class="count_author">
              <span class="listen_count">{{(cdLists.visitnum / 10000).toFixed(1)}}万人播放</span>
              <span class="author">来自:{{cdLists.nickname}}</span>
            </div>
          </div>
          <span class="icon_play fa fa-play"></span>
          <div class="gradient"></div>
        </div>
        <ul class="songList">
          <li v-for="(item, index) in cdLists.songlist" @click="$store.dispatch('addMusic', 1)">
            <!--<router-link :to="{name: 'play', params: {val: item}}">-->
            <h3 class="song_name">{{item.name}}(Live)</h3>
            <p class="song_des">{{item.singer[0].name}}·{{item.album.title}}</p>
            <!--</router-link>-->
          </li>
        </ul>
      </div>
      <v-back class="back"></v-back>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import back from '../back/toLeft.vue'
  import $ from 'jquery'
  export default {
    data () {
      return {
        showList: false,
        cdLists: {},
        index: []
      }
    },
    mounted () {
      var id = this.$route.params.valId
      var that = this
      $.ajax({
        url: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&type=1&json=1&utf8=1&onlysong=0&nosign=1&disstid=' + id,
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'jsonpCallback',
        jsonpCallback: 'taogeDataCallback',
        success: function (res) {
          console.log(res)
          that.cdLists = res.cdlist[0]
        },
        error: function (err) {
          console.log(err)
        }
      })
    },
    components: {
      'v-back': back
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #hotListYe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: #000;
    z-index: 10;
    &.moveLeft-enter-active, &.moveLeft-leave-active {
      transition: all 0.2s linear;
    }
    &.moveLeft-enter, &.moveLeft-leave-active {
      transform: translate3d(100%, 0, 0);
    }
    .img_wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
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
        background-image: -webkit-linear-gradient(top, transparent, currentColor 80%);
        &:after {
          content: "";
          display: block;
          padding-top: 60%;
        }
      }
    }
    .songList {
      width: 100%;
      padding-left: 0.3rem;
      margin-bottom: 1.7rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      li {
        height: 1.16rem;
        padding-top: 0.06rem;
        font-size: 0.28rem;
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        .song_name {
          width: 100%;
          height: 0.6rem;
          line-height: 0.6rem;
          font-size: 0.36rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .song_des {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
</style>
