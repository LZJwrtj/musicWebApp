<template>
  <transition name="moveLeft">
    <div id="hotListYe">
      <div class="list_content">
        <div class="img_wrapper">
          <!--<img :src="topData.topinfo.pic_album" alt="">-->
          <img :src="topInfo.pic_album" alt="">
          <div class="list_info">
            <!--<div class="des_title">{{topData.topinfo.ListName}}</div>-->
            <div class="des_title">{{topInfo.ListName}}</div>
            <div class="count_author">
              <span class="listen_count">{{topData.update_time}}更新</span>
            </div>
          </div>
          <span class="icon_play fa fa-play"></span>
          <div class="gradient"></div>
        </div>
        <ul class="songList">
          <li v-for="(item, index) in topData.songlist" @click="$store.dispatch('addMusic', item.data)">
            <!--<router-link :to="{name: 'play', params: {val: item}}">-->
            <h3 class="song_name">{{item.data.songname}}(Live)</h3>
            <p class="song_des">{{item.data.singer[0].name}}·{{item.data.albumname}}</p>
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
  import loading from '../loading/loading.vue'
//  import $ from 'jquery'
  import { getTopList } from 'api/rank'
  export default {
    data () {
      return {
        topData: {},
        topInfo: {}
      }
    },
    mounted () {
      this._getTopList(this.$route.params.valId)
//      var id = this.$route.params.valId
//      var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=' + id + '&_=1492910996732'
//      this.$http.jsonp(url, {
//        jsonp: 'jsonpCallback'
//      }).then((res) => {
//        console.log(res.data)
//        this.topData = res.data
//        this.topInfo = res.data.topinfo
//      })
    },
    methods: {
      _getTopList (topId) {
        getTopList(topId).then((res) => {
          console.log(res)
          this.topData = res
          this.topInfo = res.topinfo
        })
      }
    },
    components: {
      'v-back': back,
      loading
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
    .loading_container{
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
