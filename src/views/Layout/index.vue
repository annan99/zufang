<template>
  <div>
<router-view />

<van-tabbar route active-color="#21B97A" inactive-color="#888">
  <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">找房</van-tabbar-item>
   <van-tabbar-item replace to="/news" icon="newspaper-o">资讯</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="manager-o">{{user ? '我的' : '未登录'}}</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
             active: 0,
        }
    },
    computed:{
       ...mapState(['user'])
    }
};
</script>

<style lang="less" scoped></style>
