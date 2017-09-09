<template>
  <div id="search">
    <div class="search-box-wrapper">
      <search-box ref="search_box" @value="onChangeValue"></search-box>
    </div>
    <div class="hot_search" v-show="!value">
      <h2 class="hot_search_title">热门搜索</h2>
      <ul class="hotKey_list">
        <li @click="selectVlaue(item.k)" v-for="item in hotKeys" :key="item.id">
          {{item.k}}
        </li>
      </ul>
    </div>
    <div class="search_result" v-show="value">
      <suggest :value="value"></suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import searchBox from 'components/search-box/search-box.vue'
  import {getHotKey} from 'api/search'
  import Suggest from 'components/suggest/suggest'

  export default {
    data() {
      return {
        hotKeys: [],
        value: ''
      }
    },
    created() {
      this._getHotKey()
    },
    methods: {
      selectVlaue(item) {
        this.$refs.search_box.setValue(item)
      },
      onChangeValue (value) {
        this.value = value
      },
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === 0) {
            this.hotKeys = res.data.hotkey.slice(0, 10)
          }
        })
      }
    },
    components: {
      searchBox,
      Suggest
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #search {
    position: fixed;
    top: 1.2rem;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
    .search-box-wrapper {
      width: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      background-color: #f4f4f4;
    }
    .hot_search {
      width: 100%;
      padding: 0.12rem 0.31rem 0;
      box-sizing: border-box;
      background-color: #ffffff;
      .hot_search_title {
        width: 100%;
        height: 0.76rem;
        line-height: 0.76rem;
        font-size: 0.3rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.6);
      }
      .hotKey_list {
        width: 100%;
        zoom: 1;
        &:after {
          content: '';
          display: block;
          clear: both;
        }
        li {
          float: left;
          height: 0.5rem;
          line-height: 0.5rem;
          margin-right: 0.28rem;
          margin-bottom: 0.2rem;
          padding: 0 0.23rem;
          text-align: center;
          font-size: 0.28rem;
          color: #000;
          border: 1px solid #000000;
          border-radius: 0.4rem;
          &:first-child {
            color: #fc4524;
            border-color: #fc4524;
          }
        }
      }
    }
    .search_result {
      position: absolute;
      top: 1.1rem;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      background-color: #cccccc;
    }
  }
</style>
