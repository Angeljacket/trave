<template>
<div class="mp-container">
  <h3 class="mp-title">
    看了该景点的人还看了
  </h3>
  <div class="mp-list" v-for="(item, index) of look" :key="index">
    <a href="//touch.piao.qunar.com/touch/detail.htm?id=2637958213&amp;cat=from_area%3Das_recommend_sight" mp-role="sightLink">
      <div class="mp-recommend-item">
        <img class="mp-recommend-img" :src="item.lookImgs" />
        <div class="mp-recommend-info mp-border-bottom"><div class="mp-recommend-sight">{{item.lookTitle}}<span class="mp-recomment-sightstar">{{item.lookSig}}</span></div>
          <div class="mp-recommend-price mp-price">¥<em class="mp-price-num">{{item.lookPrice}}</em><span class="mp-recommend-flag">起</span></div>
          <div class="mp-recommend-comment">
            <span class="mp-recommend-commentnum">{{item.lookPinglun}}</span>
          </div>
          <div class="mp-recommend-position">
      <span class="mp-recommend-subposition mp-border-left">{{item.lookWhere}}</span>
    </div>
    </div>
    </div></a>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  props: {
    look: Array
  }
}
</script>

<style lang="stylus" scoped>
  .mp-container
    margin-top: .6rem
    position: relative
  .mp-container::before
    border-color: #dadada
    z-index: 2
  .mp-title
    padding: 0 .6rem;
    height: 2.64rem;
    background: #fff;
    color: #333;
    font-size: .9rem;
    line-height: 2.64rem;
    text-indent: .6rem;
  .mp-title::before
    border-color: #dadada;
  .mp-title::after
    content: " ";
    position: absolute;
    top: .99rem;
    left: .6rem;
    width: .18rem;
    height: .75rem;
    background: #1ba9ba;
    border-radius: .12rem;
  .mp-list
    overflow: hidden;
    background: #fff;
  .mp-recommend-img
    margin: .6rem .6rem 0 .6rem;
    width: 4.86rem;
    height: 4.86rem;
    float: left;
  .mp-recommend-info
    position: relative;
    padding-top: .2rem;
    margin-left: 6rem;
    height: 1.8rem;
  .mp-recommend-sight
    position: absolute;
    top: .6rem;
    left: 0;
    right: 4.5rem;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .9rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .mp-recomment-sightstar
    color: #adadad;
  .mp-recommend-price
    position: absolute;
    right: .6rem;
    top: .6rem;
    line-height: 1.2rem;
    vertical-align: baseline;
    color: #ff9800;
  .mp-recommend-comment
    position: absolute;
    top: 1rem;
    left: 0;
  .mp-recommend-commentnum
    margin-left: 5rem;
    line-height: 4.6rem;
    font-size: .72rem;
    vertical-align: middle;
    color: #9e9e9e;
  .mp-recommend-position
    position: absolute;
    bottom: -3rem;
    left: 0;
    color: #9e9e9e;
    font-size: .72rem;
  .mp-recommend-item
    position: relative
  .mp-recommend-subposition
    bottom 0
    color: #9e9e9e;
    font-size: .24rem;
  .mp-price
    font-size: .8rem
  .mp-price-num
    font-size: 1.2rem
  .mp-recommend-flag
    color: #9e9e9e
</style>
