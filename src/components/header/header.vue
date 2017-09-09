<template>
  <div id="header">
    <span class="h-bar icon-bar"></span>
    <h2 class="h-title">音乐馆</h2>
    <span class="h-search icon-search"></span>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less" scoped>
  #header {
    position: relative;
    .h-title{
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.3rem;
      font-weight: bold;
      background-color: rgba(78,27,189,0.43);
    }
    .h-bar,.h-search{
      position: absolute;
      top: 0;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.4rem;
      /*z-index: 2;*/
      color: #333;
    }
    .h-bar{
      left: 0.2rem;
    }
    .h-search{
      right: 0.3rem;
    }
  }
</style>
