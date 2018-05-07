<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" border-bottom v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HomeWeekend',
    data() {
      return {
        weekendList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg',
            title: '武汉必游TOP10',
            desc: '到武汉感受神奇的热干面之都'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fe/2533da6335a59d.jpg_r_640x214_9fb62f4b.jpg',
            title: '武汉踏青赏花胜地',
            desc: '人间四月芳菲尽，武汉踏青赏花正当时'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg',
            title: '开启亲子时光',
            desc: '这些地方都是宝贝的最爱'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3a/f96e254541abb.jpg_r_640x214_6b1fc9f0.jpg',
            title: '鄂西旅游圈',
            desc: '感受鄂西旖旎风光，土苗民族风情'
          },
          {
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
            title: '周末出游乐翻天',
            desc: '春夏秋冬，这里是当地人最爱的休闲时光'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/mixin.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem

  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%

  .item-info
    padding: .14rem .2rem .2rem .2rem;
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #cccccc
      ellipsis()
</style>
