<template>
  <div id="hotList">
    <ul class="clear">
      <li v-for="item in hotLists" @click.stop.prevent="play(item, $event)">
        <!--<router-link to="{name:'hotListYe',params{}"></router-link>-->
        <div class="img-wrapper">
          <img :src="item.picUrl" alt="">
          <span class="listen_count"><i class="fa fa-header"></i>{{(item.accessnum / 10000).toFixed(1)}}万</span>
          <span class="icon_play"></span>
        </div>
        <div class="des">
          <p class="des_title">{{item.songListDesc}}</p>
          <p class="author">{{item.songListAuthor}}</p>
        </div>
      </li>
    </ul>
    <v-hotListYe :selectedList="selectList" ref="hotListYe"></v-hotListYe>
  </div>
</template>

<script type="text/ecmascript-6">
  import hotListYe from '../hotListYe/hotListYe.vue'
  import $ from 'jquery'
  export default {
    props: ['hotLists'],
    data () {
      return {
        selectList: {}
      }
    },
    computed: {

    },
    methods: {
      play: function (item, event) {
        if (!event.constructor) {
          return
        }
//        this.selectList = item
        var that = this
        $.ajax({
          url: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&type=1&json=1&utf8=1&onlysong=0&nosign=1&disstid=' + item.id,
          type: 'GET',
          dataType: 'jsonp',
          jsonp: 'jsonpCallback',
          jsonpCallback: 'taogeDataCallback',
          success: function (res) {
            that.selectList = res.cdlist[0]
            console.log(that.selectList)
          },
          error: function (err) {
            console.log(err)
          }
        })
        this.$refs.hotListYe.show()
//        console.log(this.selectList)
      }
    },
    components: {
      'v-hotListYe': hotListYe
    }

  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #hotList{
    width: 100%;
    ul{
      width: 7.26rem;
      margin-left: 0.2rem;
      li{
        float: left;
        width: 3.47rem;
        height: 4.47rem;
        margin-right: 0.16rem;
        margin-bottom: 0.18rem;
        font-size: 0.28rem;
        .img-wrapper{
          position: relative;
          width: 100%;
          height: 3.47rem;
          font-size: 0.22rem;
          .listen_count{
            position: absolute;
            left: 0.1rem;
            bottom : 0.17rem;
            color: #ffffff;
          }
          .icon_play{
            position: absolute;
            right: 0.1rem;
            bottom: 0.1rem;
            display: block;
            width: 0.48rem;
            height: 0.48rem;
            background: url("./list_sprite.png");
            background-repeat:  no-repeat;
            background-position: 0 0;
            background-size: 0.48rem 1.2rem;
            z-index: 10;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
        .des{
          width: 100%;
          height: 1rem;
          padding: 0 0.28rem 0 0.15rem;
          box-sizing: border-box;
          background: #ffffff;
          .des_title{
            height: 0.58rem;
            line-height: 0.58rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .author{
            font-size: 0.24rem;
          }
        }
      }
    }
  }
</style>
