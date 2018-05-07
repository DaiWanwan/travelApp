<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>

  </div>
</template>
<script type="text/ecmascript-6">
  import HomeHeader from './components/header.vue'
  import HomeSwiper from './components/swiper.vue'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
