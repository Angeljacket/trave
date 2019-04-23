<template>
  <div class="mp-baseinfo">
    <div class="mpg-felxbox">
      <a href="https://touch.piao.qunar.com/touch/getCommentsAndTravelTips.htm?sightId=4281924223&amp;pageSize=10&amp;pageNum=1&amp;fromType=SIGHT" class="mp-card-link"></a>
      <div style="display: block; width: 11.9rem; position: relative">
        <span class="mp-commentcard-score">{{this.pingFen}}</span>
        <span class="mp-commentcard-text">{{this.danWei}}</span>
        <span class="mp-commentcard-desc">{{this.zan}}</span>
        <br>
        <span class="mp-totalcommentnum">{{this.pingLun}}</span>
        <span class="mp-totalcommentnum">{{this.gongLue}}</span>
        <span class="iconfont mp-rightarrow">&#xe62a;</span>
      </div>
        <div class="mpg">
          <div>
            <span class="mp-sightcard-title">景点简介</span>
          </div>
          <div><span class="mp-sightcard-text">开放时间、贴士</span>
            <span class="iconfont mp-leftarrow">&#xe62a;</span>
        </div>
      </div>
    </div>
    <div class="mp-baseinfo-address">
      <p class="mp-baseinfo-address-txt">
        <span class="iconfont mp-baseinfo-address-icon">&#xe611;</span>
        {{this.diZhi}}
        <span class="iconfont mp-baseinfo-address-arrow">&#xe62a;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBasinfo',
  props: {
    pingFen: String,
    danWei: String,
    zan: String,
    pingLun: String,
    gongLue: String,
    diZhi: String
  }
}
</script>

<style lang="stylus" scoped>
  .mp-baseinfo
    width: 100%
    height: auto
    position: relative;
    top: -.3rem
    padding: .3rem .6rem 0 .6rem
    margin-bottom: .3rem
    background: #fff
    border-radius: .3rem .3rem 0 0;
  .mpg-felxbox
    display: flex
    width: 100%
    padding-top: .3rem;
    padding-bottom: .6rem;
    position: relative
  .mp-card-link
   position: absolute
   left: 0
   top: 0
   width 100%
   height 100%
  .mp-commentcard-score
    font-size: 1.32rem;
    color: #ff8300;
    line-height: 1.32rem;
    margin-right: -.3rem
  .mp-commentcard-text
    font-size: .84rem;
    color: #ff8300;
    line-height: 1.44rem;
  .mp-commentcard-desc
    font-size: .84rem;
    color: #ff8300;
    line-height: 1.44rem;
    margin-left: .4rem;
  .mp-totalcommentnum
    font-size: .72rem;
    color: #9e9e9e;
    line-height: .96rem;
    margin-right: .4rem;
  .mp-rightarrow
    position: absolute;
    top: .9rem;
    right: .6rem;
    color: #9e9e9e;
    font-size: 1rem;
    font-weight bold
  .mpg
    border-left: 1px solid #e0e0e0;
  .mp-sightcard-title
    font-size: .9rem;
    color: #212121;
    line-height: 1.4rem;
    padding-left: .9rem;
  .mp-sightcard-text
    color: #9e9e9e;
    font-size: .72rem;
    padding-left: .9rem;
    text-align: center
  .mp-leftarrow
     position: absolute;
     top: 1rem;
     right: 1.4rem;
     color: #9e9e9e;
     font-size: 1rem
     font-weight: bolder
  .mp-baseinfo-address
    margin-top: .3rem
    display: block;
    position: relative;
    padding: .6rem 0;
    line-height: 1.08rem;
    color: #212121;
    border-top: 1px solid #f0f0ef;
  .mp-baseinfo-address-icon
    display: block;
    height: 100%;
    line-height: 100%;
    position: absolute;
    left: 0;
    top: .48rem;
    margin-top: -.48rem;
    margin-right: .6rem;
    color: #9e9e9e;
    font-size: 1rem;
  .mp-baseinfo-address-arrow
    position: absolute;
    top: 50%;
    right: 1.5rem
    margin-top: -.42rem;
    color: #9e9e9e;
    font-size: 1rem
    font-weight: bolder
  .mp-baseinfo-address-txt
    font-family: Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    height: auto
    padding-right: 1.68rem;
    position: relative;
    padding-left: 1.68rem;
    font-size: .87rem
</style>
