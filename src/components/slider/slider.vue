<template>
  <div id="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in slides" :key="item.id">
        <a :href="item.linkUrl"><img :src="item.picUrl" class="slide-img" alt=""></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
//  import $ from 'jquery'
  import {swiper, swiperSlider} from 'vue-awesome-swiper'
  export default {
    data () {
      return {
//        slides: [],
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          initialSlide: 1,
          autoplay: 3000,
          loop: true,
          direction: 'horizontal',
          autoplayDisableOnInteraction: false,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        }
      }
    },
    props: ['slides'],
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
//      var that = this
//      $.ajax({
//        url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
//        type: 'GET',
//        dataType: 'jsonp',
//        jsonp: 'jsonpCallback',
//        jsonpCallback: 'callback',
//        success: function (res) {
//          that.slides = res.data.slider
//        }
//      })
    },
    components: {
      swiper,
      swiperSlider
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #slide{
    height: 3rem;
  }
  .slide-img {
    width: 100%;
    height: 3rem;
  }
</style>
