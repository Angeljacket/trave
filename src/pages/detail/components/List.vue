<template>
  <div style="background: #fff">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
   width: 1rem
   height: 1rem
   background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
   background-position: 0 -1.35rem
   background-repeat: no-repeat
   display: inline-block;
   margin-right: .3rem
   background-size: 1.2rem 9rem;
   position: absolute;
   top: .78rem;
   left: .6rem;
 .item-title
   position: relative
   line-height: 2rem
   font-size: .96rem
   padding:0.3rem .6rem
   text-indent: 1.2rem;
 .item-children
   padding: 0 .6rem
</style>
