<template>
  <div id="song-list">
    <ul class="songList">
      <li @click="selectItem(item, index)" v-for="(item, index) in songs" :key="item.id">
        <!--<router-link :to="{name: 'player', params: {val: item}}">-->
        <h3 class="song_name">{{getName(item)}}</h3>
        <p class="song_des">{{getDes(item)}}</p>
        <!--</router-link>-->
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      songs: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      getName (item) {
        return `${item.name}(Live)`
      },
      getDes (item) {
        return `${item.singer}·${item.album}`
      },
      selectItem (item, index) {
        this.$emit('selectItem', item, index)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .songList {
    width: 100%;
    padding-left: 0.3rem;
    margin-bottom: 1.7rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    li {
      height: 1.16rem;
      padding-top: 0.06rem;
      font-size: 0.28rem;
      color: #000;
      border-bottom: 1px solid #ffffff;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      .song_name {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.36rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .song_des {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
</style>
