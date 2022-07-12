import request from '@/utils/request'

// 轮播图
export const swiper=(limit)=>{
    return request({
       method:'GET',
       url:'home/swiper',
       params:{
          limit
       }
    })
}

// 租房小组
export const group=(limit)=>{
   return request({
      method:'GET',
      url:'home/groups',
      params:{
         limit
      }
   })
}

/**
 * 获取城市列表
 */
 export const city=()=>{
  return request({
   method:'GET',
   url:'area/city',
   params:{
     level:1
   }
  })
}