<template>
  <div id="rank-list">
    <music-list :image="image" :title="title" :songs="songs" :des="des" :author="author"></music-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getRankList} from 'api/rank'
  import {createSong} from 'assets/js/song'
  import MusicList from 'components/music-list/music-list'
  export default {
    data () {
      return {
        rankData: {},
        rankDetail: {},
        songLists: [],
        imageUrl: ''
      }
    },
    created() {
      this._getRankList()
    },
    methods: {
      _getRankList() {
        if (!this.rank.id) {
          this.$router.push({
            path: '/rank'
          })
          return
        }
        getRankList(this.rank.id).then((res) => {
          this.rankData = res
          this.imageUrl = this.rankData.songlist[0].data.albummid
          this.rankDetail = res.topinfo
          this.songLists = this._normalizeSongs(res.songlist)
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          if (item.data.songid && item.data.albumid) {
            ret.push(createSong(item.data))
          }
        })
        return ret
      }
    },
    computed: {
      image() {
        return `https://y.gtimg.cn/music/photo_new/T002R150x150M000${this.imageUrl}.jpg?max_age=2592000`
      },
      title() {
        return this.rankDetail.ListName
      },
      songs() {
        return this.songLists
      },
      des() {
        return this.rankData.update_time
      },
      author() {
        return ''
      },
      ...mapGetters(['rank'])
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #rank-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    color: #ffffff;
    width: 100%;
  }
</style>
