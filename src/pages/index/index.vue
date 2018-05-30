<template>
  <section>
    <swiper :indicator-dots="indicatorDots"
      :autoplay="autoplay" :interval="interval" :duration="duration" :circular="true">
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image"/>
        </swiper-item>
      </block>
    </swiper>

    <nav class="main-nav">
      <ul class="weui-flex">
        <li class="weui-flex__item" v-for="(nav, index) in navList" :key="index">
          <div class="placeholder">
            <div class="nav-pic"></div>
            <span class="nav-title">{{nav}}</span>
          </div>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        navList: ['家里', '户外', '逛街', '卧室', '泳池', '广场', '聚会', '车内', '厨房', '更多'],
        indicatorDots: true,
        autoplay: false,
        interval: 3000,
        duration: 1000
      }
    }
  }
</script>

<style lang="scss" scoped>
.slide-image {
  width: 100%;
}
 .main-nav {
   font-size: 26rpx;
   .weui-flex {
     width: 100%;
     flex-wrap: wrap;
   }
   .weui-flex__item {
     flex: 20%;
     margin-top: 40rpx;
   }
   .placeholder {
     text-align: center;
     .nav-pic {
      display: block;
       width: 54rpx;
       height: 54rpx;
       background-color: #ff9900;
       margin-left: auto;
       margin-right: auto;
       border-radius: 50%;
       margin-bottom: 20rpx;
     }
   }
 }
</style>

