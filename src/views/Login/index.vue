<template>
   <div>
    <van-nav-bar title="账号登录" left-arrow />
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    placeholder="请输入账号"
    :rules="[{ required: true},{pattern,message:'账号格式不对'}]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    placeholder="请输入密码"
    :rules="[{ required: true},{pattern,message:'密码格式不对'}]"
  />
   <div style="margin: 18px 5px">
        <van-button class="btn" block type="info" native-type="submit"
          >提&nbsp;&nbsp;&nbsp;交</van-button
        >
      </div>
</van-form>
    <a href="javascript:;">还没有账号，去注册~</a>
  </div> 
</template>

<script>
import {login} from '@/api/user'
export default {
  created(){
   
  },
  data() {
    return {
      username: 'xan123456',
      password: 'xuannan123456',
      pattern:/^[a-zA-Z0-9]{5,16}$/,
    };
  },
  methods: {
    async onSubmit() {
      // console.log('submit', values);
       try{
         const res=await login({username:this.username,password:this.password})
         console.log(res);
         this.$store.commit('setUser',res.data.body)
         this.$toast.success('登陆成功')
         this.$router.push('/my')
       }catch(err){
        console.log(err);
         this.$toast.fail('登陆失败，请稍后重试')
       }
      
    },
 

  },
};
</script>

<style lang="less" scoped>
.btn {
  width: 100%;
  height: 50px;
  line-height: 50;
  color: #fff;
  border: 1px solid #1cb676;
  border-radius: 2px;

  background-color: #1cb676;
}
.login-field {
  height: 60px;
  width: 100%;
  padding: 2px 0;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  color: #000;
  font-size: 17px;
  margin-bottom: 9px;
  background-color: transparent;
}
// .login-form {
//   margin: 21px 15px;
// }
a {
  color: #666;
  font-size: 14px;
  margin-left: 120px;
}
</style>
