<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif" alt="">
    <p class="des">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .loading{
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    .des{
      line-height: 0.4rem;
      font-size: 0.25rem;
      color: #000;
    }
  }
</style>
