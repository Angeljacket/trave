<template>
    <div class="list" ref="wrapper">
    <div class="city-list">
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <ul class="mp-list mp-tr3">
        <li v-for="item of hot" :key="item.id" @click="onceCityClick(item.name)">
          <a hybrid-link=""  title="去哪儿门票">{{item.name}}</a>
        </li>
      </ul>
      </div>
    <div class="area">
       <div class="title border-topbottom">字母排序</div>
      <ul class="mp-character-list mp-tr6">
        <li><a href="#domestic-A">A</a></li>
        <li><a href="#domestic-B">B</a></li>
        <li><a href="#domestic-C">C</a></li>
        <li><a href="#domestic-D">D</a></li>
        <li><a href="#domestic-E">E</a></li>
        <li><a href="#domestic-F">F</a></li>
        <li><a href="#domestic-G">G</a></li>
        <li><a href="#domestic-H">H</a></li>
        <li><a href="#domestic-J">J</a></li>
        <li><a href="#domestic-K">K</a></li>
        <li><a href="#domestic-L">L</a></li>
        <li><a href="#domestic-M">M</a></li>
        <li><a href="#domestic-N">N</a></li>
        <li><a href="#domestic-P">P</a></li>
        <li><a href="#domestic-Q">Q</a></li>
        <li><a href="#domestic-R">R</a></li>
        <li><a href="#domestic-S">S</a></li>
        <li><a href="#domestic-T">T</a></li>
        <li><a href="#domestic-W">W</a></li>
        <li><a href="#domestic-X">X</a></li>
        <li><a href="#domestic-Y">Y</a></li>
        <li><a href="#domestic-Z">Z</a></li>
      </ul>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <ul class="mp-list">
        <li v-for="innerItem of item" :key="innerItem.id" @click="onceCityClick(innerItem.name)">
          <a hybrid-link="" href="#" title="去哪儿门票">{{innerItem.name}}</a></li>
      </ul>
    </div>
  </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0] // 获取他的区域 循环出来的ref是一个数组，scrollToElement要使用的话必须得是一个dom元素，所以得选择[0]
        this.scroll.scrollToElement(element) // scroll插件自带的方法，点击某个字母然后就滚动到某个字母的旁边，然后把element传进来
      }
      // console.log(this.letter) // 获取到了当前的字母表数据了
    }
  },
  methods: {
    onceCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/style/varibies.styl'
 .border-topbottom
    &:before
      border-color: #ccc
 .list
   overflow:hidden
   position: absolute
   top: 6.5rem
   left: 0
   right: 0
   bottom: 0
  .title
   line-height: 1.4rem
   background: #eee
   padding: .5rem 1rem
   font-size: .76rem
   color: #212121
 .button-list
   padding: .1rem .1rem
   overflow: hidden
  .button-wrapper
    float: left
    width: 33.33%
   .button
     border: .2rem solid #ccc
     margin: .1rem .1rem
     text-align: center
     border-radius: .06rem
 .mp-list
   position: relative;
   overflow: hidden;
   z-index: 0;
   background-color: #fff;
  .mp-list.mp-tr3 li
   width: 33.23%
 .mp-list li
   width: 24.9%;
   height: 2.86rem;
   line-height: 2.86rem;
   font-size: .28rem;
   text-align: center;
   border-bottom: .02rem solid #ddd;
   border-right: .02rem solid #ddd
   margin-bottom: -1px;
   float: left;
   position: relative;
   z-index: 10;
   color: #212121;
 .mp-list li a
   text-decoration: none
   color: #212121;
   display: block;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   font-size: .9rem;
 .mp-character-list
   position: relative;
   overflow: hidden;
   z-index: 0;
   background-color: #fff;
   padding: .3rem 0;
 .mp-character-list li
    width: 16.66%;
    height: 2.86rem;
    line-height: 2.86rem;
    font-size: .9rem;
    text-align: center;
    float: left;
    position: relative;
    z-index: 10;
    color: #212121;
 .mp-character-list li a
   text-decoration: none
   color: #212121;
   display: block;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   font-size: .9rem;
</style>
