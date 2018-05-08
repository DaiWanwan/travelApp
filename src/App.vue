<template>
  <div id="app">
    <!--<router-view/>显示的就是当前地址显示的内容-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
