<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this. currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">{{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hot: Array,
      letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapActions(['changeCity'])
    },
    watch: {
      letter() {
        if (this.letter) {
          const ele = this.$refs[this.letter][0]
          this.scroll.scrollToElement(ele)
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc

  .border-bottom
    &:before
      border-color: #cccccc

  .list
    overflow: hidden
    position: absolute
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .44rem
      padding: .16rem .2rem
      font-size: .26rem
      background: #eeeeee
      color: #666666

    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem

    .item-list
      .item
        padding-left: .2rem
        line-height: .76rem
</style>
