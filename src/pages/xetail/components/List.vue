<template>
    <div class="list">
      <div class="mav" v-for="(item, index) of sightName" :key="index">
      <img :src="item.Imgs">
      <div class="list-info">
        <p class="info-name">{{item.title}}</p>
        <p class="info-desc">{{item.sightDesc}}</p>
      </div>
      <div class="list-price">
         <span class="price-fu">￥<em>{{item.price}}</em><span class="xu">起</span></span>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OnceList',
  props: {
    sightName: Array,
    sightDesc: String,
    price: String,
    Imgs: String
  }
}
</script>

<style lang="stylus" scoped>
 .list
   background: #fff
   position: relative;
   margin-bottom: .8rem;
 .list img
   width 100%
 .list-info
   position: relative;
   padding: .42rem .6rem .42rem .6rem;
 .info-name
   overflow: hidden;
   padding-right: 6.6rem;
   color: #212121;
   font-size: 1.1rem;
   line-height: 1.62rem;
 .info-desc
   overflow: hidden;
   color: #616161;
   font-size: .78rem;
   line-height: 1.35rem;
 .mav
  position relative
 .list-price
   position: absolute;
   bottom: 1.8rem;
   right: .6rem;
 .price-fu
   color: #ff8300;
   font-size: .54rem;
 .price-fu em
   font-size: 1.2rem;
   margin-left: .04rem;
   font-weight: bold;
 .price-fu .xu
    color: #616161
</style>
