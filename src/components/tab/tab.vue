<template>
  <div id="tab">
    <router-link tag="div" class="tab_list" to="/recommend">
      <span class="tab_link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab_list" to="/rank">
      <span class="tab_link">排行</span>
    </router-link>
    <router-link tag="div" class="tab_list" to="/search">
      <span class="tab_link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less" scoped>
  #tab{
    display: flex;
    width: 100%;
    height: 0.6rem;
    background-color: #ffffff;
    .tab_list{
      flex: 1;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.3rem;
      color: rgba(0,0,0,.6);
      &.router-link-active {
        .tab_link{
          padding: 0.1rem;
          color: #31c27c;
          border-bottom: 2px solid #31c27c;
        }
      }
    }
  }
</style>
