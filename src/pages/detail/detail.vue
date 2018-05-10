<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import DetailBanner from './components/banner.vue'
  import DetailHeader from './components/header.vue'
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
    background: #e5c5ff
</style>
