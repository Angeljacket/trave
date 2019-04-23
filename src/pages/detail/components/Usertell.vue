<template>
  <div class="mp-comment">
  <h3 class="mo-comment-title">用户评论</h3>
    <div class="mp-comment-item" v-for="(item, index) of tell" :key="index">
      <div class="stardate">
        <span class="date">{{item.date}}</span>
      </div>
      <p class="content">
        {{item.content}}
      </p>
      <div class="mp-comment-foldbtn" data-status="fold" mp-role="commentFoldBtn" >more</div>
      <div class="mp-comment-imgs" @click="onceBannerClick">
        <div class="mp-comment-imgouter" v-for="(etem, index) of item.theImgs" :key="index" @click="sendImg(item.theImgs, index)">
          <div class="mp-comment-imginner">
            <img class="mp-comment-img" :src="etem.min">
          </div>
        </div>
        </div>
      <div class="tag">
        <span class="bg"></span>
        <span class="tagum">共{{item.theImgs.length}}张</span>
      </div>
    </div>
    <fade>
      <!--<common-gallaru :imgs="imgs" v-show="showGallary" @close="onceGallaryClose"></common-gallaru>-->
      <common-gallaru :imgs="(currentImg) ? currentImg : {}" v-show="showGallary" @close="onceGallaryClose"></common-gallaru>
    </fade>
  </div>
</template>

<script>
import CommonGallaru from 'common/gallary/Gallaru'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailUsertell',
  props: {
    tell: Array,
    theImgs: Object,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false,
      currentImg: null
    }
  },
  methods: {
    onceBannerClick () {
      this.showGallary = true
    },
    onceGallaryClose () {
      this.showGallary = false
    },
    sendImg (imgs, index) {
      this.currentImg = {imgs, index}
    }
  },
  components: {
    CommonGallaru,
    Fade
  },
  mounted () {
    console.log(1, this.tell)
  }

}
</script>

<style lang="stylus" scoped>
 .mp-comment
   margin-top: .6rem
   border-color: #dadada
   z-index: 1;
 .mo-comment-title
   padding: 0 .6rem;
   height: 2.64rem;
   background: #fff;
   color: #333;
   font-size: .9rem;
   font-weight: bold
   line-height: 2.64rem;
   text-indent: .6rem;
   position: relative
   border-bottom: 1px solid #f0f0f0
 .mo-comment-title:after
   background: #1ba9ba
   position: absolute;
   top: .99rem;
   left: .6rem;
   width: .18rem;
   height: .75rem;
   content: " ";
   border-radius: .12rem
 .mp-comment-item
   padding: .3rem .6rem .9rem .6rem;
   position: relative;
   background: #fff
   border-bottom: 1px solid #f0f0f0
 .stardate
  margin-top: .3rem
  line-height 1rem
 .date
    position: relative;
    top: -.4rem;
    right: -15.8rem
    margin-left: .6rem;
    line-height: .80rem;
    font-size: .72rem;
    vertical-align: middle;
    color: #212121;
 .content
   height: 6.57rem
   overflow: hidden
   word-break: break-all;
   word-wrap: break-word;
   line-height: 1.26rem;
   font-size: .78rem;
   color: #616161;
 .mp-comment-foldbtn
   height: 1rem;
   line-height: 1rem;
   text-align: center;
   font-size: .78rem;
   color: #9e9e9e;
 .mp-comment-imgs
   margin: .6rem 0 .3rem 0;
   position: relative;
   zoom: 1;
   height: 11rem
   overflow: hidden;
 .mp-comment-imgouter
   float: left;
   width: 33.33%;
   margin-bottom: .3rem;
 .mp-comment-imginner
   margin-left: .21rem;
   margin-right: .21rem;
 .mp-comment-img
   width: 100%
   background-size: contain;
 .tag
   position: absolute;
   bottom: 3.8rem;
   right: .6rem;
 .bg
   position: absolute;
   right: .21rem;
   display: inline-block;
   background: #000;
   opacity: .5;
   height: 1.12rem;
   width: 2.82rem;
   border-top-left-radius: .6rem;
   border-bottom-left-radius: .6rem;
 .tagum
   position: absolute;
   right: .21rem;
   height: 1.2rem;
   width: 2.82rem;
   line-height: 1.2rem;
   font-size: .72rem;
   color: #fff;
   text-align: right;
   padding-right: .15rem;
</style>
