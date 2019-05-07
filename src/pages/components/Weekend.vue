<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <router-link tag="li" :to="'/xetail/' + item.id"
                   class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
         <img :src='item.imgUrl' class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
    margin-bottom: .2rem
    line-height: 1.4rem
    background: #eee
    text-indent: .2rem
    padding: .24rem 0 .26rem;
    min-width: 0        //字体过多加省略号，比如是是是....
    padding-left: .4rem
    font-size: .77rem
  .item-img-wrapper
    overflow: hidden
    padding-bottom: 33.9%
    height: 0
  .title img
    width: 1rem
    height: 1rem
    line-height: 1.4rem
  .item-img
    width: 100%
  .item-info
    padding: .37rem
  .item-title
    line-height: 1.6rem
    font-size:  .88rem
    ellipsis ()
  .item-desc
    margin-top: .2rem
    line-height: 1.48rem
    font-size: .17rem
    color: #616161
    ellipsis ()
</style>
