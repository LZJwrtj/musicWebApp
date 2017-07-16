<template>
  <div id="nav">
    <ul>
      <router-link tag="li" to="/recommend">精选</router-link>
      <router-link tag="li" to="/rank">排行</router-link>
      <router-link tag="li" to="/search">搜索</router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less" scoped>
  #nav {
    width: 100%;
    height: 1rem;
    ul {
      display: flex;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      background: #fff;
      li {
        flex: 1;
        font-size: 0.35rem;
        color: rgba(0,0,0,.6);
        &.router-link-active {
          color: #31c27c;
          border-bottom: 2px solid #31c27c;
        }
      }
    }
  }

</style>
