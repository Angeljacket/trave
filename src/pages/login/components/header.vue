<template>
    <div class="header">
      <router-link to="/">
        <span class="iconfont span-icon">&#xe6a4;</span>
      </router-link>
      <div class="title">登录</div>
      <a ng-hide="onlyLogin==true" href="https://user.qunar.com/mobile/register.jsp?ret=http%3A%2F%2Ftouch.piao.qunar.com%2F&amp;from=touchLoginPage" class="right">注册</a>
    </div>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang="stylus" scoped>
 .header
   position: relative
   height: 2.75rem /*2.75rem=44px*/
   background: #18a9b9
   line-height: 2.75rem
 .span-icon
    position: absolute
    left: .3rem
    top: .3rem
    height: 2.16rem
    width: 2.16rem
    line-height: 2.16rem
    font-size: 1.8rem
    color: #fff
 .title
   margin: 0 1.8rem;
   text-align: center;
   line-height: 2.75rem;
   color: #fff;
   font-size: 1.1rem;
 .right
   text-decoration none
   position absolute
   top: 0
   right: 0;
   padding-right: .8rem;
   text-align: right;
   font-size: 1rem;
   width 2.8rem
   overflow hidden
   color: #75ffff;
   cursor: pointer;
</style>
