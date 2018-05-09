<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1501/89/babe532d89b23ac070bc09dd092dc9b0.water.jpg_600x330_0e666363.jpg"
           alt="九寨沟">
      <div class="banner-info">
        <div class="banner-title">九寨沟(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe633;</span>
          36
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="galleryShow" @close="handleGalleryClose"></common-gallery>
  </div>

</template>
<script type="text/ecmascript-6">
  import commonGallery from 'common/gallery/gallery'
  export default {
    name: 'DetailBanner',
    data () {
      return {
        galleryShow: false,
        imgs: [
          'http://img1.qunarzz.com/sight/p0/1501/dd/dd930124c8773f59.water.jpg_350x240_eb8d6c19.jpg',
          'http://img1.qunarzz.com/sight/p0/1501/3c/3cc3fe75e2349e20.water.jpg_350x240_115bacd2.jpg'
        ]
      }
    },
    methods: {
      handleGalleryClick () {
        this.galleryShow = true
      },
      handleGalleryClose () {
        this.galleryShow = false
      }
    },
    components: {
      commonGallery
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .6)
        font-size: .28rem
        .banner-icon
          font-size: .28rem
</style>
