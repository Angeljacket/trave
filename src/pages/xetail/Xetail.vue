<template>
  <div v-if="datalist">
    <div v-for="(item, index) in datalist" :key="index">
      <div v-if="pageId && item.id === pageId">
        <div class="header">
          <details-header :headerTitle="item.headerTitle"></details-header>
        </div>
        <once-list :sightName="item.sightName" :sightDesc="item.sightDesc" :price="item.price" :Imgs="item.Imgs"></once-list>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsHeader from './components/Header'
import OnceList from './components/List'
import axios from 'axios'
export default {
  name: 'Xetail',
  components: {
    DetailsHeader,
    OnceList
  },
  data () {
    return {
      datalist: [],
      pageId: null,
      recommendList: []
    }
  },
  methods: {
    getDetailsInfo () {
      let _this = this
      axios.get('/api/details.json', {
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
    this.getDetailsInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .header
    margin-bottom 2.5rem
</style>
