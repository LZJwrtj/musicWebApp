<template>
  <div id="header">
    <span class="h-bar fa fa-bars"></span>
    <h2 class="h-title">音乐馆</h2>
    <span class="h-search fa fa-search"></span>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less" scope>
  #header {
    position: relative;
    .h-title{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.35rem;
      font-weight: bold;
      background-color: rgba(78,27,189,0.43);
    }
    .h-bar,.h-search{
      position: absolute;
      top: 0;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.5rem;
      z-index: 2;
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
