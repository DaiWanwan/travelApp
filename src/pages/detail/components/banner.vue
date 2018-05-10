<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-img"
           :src="bannerImg"
           :alt="sightName">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe633;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallery :imgs="gallaryImgs" v-show="galleryShow" @close="handleGalleryClose"></common-gallery>
  </div>
</template>
<script type="text/ecmascript-6">
  import commonGallery from 'common/gallery/gallery'
  export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array

    },
    data () {
      return {
        galleryShow: false
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
