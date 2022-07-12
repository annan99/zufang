<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id"
        ><van-image :src="'http://liufusong.top:8080/'+item.imgSrc"
      /></van-swipe-item>
     
    </van-swipe>
    
    <div class="search">
      <div class="address" @click="$router.push('/address')">
        <span>深圳</span>
        <template>
          <van-icon name="play-o" size="20" color="black"/>
        </template>
      </div>
      <van-search v-model="search" placeholder="请输入小区或地址" />
    </div>
    <van-icon name="location-o" class="icon" @click="$router.push('/map')"/>
    <!-- 出租方式 -->
    <van-grid clickable :column-num="4" class="home-grid">
      <van-grid-item icon="home-o" text="整租" to="/search" />
      <van-grid-item icon="friends-o" text="合租" to="/search" />
      <van-grid-item icon="location-o" text="地图找房" to="/map" />
      <van-grid-item icon="wap-home-o" text="去出租" to="/rent" />
    </van-grid>
    
    <!--租房小组  -->
    <div style="background-color:#f5f6f5;padding: 0 0 10px 0;">
      <div class="box">
       <span>租房小组</span>
       <a href="">更多</a>
      </div>
     
      <div class="father-div">
        <div class="home-div" v-for="item in groupList" :key="item.id">
          <img :src="item.imgSrc" alt="">
          <div class="home-p">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
          </div>
        </div>
       
      </div>
    </div>

  </div>
</template>

<script>
import { swiper,group } from "@/api/home";
export default {
  created() {
    this.getswiper();
    this.getgroup();
  },
  data() {
    return {
      swiperList: [],
      value: "",
      groupList:[],
      search:''
    };
  },
  methods: {
    async getswiper() {
      try {
        const res = await swiper(3);
        this.swiperList = res.data.body;
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    async getgroup(){
      try{
        const res=await group(4)
        // console.log(res);
        this.groupList=res.data.body
      }catch(err){
        console.log(err);
      }
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  height: 212px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.search {
  // position: fixed;
  // top: 15px;
  // left: 10px;
  // width: 320px;
  // border-radius: 3px;
  // background-color: red;
  
  position: fixed;
  top: 15px;
  left: 15px;
  width: 320px;
  height: 34px;
  background-color: #fff;
  padding: 5px 5px 5px 8px;
  box-sizing: border-box;
  align-items: center;
  .address{
    width: 60px;
    height: 20px;
    font-size: 14px;
    color: #333;
    border-right: 1px solid #eee;
    // background-color: red;
    .van-icon{
      // width: 12px;
      // height: 12px;
      // background-color: red;
      width: 0;
      height:0;
      // background-color: #fff;
      border: 4px solid black;
      border-top-color:black;
      border-bottom-color: #fff;
      border-left-color: #fff;
      border-right-color: #fff;
      margin: 2px;
      
    }
  }
  .van-search{
    float: right;
    width: 250px;
    height: 34px;
    position: absolute;
    top: 0;
    right: 0;
    
  }
}
.icon {
  position: fixed;
  top: 20px;
  right: 10px;
  width: 25px;
  height: 25px;
  color: #fff;
}
.home-grid {
  height: 122px;
}
/deep/ .box{
  width:345px;
  height: 54px;
  line-height: 54px;
  background-color: #f5f6f5;
  margin: 0 10px;
  // padding: 15px 0 15px 10px;
  span{
    font-size: 15px;
    color:#333;
    font-weight: 600;
  }
  a{
    font-size: 14px;
    color:#787d82;
    float: right;
  }
}
.father-div{
  display: flex;
  flex-wrap:wrap;
  // justify-content: space-around;
  padding: 0 10px;
}
.home-div{
  
  width: 172px;
  height: 50px;
  // background-color: pink;
  padding-bottom: 10px;
  &:nth-child(2n-1){
    margin-right: 10px;
  }
  &:nth-child(1){
    margin-bottom: 10px;
  }
   &:nth-child(2){
    margin-bottom: 10px;
  }
  img{
    float: left;
    width: 50px;
    height: 50px;
    // background-color: blue;
  }
  .home-p{
    float: left;
    font-size: 14px;
    padding-top: 10px;
    p{
      margin: 0;
    }
  }
}
</style>
