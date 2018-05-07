<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script type="text/ecmascript-6">
  import CityHeader from './components/header.vue'
  import CitySearch from './components/search.vue'
  import CityList from './components/list.vue'
  import CityAlphabet from './components/Alphabet.vue'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
