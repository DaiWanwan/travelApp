<template>
  <div class="container" @click="handleGalleryEnd">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class='gallery-img'
               :src="item"
               alt="九寨沟">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'commonGallery',
    props: {
      imgs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true
        }
      }
    },
    methods: {
      handleGalleryEnd () {
        this.$emit('close')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container >>>  .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #ffffff
        bottom: -1rem
</style>
