<template>
  <div id="back" @click="back">
    <span class="fa fa-arrow-left"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      back: function () {
        this.$store.dispatch('close')
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #back{
    position: absolute;
    top: 0;
    left: 0;
    span{
      display: block;
      padding: 0.15rem;
      font-size: 0.5rem;
      color: #fff;
    }
  }
</style>
