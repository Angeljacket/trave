<template>
  <div>
    <hom-header></hom-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import HomeFooter from './components/Footer'
import axios from 'axios'
export default {
  name: 'Hom',
  // HomeHeader:HomeHeader 是普通写法 es6写法是HomeHeader
  components: {
    HomHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
    HomeFooter
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      // 修改了index.js的内容，改变了一下/api到的目录
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
