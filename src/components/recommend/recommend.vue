<template>
  <div id="recommend">
    <v-slider :slides="slides"></v-slider>
    <ul class="subNav">
      <li><i class="fa fa-user"></i><span>歌手</span></li>
      <li><i class="fa fa-th-large"></i><span>分类</span></li>
      <li><i class="fa fa-play-circle"></i><span>专辑</span></li>
    </ul>
    <h2 class="hotList">热门歌单</h2>
    <v-hotList :hotLists="hotLists"></v-hotList>
    <!--<v-hotListYe></v-hotListYe>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from '../slider/slider.vue'
  import hotList from '../hotList/hotList.vue'
//  import hotListYe from '../hotListYe/hotListYe.vue'
  import $ from 'jquery'
  export default {
    data () {
      return {
        slides: [],
        hotLists: []
      }
    },
    created () {
      var that = this
      $.ajax({
        url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'jsonpCallback',
        jsonpCallback: 'callback',
        success: function (res) {
          console.log(res)
          that.slides = res.data.slider
          that.hotLists = res.data.songList
        }
      })
    },
    components: {
      'v-slider': slider,
      'v-hotList': hotList
//      'v-hotListYe': hotListYe
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #recommend {
    background-color: #ddd;
  }

  .subNav {
    width: 5.8rem;
    height: 1rem;
    margin: 0.4rem auto 0;
    li {
      float: left;
      width: 1.8rem;
      height: 1rem;
      line-height: 1rem;
      margin-right: 0.2rem;
      text-align: center;
      font-size: 0.35rem;
      color: #fff;
      background-color: #648391;
      i {
        position: relative;
        top: 0.1rem;
        margin-right: 0.1rem;
        font-size: 0.6rem;
        color: #9c9fa4;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .hotList{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.1rem;
    font-size: 0.4rem;
    color: #000;
  }
</style>
