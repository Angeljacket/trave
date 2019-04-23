<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
      <img class="icon-img-content" :src='item.imgUrl' />
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 0,
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/style/varibies.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullet-active
    background: rgba(0,175,190,.8)
  .icon
   position:relative
   overflow:hidden
   float: left
   width: 25%
   height: 100%
   padding-bottom: 25%
  .icon-img
    width: 55px
    height: 55px
    position:absolute
    top: 0
    left: 20%
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
  .icon-desc
    position:absolute
    left: 0
    right: 0
    bottom: 0
    top: 60%
    height: .66rem
    font-size: 0.8rem
    line-height: .44rem
    color: $darkTextColor
    text-align: center
    margin-top: .1rem
  .icon-img-content
    display: block
    margin: 0 auto
    height: 100%
</style>
