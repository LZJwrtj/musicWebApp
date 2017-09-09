<template>
  <div id="rank">
    <scroll class="rank_wrapper" :data="ranks">
      <ul class="rank_content">
        <li class="rank_list" v-for="item in ranks" :key="item.id" @click="selectItem(item)">
          <div class="img_wrapper">
            <img :src="item.picUrl" alt="">
            <span class="count">
            <i class="icon-earphone"></i>
            {{(item.listenCount / 10000).toFixed(1)}}万
          </span>
          </div>
          <div class="rank_list_content">
            <h2 class="rank_list_title">{{item.topTitle}}</h2>
            <p class="rank_list_song" v-for="(song, index) in item.songList" :key="song.id">
              {{index}} {{song.songname}}-{{song.singername}}
            </p>
            <span class="arrow">></span>
          </div>
        </li>
      </ul>
      <loading></loading>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRank} from 'api/rank'
  import Scroll from 'components/scroll/scroll'
  import {mapMutations} from 'vuex'
  import Loading from 'components/loading/loading'

  export default {
    data() {
      return {
        ranks: []
      }
    },
    created() {
      this._getRank()
    },
    methods: {
      _getRank() {
        getRank().then((res) => {
          this.ranks = res.data.topList
        })
      },
      selectItem(item) {
        this.$router.push({
          path: `/rank/${item.id}`
        })
        this.set_rank(item)
      },
      ...mapMutations({
        set_rank: 'SET_RANK'
      })
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #rank {
    width: 100%;
    .rank_wrapper {
      position: fixed;
      top: 1.2rem;
      bottom: 0;
      width: 100%;
      overflow: hidden;
    }
    .rank_content {
      width: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      .rank_list {
        /*display: flex;*/
        width: 100%;
        height: 2rem;
        margin-bottom: 0.2rem;
        background-color: #ffffff;
        .img_wrapper {
          float: left;
          position: relative;
          width: 2rem;
          height: 2rem;
          img {
            width: 100%;
            height: 100%;
          }
          .count {
            position: absolute;
            bottom: 0.15rem;
            left: 0.1rem;
            font-size: 0.26rem;
            color: #ffffff;
            opacity: 0.6;
            font-weight: bold;
            i {
              font-size: 0.3rem;
            }
          }
        }
        .rank_list_content {
          position: relative;
          float: right;
          width: 5rem;
          font-size: 0.3rem;
          padding-left: 0.3rem;
          padding-right: 0.5rem;
          box-sizing: border-box;
          .rank_list_title{
            width: 100%;
            height: 0.52rem;
            line-height: 0.52rem;
            text-align: left;
            font-size: 0.32rem;
            color: #000;
          }
          .rank_list_song {
            width: 100%;
            height: 0.43rem;
            line-height: 0.43rem;
            font-size: 0.28rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .arrow{
            position: absolute;
            top: 50%;
            right: 0.17rem;
          }
        }
      }
    }

  }
</style>
