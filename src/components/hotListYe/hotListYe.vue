<template>
  <transition name="moveLeft">
    <div id="hotListYe" v-show="showList">
      <div class="list_content">
        <div class="img_wrapper">
          <img :src="selectedList.logo" alt="">
          <div class="des_title">{{selectedList.dissname}}</div>
          <div class="count_author">
            <span class="listen_count">{{(selectedList.visitnum / 10000).toFixed(1)}} + '万'</span>
            <span class="author"></span>
          </div>
          <span class="icon_play"></span>
        </div>
        <ul>
          <li></li>
        </ul>
        <v-back @back="hide"></v-back>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import back from '../back/back.vue'
//  import $ from 'jquery'
  export default {
//    props: ['selectedList'],
    props: {
      selectedList: {
        type: Object
      }
    },
    data () {
      return {
        showList: false,
        cdLists: []
      }
    },
    methods: {
      show: function () {
        this.showList = true
        console.log(this.selectedList)
      },
      hide: function () {
        this.showList = false
      }
    },
    components: {
      'v-back': back
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #hotListYe {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    /*height: 10rem;*/
    background: #fff;
    z-index: 100;
    &.moveLeft-enter-active, &.moveLeft-leave-active{
      transition: all 0.2s linear;
    }
    &.moveLeft-enter, &.moveLeft-leave-active{
      transform: translate3d(100%, 0, 0);
    }
    .img_wrapper{
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 100%;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
