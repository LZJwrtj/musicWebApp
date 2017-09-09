<template>
  <div id="slide">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in slides" :key="item.id">
        <a href="javascript:;"><img class="slide_img" :src="item.picUrl" alt=""></a>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')
  export default {
    data () {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper optionss 所有的配置同swiper官方api配置
          autoplay: 2000,
          loop: true,
          initialSlide: 1,
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
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #slide{
    width: 100%;
    height: 3rem;
    .slide_img{
      width: 100%;
      height: 3rem;
    }
  }
</style>
