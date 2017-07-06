<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/recommend">精选</router-link>
      </li>
      <li>
        <router-link to="/rank">排行</router-link>
      </li>
      <li>
        <router-link to="/songList">歌单</router-link>
      </li>
      <li>
        <router-link to="/radio">电台</router-link>
      </li>
      <li>
        <router-link to="/mv">MV</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="less" rel="stylesheet/less" scoped>
  #nav{
    width: 100%;
    height: 1rem;
    ul{
      display: flex;
      height: 100%;
      line-height: 100%;
      text-align: center;
      background: #fff;
      li{
        flex: 1;
        font-size: 0.4rem;
      }
    }
  }
  .router-link-active{
    color: #ff4466;
  }
</style>
