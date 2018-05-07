<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img' :src="item.imgUrl" alt="去哪儿门票">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/bf/bb3027b882d50202.jpg_750x200_041a8de2.jpg'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/39/3a0d729eb287b102.jpg_750x200_fda1a9b8.jpg'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/18/503cb712adf3d502.jpg_750x200_914f9ff7.jpg'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/dd/466fb314a22bd702.jpg_750x200_25ea4968.jpg'
          },
          {
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/b5/8bd6da9d794e1902.jpg_750x200_b1a28179.jpg'
          },
          {
            id: '006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/3e/4d6e12949f74fc02.jpg_750x200_22aba1bb.jpg'
          },
          {
            id: '007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper >>>  .swiper-pagination-bullet-active
    background: #ffffff

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.67%
    background: #eeeeee

    .swiper-img
      width: 100%
</style>
