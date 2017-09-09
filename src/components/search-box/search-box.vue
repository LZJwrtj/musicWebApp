<template>
  <div id="search-box">
    <i class="icon-search icon_search"></i>
    <input v-model="value" class="search_txt" type="text" :placeholder="placeholder">
    <i @click="clear" v-show="value" class="icon-close icon_close"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        value: ''
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌单、专辑'
      }
    },
    methods: {
      clear() {
        this.value = ''
      },
      setValue(value) {
        this.value = value
      }
    },
    created() {
      this.$watch('value', (newVlaue) => {
        this.$emit('value', newVlaue)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #search-box {
    display: flex;
    width: 7.1rem;
    height: 0.72rem;
    line-height: 0.72rem;
    background-color: #ffffff;
    padding: 0.1rem 0.23rem;
    box-sizing: border-box;
    border-radius: 0.1rem;
    i {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.3rem;
    }
    .icon_search {
      margin-top: 0.1rem;
      margin-right: 0.17rem;
    }
    .search_txt {
      flex: 1;
      font-size: 0.3rem;
      outline: none;
    }
    .icon_close{
      margin-top: 0.1rem;
    }
  }
</style>
