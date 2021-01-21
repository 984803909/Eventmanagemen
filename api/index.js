import {Post} from './ajax.js'
let url="http://admin.scms.sports51.com/api/routepost"
const  reqLogin =()=>Post(url+'/collect',{pubmuiltnames:"infoshow.systemlist",infoshow_systemlist:{}})//获取列表
const  reqInitial=()=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.base",infoshow_system_base:{"paramval1":330100}}) //首页初始化
const reqSwiper=(looparr)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.picloop",infoshow_system_picloop:{"aicallparam1":0,"aicallparam2":5}}) //轮播图
const reqaRist=(ristarr)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.article",infoshow_system_article:ristarr}) 
const reqCont=(ristarr)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.base,infoshow.system.article",infoshow_system_base:{"paramval1":330100},infoshow_system_article:ristarr})
module.exports={reqLogin,reqInitial,reqSwiper,reqaRist,reqCont}