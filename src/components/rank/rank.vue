<template>
  <div id="rank">
    <ul class="rank_content">
      <li class="rank_list" v-for="item in topList">
        <div class="img_wrapper">
          <img :src="item.picUrl" alt="">
        </div>
        <router-link :to="{name: 'rankList', params: {valId: item.id}}">
          <div class="songList">
            <h3 class="songList_title">{{item.topTitle}}</h3>
            <p class="songList_name" v-for="(val, index) in item.songList">{{index + 1}} <span class="songName">{{val.songname}}</span> - {{val.singername}}</p>
          </div>
          <div class="arrow">
            <i class="fa fa-angle-right"></i>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="loading_container" v-show="!topList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getRank } from 'api/rank'
  import loading from '../loading/loading.vue'
  export default {
    data () {
      return {
        topList: []
      }
    },
    created () {
      this._getRankList()
    },
    methods: {
      _getRankList () {
        getRank().then((res) => {
          console.log(res.data)
          this.topList = res.data.topList
        })
      }
    },
    components: {
      loading
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #rank {
    font-size: 0.28rem;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    .rank_content {
      width: 100%;
      margin-bottom: 1.3rem;
      .rank_list {
        width: 100%;
        height: 2rem;
        margin-bottom: 0.2rem;
        background: #ffffff;
        .img_wrapper {
          width: 2rem;
          height: 2rem;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .songList {
          width: 4.52rem;
          height: 100%;
          margin-left: 0.3rem;
          float: left;
          .songList_title, .songList_name {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .songList_title {
            width: 100%;
            height: 0.61rem;
            line-height: 0.61rem;
            margin-bottom: 0.04rem;
            font-size: 0.32rem;
          }
          .songList_name {
            width: 100%;
            line-height: 0.42rem;
            color: rgba(0, 0, 0, .5);
            .songName {
              color: #000;
            }
          }
        }
        .arrow {
          width: 0.28rem;
          height: 2rem;
          line-height: 2rem;
          float: right;
        }
      }
    }
    .loading_container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
