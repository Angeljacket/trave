<template>
    <div v-if="datalist">
      <div v-for="(item, index) in datalist" :key="index">
        <div v-if="pageId && item.id === pageId">
          <detail-banner :sightName="item.sightName" :bannerImg="item.bannerImg" :gallaryImgs="item.gallaryImgs"></detail-banner>
          <detail-header></detail-header>
          <div class="content">
            <detail-basinfo :pingFen="item.pingFen"
                            :danWei="item.danWei"
                            :zan="item.zan"
                            :pingLun="item.pingLun"
                            :gongLue="item.gongLue"
                            :diZhi="item.diZhi"
            ></detail-basinfo>
            <detail-list :list="item.categoryList"></detail-list>
            <detail-usertell :tell="item.tell" :imgs="item.theImgs"></detail-usertell>
            <detail-recommend :look="item.look"></detail-recommend>
          </div>
        </div>
      </div>
      <home-footer></home-footer>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailBasinfo from './components/Basinfo'
import DetailUsertell from './components/Usertell'
import HomeFooter from './components/Footer'
import DetailRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailBasinfo,
    DetailUsertell,
    HomeFooter,
    DetailRecommend
  },
  data () {
    return {
      datalist: [],
      pageId: null,
      recommendList: []
    }
  },
  methods: {
    getDetailInfo () {
      let _this = this
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        _this.datalist = res.data.data
      }) // json?id是获取了动态路由上的id
    }
  },
  created () {
    this.pageId = this.$route.params.id
  },
  mounted () {
    this.getDetailInfo()
  }
}

/**
 * then ();
 * then (res => { .... }) => then(function (res) {....})
 */
</script>

<style lang="stylus" scoped>
 .content
   overflow-x: hidden
   background: #f5f5f5
</style>
