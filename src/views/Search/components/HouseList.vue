<template>
    <div class="big">
        <!--  @click="$router.push({name:'houses',id:})" -->
<div class="house" v-for="item in housesList" :key="item.id" @click="$router.push({name:'houses',query:{id:item.houseCode}})">
    <img :src="item.houseImg" alt="">
    <div class="right">
       <h3 class="van-ellipsis">{{item.title}}</h3>
       <p class="one-p">{{item.desc}}</p>
       <van-tag type="primary" size="large" color="#e1f5f8">{{item.tags}}</van-tag>
       <p class="two-p"><strong>{{item.price}}</strong>元/月</p>
    </div>
</div>


    </div>
</template>

<script>
import {getHouses} from '@/api/search'
    export default {
        created(){
           this.getHouses()
        },
        data(){
            return{
               housesList:[],
               
            }
        },
        methods:{
            async getHouses(){
               try{
                const res=await getHouses()
                // console.log(res);
                this.housesList=res.data.body.list
               }catch(err){
                console.log(err);
               }
            },
           
        }
    }
</script>

<style lang="less" scoped>
.big{
    margin-bottom: 50px;
    // margin-top: 90px;
}
.house{
    width: 345px;
    height: 105px;
    background-color: #fff;
    margin: 0 15px;
    padding-top: 18px;
    /deep/ img{
     width: 106px;
     height: 80px;
     background-color: #eee;
}
    .right{
        float: right;
        width: 239px;
        height: 90px;
        // padding-left: 12px;
        background-color: #fff;
        h3{
            font-size: 15px;
            margin: 0;
            color: #394043;
        }
        .one-p{
            font-size: 12px;
            margin: 0;
            color:#AFB2B3
        }
        .van-tag{
            margin: 0 5px 0 0;
            color: #39BECD;
            height: 20px;
        }
        .two-p{
            font-size: 12px;
            color: red;
            line-height: 0;
            strong{
                font-size: 16px;
            }
        }
    }
}

</style>