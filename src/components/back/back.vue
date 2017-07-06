<template>
  <div id="back" @click="back">
    <span class="fa fa-arrow-left"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      back: function () {
        this.$emit('back')
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
      padding: 0.1rem;
      font-size: 0.3rem;
      color: #000;
    }
  }
</style>
