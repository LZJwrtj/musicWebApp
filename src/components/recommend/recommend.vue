<template>
  <div id="recommend">
    <scroll class="recommend_content" :data="recommends">
      <div>
        <slide :slides="slides"></slide>
        <div class="content">
          <h2 class="title">热门推荐</h2>
          <ul class="clear">
            <li v-for="item in recommends" @click="selectItem(item)">
              <div class="img-wrapper">
                <img v-lazy="item.picUrl" alt="">
                <span class="listen_count"><i class="icon-earphone"></i>{{(item.accessnum / 10000).toFixed(1)}}万</span>
                <span class="icon_play"></span>
              </div>
              <div class="des">
                <p class="des_title">{{item.songListDesc}}</p>
                <p class="author">{{item.songListAuthor}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading_container" v-show="!recommends.length">
          <loading></loading>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'components/scroll/scroll.vue'
  import Slide from 'components/slide/slide.vue'
  import {getRecommend} from 'api/recommend'
  import {mapMutations} from 'vuex'
  import Loading from 'components/loading/loading.vue'

  export default {
    data() {
      return {
        slides: [],
        recommends: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend(function (err, res) {
          if (!err) {
            this.slides = res.data.slider
            this.recommends = res.data.songList
          }
        }.bind(this))
      },
      selectItem(item) {
        this.$router.push({
          path: `/recommend/${item.id}`
        })
        this.setRecommend(item)
      },
      ...mapMutations({
        setRecommend: 'SET_RECOMMEND'
      })
    },
    components: {
      Slide,
      Scroll,
      Loading
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #recommend {
    position: fixed;
    width: 100%;
    top: 1.2rem;
    bottom: 0;
    .recommend_content {
      height: 100%;
      overflow: hidden;
    }
  }

  .content {
    width: 100%;
    .title {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      margin-top: 0.1rem;
      font-size: 0.4rem;
      color: #000;
    }
    ul {
      width: 7.26rem;
      margin: 0 auto;
      li {
        float: left;
        width: 3.47rem;
        height: 4.47rem;
        margin: 0 0.08rem 0.18rem;
        font-size: 0.28rem;
        .img-wrapper {
          position: relative;
          width: 100%;
          height: 3.47rem;
          font-size: 0.22rem;
          .listen_count {
            position: absolute;
            left: 0.1rem;
            bottom: 0.17rem;
            color: #ffffff;
          }
          .icon_play {
            position: absolute;
            right: 0.1rem;
            bottom: 0.1rem;
            display: block;
            width: 0.48rem;
            height: 0.48rem;
            background: url("./list_sprite.png");
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: 0.48rem 1.2rem;
            z-index: 5;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .des {
          width: 100%;
          height: 1rem;
          padding: 0 0.28rem 0 0.15rem;
          box-sizing: border-box;
          background: #ffffff;
          .des_title {
            height: 0.58rem;
            line-height: 0.58rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .author {
            font-size: 0.24rem;
          }
        }
      }
    }
  }

  .loading_container {
    position: absolute;
    top: 120%;
    width: 100%;
    z-index: 10;
  }
</style>
