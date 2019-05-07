<template>
  <div class="qn_header_sub">
    <div class="tab">
      <ul>
        <router-link tag="li" :to="'/login'" class="tab-item">
        短信验证码登录
        </router-link>
          <li class="tab-item cur">账号登录</li>
      </ul>
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
</style>
