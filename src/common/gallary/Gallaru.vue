<template>
  <div class="container" @click="onceGallary">
    <div class="wrapper" >
      <!--<swiper :options="swiperOptions" v-for="(item, index) of imgs" :key="index">-->
        <!--&lt;!&ndash; slides &ndash;&gt;-->
        <!--<swiper-slide  v-for="(etem, index) of item.simgs" :key="index">-->
          <!--<img class="gallary-img" :src="etem" />-->
        <!--</swiper-slide>-->
        <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
        <!--<div class="swiper-pagination"  slot="pagination"></div>-->
      <!--</swiper>-->
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide  v-for="(item, index) of imgs.imgs" :key="index" class="bt">
          <img class="gallary-img" :src="item.max" />
        </swiper-slide>
        <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallaru',
  props: {
    imgs: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
        notNextTick: true,
        init: false,
        initialSlide: 0
      }
    }
  },
  methods: {
    onceGallary () {
      this.$emit('close')
    }
  },
  watch: {
    imgs (val) {
      this.swiperOptions.initialSlide = val.index
      // console.log(this.swiperOptions.initialSlide)
      // console.log(val.index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
  .container
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    z-index: 99
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 100%
  .gallary-img
    width 100%
    height: 493px
    position: absolute
    bottom: 5rem
  .swiper-pagination
    color: #fff
    bottom: 0rem
</style>
