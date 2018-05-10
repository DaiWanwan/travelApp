<template>
  <div>
    <detail-banner></detail-banner>
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
  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        List: [
          {
            title: '成人票',
            children: [
              {
                title: '成人三馆联票'
              }, {
                title: '成人五馆联票'
              }, {
                title: '成人全馆联票'
              }
            ]
          },
          {
            title: '学生票',
            children: [
              {
                title: '成人三馆联票',
                children: [{title: 'xxxx销售'}]
              }, {
                title: '成人五馆联票'
              }, {
                title: '成人全馆联票'
              }
            ]
          },
          {
            title: '儿童票'
          },
          {
            title: '特惠票',
            children: [
              {
                title: '成人三馆联票'
              }, {
                title: '成人五馆联票'
              }, {
                title: '成人全馆联票'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
