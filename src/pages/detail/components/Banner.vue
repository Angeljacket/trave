<template>
  <div>
    <div class="banner" @click="onceBannerClick">
      <img class="banner-img" :src="bannerImg" >
      <div class="banner-info">
        <div class="banner-number"><span class="iconfont banner-icon">&#xe615;</span>{{this.gallaryImgs.length}}</div>
        <div class="banner-title">{{this.sightName}}</div>
      </div>
    </div>
<!-- fade是定义的动画的组件-->
    <fade>
    <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="onceGallaryClose"></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    onceBannerClick () {
      this.showGallary = true
    },
    onceGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
 .banner
   position: relative
   color: #fff
   overflow: hidden
   height: 0
   padding-bottom: 55%
 .banner::after
   content: " ";
   display: block;
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   min-height: 1.4rem;
   background-color: transparent;
   background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    display: flex
  .banner-title
    height: auto
    flex: 1
    position: absolute
    right: .6rem
    bottom: 1.08rem
    left: .6rem
    font-size: 1.08rem
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
 .banner-number
    font-size: .24rem
    position: absolute
    left: .6rem
    bottom: 2.58rem
    padding: 0 .4rem
    line-height: 1.25rem
    height: 1.25rem
    border-radius: .6rem
    background: rgba(0,0,0,.5)
  .banner-icon
    font-size: .24rem
</style>
