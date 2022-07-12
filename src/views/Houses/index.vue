<template>
<!-- 头部区域 -->
    <div>
    <div v-for="item in HousesList" :key="item.id">
<van-nav-bar
  title="item.community"
  left-arrow
  @click-left="$router.back()"
/>
<div class="main">
<!-- 轮播图 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
</van-swipe>

<!-- 第三部分 -->
<div class="title-two">
    <h3>{{item.title}}</h3>
    <van-tag type="primary" size="large" color="#e1f5f8">{{item.tags}}</van-tag>
    <div class="house-news">
        <van-row>
  <van-col span="8"><i><strong>{{item.price}}</strong>/月</i><p>租金</p></van-col>
  <van-col span="8"><i><strong>{{item.roomType}}</strong>+</i><p>房型</p></van-col>
  <van-col span="8"><i><strong>{{item.size}}</strong>平米</i><p>面积</p></van-col>
       </van-row>
    </div>

    <van-row class="house-type">
  <van-col span="12"><span>装修：<i>精装</i></span></van-col>
  <van-col span="12"><span>朝向：<i>{{item.oriented}}</i></span></van-col>
  <van-col span="12"><span>楼层：<i>{{item.floor}}</i></span></van-col>
  <van-col span="12"><span>类型：<i>普通住宅</i></span></van-col>
</van-row>
</div>

<!-- 小区：天山星城 -->
<div class="xiaoqu">小区：天山星城</div>
<van-image
  width="375px"
  height="145px"
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<!-- 房屋配套 -->
<div class="house-peizhi">
    <div class="house-matching">房屋配套</div>
    <span class="icon">
        <van-icon name="fire-o" size="25"/>
        <p>洗衣机</p></span>
 
</div>
<!-- 房源概括 -->
<div class="gaikuo">
    <div class="gaikuo-top">房源概括</div>
    <div class="gaikuo-user">
      <img src="" alt="" class="gaikuo-img">
      <div class="gaikuo-renzheng">
        <p>王女士</p>
        <van-icon name="user-circle-o" size="16"/><span>已认证房主</span>
      </div>
    </div>
    <div class="gaikuo-jieshao">
       {{item.description}}
    </div>
</div>


</div>
<!-- 底部 -->
<div class="footer">
  <div class="footer-one" style="border-right: 1px soild #999 !important;"><van-icon name="star-o" />收藏</div>
  <div class="footer-two">在线咨询</div>
  <div class="footer-three">电话预约</div>
</div>
</div>
    </div>
</template>

<script>
import { getHouseNews } from '@/api/search'
    export default {
      created(){
        this.getHouseNews()
      },
        data(){
            return{
              HousesList:'',
            }
        },
        methods:{
          async getHouseNews(){
            const id=this.$route.query.id
             try{
               const res=await getHouseNews(id)
               console.log(res);
               this.HousesList=res.data.body
             }catch(err){
              console.log(err);
             }
          }
        }
    }
</script>

<style lang="less" scoped>
.main{
    margin-bottom: 60px;
}
// 轮播图
 .my-swipe .van-swipe-item {
    width: 375px;
    height: 252px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
//   豪宅介绍
  .title-two{
    width: 375px;
    height: 266px;
    padding: 15px;
    box-sizing: border-box;
    // background-color: pink;
    
    h3{
        font-size: 16px;
        color: #333;
    }
    .van-tag{
            top: -5px;
            margin: 0 5px 0 0;
            color: #39BECD;
            height: 20px;
        }
    .house-news{
      width: 345px;
      height: 84px;
      padding: 15px 0;
      margin: 15px 0;
      box-sizing: border-box;
      text-align: center;
    //   border: 2px soild #999 !important;
      i{
        font-size: 12px;
        strong{
            font-size: 18px;
            font-style: normal;
        }
      }
      p{
        font-size: 14px;
        line-height: 0;
        color: #999;
      }
    }
    .house-type{
      font-size: 13px;
      color: #999;
      .van-col{
        padding: 0 5px 0 0;
        i{
            color: #333;
            font-style: normal;
        }
      }
    }
  }

//   底部
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    font-size: 17px;
    background-color: #fff;
    line-height: 50px;
    
    border-top: 1px solid #999;
    .footer-one{
      width: 120px;
      height: 50px;
      float: left;
      color:#999;
      border-right: 1px solid #999 !important;
    }
    .footer-two{
      width: 120px;
      height: 50px;
      float: left;
      color:#999;
      margin-left: 7px;
    }
    .footer-three{
       float:right;
       width: 120px;
       height: 50px;
       color:#fff;
       background-color: #1CB676;
    }
}
.xiaoqu{
    width: 353px;
    height: 44px;
    margin: 0 11px;
    color: #666;
    font-size: 14px;
    line-height: 44px;
    // background-color: pink;
}
.house-peizhi{
    height: 128px;
    margin: 0 10px 10px 10px;
    // background-color: pink;
}
.house-matching{
    width: 355px;
    font-size: 15px;
    font-weight: 600;
    color: #333;
    margin: 0 0 10px 0;
    padding: 15px 0;
    border-bottom: 1px solid #999;
}
.icon{
    width: 71px;
    margin-left: 10px;
    font-size: 14px;
}
.gaikuo{
    width: 355px;
    height: 266px;
    margin: 10px 0;
    padding: 0 10px;
    background-color: pink;
    .gaikuo-top{
       font-size: 15px;
       font-weight: 600;
       color: #333;
       padding: 15px 0;
       margin-bottom: 10px;
    }
    .gaikuo-user{
        height: 62px;
        margin-bottom: 10px;
    }
    .gaikuo-jieshao{
        font-size: 14px;
        height: 112px;
        padding: 10px 0;
    }
    .gaikuo-img{
        float: left;
        width: 52px;
        height: 52px;
        // background-color: #333;
        margin: 10px 10px 0 0;
    }
    .gaikuo-renzheng{
        float: left;
        width: 81px;
        height: 47px;
        padding: 15px 0 0 5px;
        p{
            font-size: 14px;
            color: #333;
            line-height: 0;
            margin: 8px 0;
        }
        span{
            font-size: 12px;
            color: #fa5741;
            bottom: 0;
        }
    }

}
</style>