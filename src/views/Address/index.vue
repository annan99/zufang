<template>
    <div>
    <van-nav-bar
  title="城市列表"
  left-arrow
/>

<van-index-bar class="address-bar">
  <van-index-anchor index="A" />
  <van-cell title="wenben"  />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  
</van-index-bar>
    </div>
</template>

<script>
import {city} from "@/api/home"
    export default {
        created(){
           this.getCity()
        },
        data(){
            return{
               cityList:[],
            }
        },
        methods:{
            async getCity(){
              try{
                const res=await city()
                console.log(res);
                this.cityList=res.data.body
              }catch(err){
                console.log(err);
              }
            }
        }
    }
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar{
  position: fixed;
  width: 100%;
  z-index: 9999;
  margin-bottom: 46px !important;
}
.address-bar{
  margin-top: 46px;
}
</style>