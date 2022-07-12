<template>
  <div style="position: relative">
    <img src="../../assets/avatar.png" alt="" />
    <!-- 已登录 -->
    <div class="my-wode" v-if="user">
      <van-image
        round
        width="10rem"
        height="10rem"
        class="my-img"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <p>黑马</p>
      <div class="my-btn">
        <van-button
          size="mini"
          type="primary"
          round
          @click="logout"
      
          >退出</van-button
        >
      </div>
      <div class="my-user">
        <span>编辑个人资料</span>
        <template>
          <van-icon name="play" size="10" />
        </template>
      </div>
    </div>

    <!-- 未登录 -->
    <div class="my-wode" v-else>
      <van-image
        round
        width="10rem"
        height="10rem"
        class="my-img"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <p>游客</p>
      <div class="my-btn">
        <van-button
          size="mini"
          type="primary"
          round
          @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
    </div>

    <!-- 六个模块 -->
    <van-grid :column-num="3" class="my-gird">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="coupon-o" text="成为房主" />
      <van-grid-item icon="user-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
  </div>
</template>

<!-- $store.state.user  $store.state.user.token -->
<script>
import {mapState} from 'vuex'
import { getUserInfo } from "@/api/my"
export default {
  async created() {
    if(this.user){
     try{
        const res=await getUserInfo()
        console.log(res);
       }catch(err){
        console.log(err);
       }
    }
     
  },
  data() {
    return {
      // userInfo: "",
    };
  },
  methods: {
  
    // async getUserInfo(){
    //    try{
    //     const res=await getUserInfo()
    //     console.log(res);
    //    }catch(err){
    //     console.log(err);
    //    }
    // },
    async logout() {

      try {
        await this.$dialog.confirm({ message: "确认退出吗" });
        this.$store.commit("setUser", null);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {},
};
</script>

<style scoped lang="less">
img {
  width: 375px;
  height: 375px;
}
.my-wode {
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  position: absolute;
  top: 168px;
  width: 318px;
  height: 208px;
  margin: 0 28px;
  /deep/ .my-img {
    width: 60px !important;
    height: 60px !important;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    text-align: center;
    font-size: 13px;
    color: #333;
    margin: -20px 0 10px;
  }
  /deep/ .my-btn {
    font-size: 12px;
    color: #fff;
    border-radius: 30px;
    text-align: center;
    padding: 2px 15px !important;
  }
  .my-user {
    font-size: 12px;
    color: #999;
    margin-top: 20px;
    text-align: center;
  }
}
.my-gird {
  margin: 15px 0;
}
</style>
