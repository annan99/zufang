<template>
    <div>
     <!-- <div class="box">
        <van-icon name="arrow-left" class="left" @click="$router.go(-1)"/>
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
     </div> -->
    <div class="top">
      <van-icon name="arrow-left" />
      <van-button type="default" size="large">大号按钮</van-button>
    </div>
   <!-- 筛选区域 -->
    <van-sticky>
 <van-dropdown-menu>
  <van-dropdown-item title="区域">
    <van-picker title="标题" :columns="columns" value-key="label" />
    <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
  </van-dropdown-item>
   <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
         <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
         <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
</van-dropdown-menu>
   </van-sticky>
       <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>
   <!-- 房屋信息 -->
    <!-- <HouseList></HouseList> -->
    </div>
</template>

<script>

// import HouseList from "./components/HouseList.vue";
    export default {
    data() {
        return {
           flag: false,
           columns: [

      ],
      columns1: [

      ], columns2: [
        {
          text: '浙江',

        },
        {
          text: '福建',

        },
      ],
        };
    },
    methods:{
       search(){

       }
    },
    // components: { HouseList}
}
</script>

<style lang="less" scoped>
.box{
  position: fixed;
    width: 100%;
    height: 50px;
    top: 0;
    background-color: #1CB676;
    z-index: 9999;
    .left{
        top: 15px;
        left: 15px;
        color:#fff;
      
    }
}
/deep/ .search {
  position: fixed;
  top: 10px;
  right: 20px;
  width: 275px;
  height: 34px;
  background-color: #fff;
  padding: 5px 5px 5px 8px;
  box-sizing: border-box;
  align-items: center;
  margin: 0 30px 9px 40px !important;
  .address{
    width: 60px;
    height: 20px;
    font-size: 14px;
    color: #333;
    border-right: 1px solid #eee;
    .van-icon{
      width: 0;
      height:0;
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
    width: 200px;
    height: 34px;
    position: absolute;
    top: 0;
    right: 0;
    
  }
}
.icon {
  position: fixed;
  top: 15px;
  right: 10px;
  width: 25px;
  height: 25px;
  color: #fff;
}
.dropdown{
  margin-top: 50px;
}
.van-row{

  height: 40px;

  margin-top: 50px;
}
.van-col{
  font-size: 17px;
  color: #333;
  text-align: center;
  line-height: 40px;
}
.van-nav-bar {
  background-color: #21b97a;
}
/deep/ .van-nav-bar__text {
  color: #fff;
}
/deep/ .van-nav-bar .van-icon {
  color: #fff;
}
 .van-button{
  position: fixed;
  left: 15px;

  //  width: 90%;
   height: 40px;
   margin: 5px 30px;
   box-sizing: border-box;
}
.top{
  width: 100%;
  height: 50px;
  background-color: #21b97a;
}
.van-icon{
  margin: 13px 10px;
  color: #fff;
}
</style>