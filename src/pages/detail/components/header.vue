<template>
  <div>
    <router-link tag='div' to='/' class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'DetailHeader',
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 30) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    padding .1rem
    width: .6rem
    height: .6rem
    border-radius: 50%
    text-align: center
    line-height .6rem
    background: rgba(0, 0, 0, .6)
    .header-abs-back
      color: #ffffff
      font-size: .4rem

  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .32rem
    color: #ffffff
    background: $bgColor
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align center
      font-size: .4rem
      color: #ffffff
</style>
