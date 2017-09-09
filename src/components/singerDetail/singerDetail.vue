<template>
  <div id="singerDetail">
    <music-list :image="image" :songs="songs"></music-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list.vue'
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {createSong} from 'assets/js/song'
  export default {
    data() {
      return {
        songLists: []
      }
    },
    computed: {
      image() {
        return this.singer.avatar
      },
      songs() {
        return this.songLists
      },
      ...mapGetters(['singer'])
    },
    created() {
      console.log(this.singer)
      this._getSingerDetail()
    },
    methods: {
      _getSingerDetail() {
        if (!this.singer.id) {
          this.$router.push('/search')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === 0) {
            this.songLists = this._normalizeSongs(res.data.list)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
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

</style>
