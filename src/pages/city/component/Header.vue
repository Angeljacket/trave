<template>
  <div class="header">
    城市选择
    <router-link to="/">
    <div class="iconfont header-back">&#xe6a4;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '../../../assets/style/varibies.styl'
 .header
   /*2.13rem = 34 px*/
   position: relative
   height: $headerHeight
   line-height: $headerHeight
   text-align: center
   color: #fff
   background: $bgColor
   padding-bottom: .2rem
   .header-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    text-align: center
    font-size: 1.5rem
    color: #fff
</style>
