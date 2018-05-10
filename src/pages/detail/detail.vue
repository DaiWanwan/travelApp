<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg"
                   :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="List"></detail-list>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import DetailBanner from './components/banner.vue'
  import DetailHeader from './components/header.vue'
  import DetailList from './components/list.vue'
  import axios from 'axios'
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        List: []
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json?id=' + this.$route.params)
          .then(this.handleDataSucc)
      },
      handleDataSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.List = data.categoryList
        }
      }
    },
    mounted() {
      this.getDetailInfo()
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
