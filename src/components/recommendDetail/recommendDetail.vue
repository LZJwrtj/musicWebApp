<template>
  <transition name="slideLeft">
    <music-list :image="image" :title="title" :songs="songs" :des="des" :author="author"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getDetail} from 'api/recommend'
  import MusicList from 'components/music-list/music-list'
  import {createSong} from 'assets/js/song'

  export default {
    data() {
      return {
//        songLists: {},
        recommendDetails: {},
        songLists: []
      }
    },
    computed: {
      image() {
        return this.recommendDetails.logo
      },
      title() {
        return this.recommendDetails.dissname
      },
      songs () {
        return this.songLists
      },
      des() {
        return `${(this.recommendDetails.visitnum / 10000).toFixed(1)}万人播放`
      },
      author() {
        return `来自:${this.recommendDetails.nickname}`
      },
      ...mapGetters(['recommend'])
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.recommend.id) {
          this.$router.push({
            path: '/recommend'
          })
          return
        }
        getDetail(this.recommend.id).then((res) => {
          this.recommendDetails = res.cdlist[0]
          this.songLists = this._normalizeSongs(res.cdlist[0].songlist)
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((item) => {
          if (item.id && item.album.id) {
            ret.push(createSong(item))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }

</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slideLeft-enter-active, .slideLeft-leave-active {
    transition: all 0.2s linear;
  }

  .slideLeft-enter, .slideLeft-leave-to {
    transform: translate3d(100%, 0, 0);
  }

</style>
