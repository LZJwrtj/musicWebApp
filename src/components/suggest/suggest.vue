<template>
  <scroll id="suggest"
          :pullUp="pullUp"
          :data="results"
          @scrollToEnd="searchMore">
    <ul class="result_list">
      <li @click="selectItem(item)" v-for="item in results" :key="item.id">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="result_list_name">
          <p class="song_name" v-html="getSongname(item)"></p>
          <p class="singer_name" v-html="getSingername(item)"></p>
        </div>
      </li>
      <loading v-show="hasMore" :title="''"></loading>
    </ul>
    <div v-show="!hasMore && !results.length">没有数据了</div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import {search} from 'api/search'
  import {createSong} from 'assets/js/song'
  import Scroll from 'components/scroll/scroll'
  import Loading from 'components/loading/loading'
  import Singer from 'assets/js/singer'
  import {mapMutations, mapActions} from 'vuex'

  const TYPE_SINGER = 'singer'
  const perpage = 20

  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      showSinger: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        page: 1,
        results: [],
        pullUp: true,
        hasMore: true
      }
    },
    methods: {
      search() {
        this.hasMore = true
        search(this.value, this.page, this.showSinger, perpage).then((res) => {
          this.results = this._getResult(res.data)
          this._checkMore(res.data)
        })
      },
      searchMore() {
        if (!this.hasMore) {
          return
        }
        this.page++
        search(this.value, this.page, this.showSinger, perpage).then((res) => {
          console.log(res)
          this.results = this.results.concat(this._getResult(res.data))
          this._checkMore(res.data)
        })
      },
      getIconCls(item) {
        if (item.type === TYPE_SINGER) {
          return 'icon-people'
        } else {
          return 'icon-music'
        }
      },
      getSongname(item) {
        if (item.type === TYPE_SINGER) {
          return item.singername
        } else {
          return item.name
        }
      },
      getSingername(item) {
        if (item.type === TYPE_SINGER) {
          return `单曲：${item.songnum}`
        } else {
          return item.singer
        }
      },
      selectItem(item) {
        if (item.type === TYPE_SINGER) {
          const singer = new Singer({
            id: item.singerid,
            mid: item.singermid,
            name: item.singername
          })
          this.$router.push({
            path: `/search/${singer.id}`
          })
          this.set_singer(singer)
        } else {
          this.insertSong(item)
        }
      },
      _getResult(data) {
        let ret = []
        if (data.zhida && data.zhida.singerid) {
          ret.push({...data.zhida, ...{type: TYPE_SINGER}})
        }
        if (data.song) {
          ret = ret.concat(this._normalizeSong(data.song.list))
        }
        return ret
      },
      _normalizeSong(list) {
        let ret = []
        list.forEach((item) => {
          if (item.songid && item.albumid) {
            ret.push(createSong(item))
          }
        })
        return ret
      },
      _checkMore(data) {
        let song = data.song
        if (!song.list.length || (song.curpage * perpage) > song.totalnum) {
          this.hasMore = false
        }
      },
      ...mapMutations({
        set_singer: 'SET_SINGER'
      }),
      ...mapActions(['insertSong'])
    },
    watch: {
      value() {
        this.search()
      }
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #suggest {
    position: fixed;
    top: 2.3rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .result_list {
      li {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.3rem;
        padding: 0 0.5rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        .icon {
          float: left;
          width: 0.3rem;
          height: 0.3rem;
          margin-right: 0.3rem;
          i {
            font-size: 0.3rem;
          }
        }
        .result_list_name {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          .song_name {
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            margin-top: 0.1rem;
          }
          .singer_name {
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.25rem;
          }
        }
      }

    }
  }
</style>
