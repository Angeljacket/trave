<template>
  <div class="mp-tab-con" id="sel-region-tab">
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul class="search-content-ul">
        <li v-for="item of list" :key="item.id" @click="onceCityClick(item.name)">
          {{item.name}}
        </li>
        <li v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
     <ul class="mpul">
       <li class="active">境内</li>
       <router-link to="/cities">
       <li>境外·港澳台</li>
       </router-link>
     </ul>
   </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    onceCityClick (city) { // city是获取当前单击的数据
      this.$store.commit('changeCity', city)
      this.$router.push('/')
      // alert(city)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '../../../assets/style/varibies.styl'
 .search
   height: 1.5rem
   padding: .1rem
   background: $bgColor
 .search-content
  z-index:1
  position: absolute
  top: 4.42rem
  left: 0
  bottom: 0
  right: 0
  overflow: hidden
  background: #eee
 .search-content ul li
   border-bottom: 1px solid #ccc
   color: #666
   background: #fff
  .search-input
    width: 100%
    height: 1.5rem
    padding: 0 .1rem
    line-height: 1.5rem
    text-align: center
    border-radius: .5rem
    color: #666
 .mp-tab-con
   height: 2.5rem
   line-height: 1.25rem
   background-color: #00bcd4;
   padding-bottom: 1.3rem
   padding-left: 3rem
   padding-right: 3rem
   color: #fff;
 .mpul
   margin-top: .4rem
   border: 1px solid #fff
   border-radius: .03rem
   zoom: 1
   overflow: hidden
  .mpul li
   height: 1.25rem
   width: 50%;
   float: left;
   text-align: center;
   background-color: #00bcd4;
   font-size: .9rem;
   color: #fff;
  .mpul .active
    background-color: #fff;
    color: #00bcd4;
</style>
