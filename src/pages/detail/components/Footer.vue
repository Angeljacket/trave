  <template>
  <div class="footer">
   <div class="fonts"><span class="iconfont">&#xe623;</span>票面价是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
   <div class="main_nav_wrapper">
     <ul class="main_nav" :class="{'taller':isChoose}">
       <li class="flight"><span class="iconfont">&#xe70e;</span><a href="#" class="title">机票</a></li>
       <li class="hotel"><span class="iconfont">&#xe62f;</span><a href="#" class="title">酒店</a></li>
       <li class="gongyu"><span class="iconfont">&#xe68f;</span><a href="#" class="title">公寓</a></li>
       <li class="tuan"><span class="iconfont">&#xe600;</span><a href="#" class="title">团购</a></li>
       <li class="train"><span class="iconfont">&#xe644;</span><a href="#" class="title">火车票</a></li>
       <li class="jingdian actived"><span class="iconfont">&#xe606;</span><a href="#" class="title">景点</a></li>
       <li class="zuche"><span class="iconfont">&#xe692;</span><a href="#" class="title">接送机</a></li>
       <li class="dujia"><span class="iconfont">&#xe616;</span><a href="#" class="title">度假</a></li>
       <li class="gonglue"><span class="iconfont">&#xe6dd;</span><a href="#" class="title">攻略</a></li>
       <li class="lvtu"><span class="iconfont">&#xe61c;</span><a href="#" class="title">旅图</a></li>
       <li class="cheche"><span class="iconfont">&#xe892;</span><a href="#" class="title">车车</a></li>
       <li class="dangdiren"><span class="iconfont">&#xe607;</span><a href="#" class="title">当地人</a></li>
       <li class="tag" :class="{'toggle':isChoose}" @click="toggle">
         <span v-if="isLo">V更多</span>
         <span v-else>↑收起</span>
       </li>
     </ul>
   </div>
    <ul class="footer_nav" id="qunarFooterBottom">
      <li><a href="//touch.qunar.com/h5/user/login">登录</a></li>
      <li><a href="//touch.qunar.com/h5/user/usercenter">我的订单</a></li>
      <li style="display: none;"><a href="//touch.qunar.com/h5/user/usercenter">个人中心</a></li>
      <li><a href="//touch.qunar.com/h5/recent">最近浏览</a></li>
      <li><a href="//touch.qunar.com/h5/about">关于我们</a></li>
    </ul>
    <ul class="mobile_pc">
      <li class="active"><a href="//touch.qunar.com/h5/">触屏版</a></li>
      <li><a href="http://www.qunar.com/index.htm?from=mobile&amp;qn163=1">电脑版</a></li>
    </ul>
    <div class="copyright">
      <span>Qunar 京ICP备05021087</span>
      <a class="qn_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  data () {
    return {
      isChoose: false,
      isLo: true
    }
  },
  methods: {
    toggle (index) {
      this.isChoose = !this.isChoose
      this.isLo = !this.isLo
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main_nav_wrapper>>> .main_nav .toggle
    top: 5.3rem
  .main_nav_wrapper>>>  .taller
    height: 6.3rem
  a
    text-decoration: none
  .footer
   background: #f3f3f3
   height: auto
   overflow: hidden
 .fonts
   height: 1.4rem
   font-size: .78rem
   margin-top: .37rem
   padding-left: .3rem
   padding: .14rem .1rem
   line-height: 1.4rem
   color: #616161
   background: #fff
  .fonts span
    font-size: .5rem
    margin-right: .2rem
    padding-left: .3rem
 .main_nav
   position: relative
   width: 17.5rem
   height: 1.25rem
   margin: 0 auto
   padding: 10px 10px 0 10px
   overflow:hidden
 .main_nav li
   font-size: 1rem;
   display: block;
   margin: 0
   padding-left: 5px
   height: 1.57rem
   width: 4rem
   float: left
   position: relative
   background:none
 .main_nav li .iconfont
   color: #cccccc
   float: left
 .main_nav li .title
   float: left;
   display: inline-block;
   color: #9e9e9e;
   margin: 0.03rem 0 0 0.05rem;
   border-bottom: 1px solid #acacac;
   font-size: 0.75rem;
  .main_nav  .tag
   top: 8px
   position: absolute;
   right: 0.5rem;
   background: #f3f3f3;
   font-size: 0.8rem;
   color: #9e9e9e;
   width: 5.25rem
  .main_nav  .tag span
    display: inline-block;
    border-left: 1px solid #acacac;
    padding-left: 1rem;
    margin-top: 0.37rem;
 .footer_nav
   width: 100%;
   height: 39px;
   border-bottom: 1px solid #cacaca;
 .footer_nav li
   float:left
   padding-left: 1.5rem
 .footer_nav li a
   position: relative;
   color: #25a4bb;
   font-size: 0.88rem;
   line-height: 2.2rem;
 .mobile_pc
    padding: 0.5rem 0 0 0;
    text-align: center;
 .mobile_pc li
   display: inline-block
   margin: 0 0.8rem
 .mobile_pc a
    font-size: 0.8rem
    color: #25a4bb
 .mobile_pc .active a
   color: black
 .copyright
   background: #f3f3f3
   color: #9e9e9e;
   text-align: center;
   font-size: 0.8rem;
   padding: 1rem;
 .copyright a
   color: #9e9e9e;
   height: 33px;
</style>
