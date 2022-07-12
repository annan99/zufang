import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home=()=>import('@/views/Home')
const News=()=>import('@/views/News')
const My=()=>import('@/views/My')
const Search=()=>import('@/views/Search')
const Login=()=>import('@/views/Login')
const Address=()=>import('@/views/Address')
const Map=()=>import('@/views/Map')
const Houses=()=>import('@/views/Houses')
const Rent=()=>import('@/views/Rent')
Vue.use(VueRouter)

const routes = [
   {path:'/',component:Layout,redirect:'/home',children:[
    {path:'home',component:Home},
    {path:'news',component:News},
    {path:'my',component:My,name:'my'},
    {path:'search',component:Search}
   ]},
   {path:'/login',component:Login},
   {path:'/address',component:Address},
   {path:'/map',component:Map},
   {path:'/houses/{id}',component:Houses,name:'houses',props:true},
   {path:'/rent',component:Rent},
]


const router = new VueRouter({
  routes
})

export default router
