<template>
    <div>
     <van-nav-bar title="发布房源" left-arrow fixed  @click-left="$router.go(-1)"/>
     <div class="main">
     <div class="small-title">房源信息</div>
       <div class="small-value">
        <div class="left">小区名称</div>
        <input type="text" placeholder="请输入小区名称">
        <van-icon name="arrow" size="15" color="#888"/>
       </div>

        <div class="small-value">
          <div class="lefttwo">租金</div>
          <input class="ipt" type="text" placeholder="请输入租金">
          <span>￥/月</span>
        </div>
        <div class="small-value">
          <div class="lefttwo">建筑面积</div>
          <input class="ipt" type="text" placeholder="请输入建筑面积">
          <span>㎡</span>
        </div>

        <div class="small-value">
        <div class="left">户型</div>
        <input type="text" placeholder="请选择">
        <van-icon name="arrow" size="15" color="#888"/>
       </div>
        <div class="small-value">
        <div class="left">所在楼层</div>
        <input type="text" placeholder="请选择">
        <van-icon name="arrow" size="15" color="#888"/>
       </div>
        <div class="small-value">
        <div class="left">朝向</div>
        <input type="text" placeholder="请选择">
        <van-icon name="arrow" size="15" color="#888"/>
       </div>
     <div class="small-title">房屋标题</div>
     <input class="imp" type="text" placeholder="请输入标题（例如：整租 小区名 两室 5000元）">

     <div class="small-title">房屋图像</div>
     <van-uploader :after-read="afterRead" />

     <div class="small-title">房屋配置</div>
     <van-grid :column-num="5">
       <van-grid-item icon="fire-o" text="衣柜" />
       <van-grid-item icon="fire-o" text="洗衣机" />
       <van-grid-item icon="fire-o" text="空调" />
       <van-grid-item icon="fire-o" text="天然气" />
       <van-grid-item icon="fire-o" text="冰箱" />
       <van-grid-item icon="fire-o" text="暖气" />
       <van-grid-item icon="fire-o" text="电视" />
       <van-grid-item icon="fire-o" text="热水器" />
       <van-grid-item icon="fire-o" text="宽带" />
       <van-grid-item icon="fire-o" text="沙发" />
     </van-grid>

     <div class="small-title">房屋描述</div>
     <textarea rows="10" cols="52" placeholder="请输入房屋描述信息"></textarea>
     </div>
     <div class="footer">
       <van-button type="default">取消</van-button>
       <van-button type="primary" class="btn">确认</van-button>
     </div>
     
    </div>
</template>

<script>
    export default {
        data(){
            return{
               
            }
        },
         methods: {
           afterRead(file) {
            // 此时可以自行将文件上传至服务器
           console.log(file);
    },
  },
    }
</script>

<style lang="less" scoped>
.main{
    margin: 46px 0 45px 0;
}
.small-title{
    width: 100vw;
    height: 41px;
    font-size: 15px;
    color: #21b97a;
    padding: 15px 15px 9px;
    box-sizing: border-box;
}
.small-value{
    width: 360px;
    height: 44px;

    padding: 0 15px 0 0;
    margin-left: 15px;
    overflow: hidden;
    .left{
        float: left;
        width: 198px;
        height: 44px;
        font-size: 14px;
        color: #666;
        padding: 7px 0;
        line-height: 44px;
        box-sizing: border-box;
    }
    input{
        font-size: 14px;
        color: #888;
        float: left;
        width: 120px;
        height: 20px;
        margin-top: 9px;
        border:none;
    }
    .van-icon{
        margin: 12px 0 0 8px;

    }
}
.lefttwo{
    float: left;
    width: 85px;
    height: 20px;
    font-size: 14px;
    color: #666;
    // line-height: 44px;
    margin-top: 12px;
    
}
/deep/ .ipt{
    float: left;
    width: 216px;
    height: 20px;
}
span{
    float: right;
    font-size: 14px;
    color: #888;
    margin-right: 15px;
    margin-top: 10px;
}
.imp{
    width: 360px;
    height: 44px;
    margin-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    color: #888;
    box-sizing: border-box;
    border: none;

}
.van-uploader{
    width: 375px;
    height: 94px;
}
textarea{
    margin: 0 15px;
    color: #888;
    font-size: 12px;
}
.van-button{
    width: 183px;
    height: 45px;
    border: none;
}
.btn{
    float: right;
}
/deep/ .footer{
    position: fixed !important;
    bottom: 0 !important;
}
</style>