<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'CityAlphabet'
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute;
    top: 4rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height :.4rem
      text-align: center
      color :$bgColor
</style>
