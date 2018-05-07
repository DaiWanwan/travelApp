<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommendList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg',
            title: '武汉海昌极地海洋世界',
            desc: '极地海洋主题公园，不一样的极地世界。'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg',
            title: '知音号游船',
            desc: '《知音号》是一个我们自己走进去、找出来故事的行为方式。'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/a5/a5302ccb14eafdfda3.img.jpg_200x200_7a886dbc.jpg',
            title: '木兰天池',
            desc: '帅的人都去过了😎，你还等什么~'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
            title: '武汉欢乐谷',
            desc: '100余项游乐设备，让你玩到爽！'
          },
          {
            id: '005',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/bb/bb978d0b35e4965c.water.jpg_200x200_d705f205.jpg',
            title: '汉秀剧场',
            desc: '日登黄鹤楼，夜赏楚汉秀~'
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

  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #cccccc
        ellipsis()
      .item-button
        line-height: .4rem
        font-size: .26rem
        margin-top: .16rem
        padding: 0.1rem 0.2rem
        border-radius: .06rem
        background: #ff9300
        color: #ffffff
</style>
