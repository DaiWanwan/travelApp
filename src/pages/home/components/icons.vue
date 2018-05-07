<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-image" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">景点门票</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HomeIcons',
    data() {
      return {
        iconList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '必游榜单'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc: '游乐场'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            desc: '踏青赏花'
          },
          {
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc: '动植物园'
          },
          {
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',
            desc: '周边游'
          },
          {
            id: '008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
            desc: '自然风光'
          },
          {
            id: '009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            desc: '演出'
          },
          {
            id: '010',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            desc: '全部玩乐'
          }
        ]
      }
    },
    computed: {
      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixin.styl"
  .icons >>>  .swiper-container
    height: 0
    padding-bottom: 60%
  .icons
    margin-top:.1rem
    .icon
      position: relative;
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 30%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom .4rem
        box-sizing: border-box
        padding: .1rem
        .icon-image
          display: block
          margin: 0 auto
          margin-top: .24rem
          height: 100%
      .icon-desc
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height: .4rem
        line-height: .4rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
