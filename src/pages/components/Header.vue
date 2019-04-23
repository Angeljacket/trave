<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont basize">&#xe6a4;</div>
    </div>
    <div class="header-input">
      <div class="axs">
      <a href="http://touch.piao.qunar.com/touch/list_%E5%B9%BF%E5%B7%9E.html?isSearch=1&cityName=%E5%B9%BF%E5%B7%9E">
      <span class="iconfont">&#xe637;</span>
        输入/城市/景点/游玩主题</a></div>
    </div>
    <router-link to='/city'>
    <div class="header-right">
      <!--$store是指用vuex创建的store state是公用数据-->
      {{this.$store.state.city}}
      <span class="iconfont">&#xe634;</span>
    </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HomHeader',
  props: {
    city: String
  }
}
</script>
<!--stylus的用法不同于之前的style用法,stylus直接写就好-->
<style lang="stylus" scoped>
  @import "../../assets/style/varibies.styl"
a
 text-decoration: none
.header
  display:flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color:#fff
  font-size:0.8rem
.header-left
  width:1.85rem
  float: left
.basize
  font-size:1.5rem
 .header-input
   flex: 1
   background:#fff
   height:1.6rem
   line-height: 1.6rem
   margin-top: .45rem
   margin-left:.2rem
   border-radius: .3rem
   color:#ccc
 .header-input a
  display: block
  color:#ccc
 .header-input span
   font-size: .8rem
   margin-left: .45rem
 .header-right
    margin-left: .2rem
    width:auto
    float:right
    text-align:center
    color: #fff
 .header-right span
    margin-left:-.04rem
    font-size:.1rem
</style>
