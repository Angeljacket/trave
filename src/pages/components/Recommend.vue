<template>
  <div>
    <div class="title">
    <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"/>
      猜你喜欢
    </div>
    <ul>
      <router-link  tag="li" :to="'/detail/' + item.id"
          class="item border-bottom" v-for="item of list" :key="item.id">
          <img :src='item.imgUrl' class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/style/mixins.styl"
  .title
    height: 1.4rem
    margin-top: .25rem
    line-height: 1.4rem
    background: #eee
    text-indent: .2rem
    padding: .24rem 0 .26rem;
    min-width: 0        //字体过多加省略号，比如是是是....
    padding-left: .4rem
  .title img
    width: 1rem
    height: 1rem
    line-height: 1.4rem
  .item
    overflow: hidden
    display: flex
    padding: .74rem 0
    margin-left: .3rem
    .item-img
      width: 6.3rem
      height: 6.3rem
      padding: .37rem
    .item-info
      flex: 1
      padding: .37rem
      min-width: 0
     .item-title
       line-height: 1.6rem
       margin-top: .5rem
       font-size:  1.1rem
       ellipsis ()
     .item-desc
       margin-top: .2rem
       line-height: 1.48rem
       font-size: .17rem
       color: #616161
       ellipsis ()
     .item-button
       margin-top: .4rem
       background: #ff9300
       padding: .2rem
       border-radius: .06rem
       color: #fff
</style>
