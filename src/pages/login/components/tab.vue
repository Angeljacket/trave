<template>
  <div class="qn_header_sub">
  <div class="tab">
    <ul>
      <li class="tab-item cur">短信验证码登录</li>
      <router-link tag="li" :to="'/logins'" class="tab-item">
      账号登录
      </router-link>
    </ul>
  </div>
    <div class="form-control">
      <label class="control-label">手机号</label>
      <div class="control-container">
        <input class="control-text" type="tel" required="" ng-disabled="isTokenVcodeLogin" ng-require="true" maxlength="11" ng-model="mobile" name="mobile" placeholder="请输入手机号" autocomplete="off">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginTab'
}
</script>

<style lang="stylus" scoped>
 .qn_header_sub
   background: #18a9b9;
   color: #fff;
   height: 2.6rem;
   padding: .15rem .9rem 0;
 .tab
   border: 1px solid #fff;
   border-radius: .1rem;
 .tab-item
   line-height: 2.15rem
   width: 1%;
   font-size: 1rem;
   display: table-cell;
   text-align: center;
 .cur
   background: #fff;
   color: #25a4bb;
 .form-control
   display flex
   flex-direction row
   width 100%
   border-bottom: 1px solid #ddd;
   line-height: 1.35rem
   margin-top 1.8rem
   color: #19a9ba
   font-size 1rem
 .control-label
   display block
   width  3rem
 .control-text
   flex: 1;
   display: block
   margin-top .24rem
   width .01rem
   height: .3rem
   border 0
   line-height:  1.5
   color: #000
</style>
