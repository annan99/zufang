import request from '@/utils/request'

/**
 * 找房页面的房屋列表
 * @returns 
 */
export const getHouses=()=>{
    return request({
        url:'houses',
        params:{
            cityId:'AREA|88cff55c-aaa4-e2e0',
            area:'AREA|88cff55c-aaa4-e2e0',
            subway:'',
            rentType:'true',
            price:'null',
            more:'CHAR|76eb0532-8099-d1f4,FLOOR|1,AREA|88cff55c-aaa4-e2e0,ORIEN|61e99445-e95e-7f37,true',
            roomType:'ROOM|d1a00384-5801-d5cd',
            oriented:'ORIEN|61e99445-e95e-7f37',
            characteristic:'ORIEN|76eb0532-8099-d1f4',
            floor:'FLOOR|1',
            start:1,
            end:20,
        }
    })
}


/**
 * 房子的具体信息
 * @param {*} id 
 * @returns 
 */
export const getHouseNews=(id)=>{
    return request({
         method:'GET',
         url:`houses/${id}`,
         params:{
            id:''
         }
    })
}