<template>
  <div>
    <div>
      <router-link to="/" tag="div" v-show="showAbs">
        <span class="mp-header-back-bg"></span>
        <span class="iconfont span-icon">&#xe6a4;</span>
      </router-link>
    </div>
     <div class="header-fixed" v-show="!showAbs" :style="opactiyStyle">
       <router-link to="/">
       <span class="iconfont span-icon">&#xe6a4;</span>
       </router-link>
       景点详情
     </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opactiyStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opactiyStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll) // 给全局绑定的scroll事件进行解绑
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/style/varibies.styl"
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    right: 0
    left: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
  .mp-header-back-bg
    display: block
    width: 2.16rem
    height: 2.16rem
    background: #000
    opacity: .5
    border-radius: 1.08rem
    position: absolute
    left: .3rem
    top: .3rem
  .span-icon
    position: absolute
    left: .3rem
    top: .3rem
    height: 2.16rem
    width: 2.16rem
    line-height: 2.16rem
    font-size: 1.8rem
    color: #fff
</style>
