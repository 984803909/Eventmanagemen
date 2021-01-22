import {Post} from './ajax.js'
let url="http://admin.scms.sports51.com/api/routepost"
const  reqLogin =()=>Post(url+'/collect',{pubmuiltnames:"infoshow.systemlist",infoshow_systemlist:{}})//获取列表
const  reqInitial=()=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.base",infoshow_system_base:{"paramval1":50972132}}) //首页初始化
const reqSwiper=(data1,data2)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.picloop","infoshow_system_picloop":{"paramval1":data1,"paramval2":data2}}) //轮播图
const reqaRist=(ristarr)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.article",infoshow_system_article:ristarr})
const reqAtchont=(id)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.articleview",infoshow_system_articleview:id})
const reqCont=(ristarr,id)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.base,infoshow.system.article",infoshow_system_base:{"paramval1":id},infoshow_system_article:ristarr})
const reqAtUrl=(urlid)=>Post(url+"/collect",{pubmuiltnames:"infoshow.urlcode",infoshow_urlcode:{"paramval1":urlid}})//外面穿进来的页面
module.exports={reqLogin,reqInitial,reqSwiper,reqaRist,reqCont,reqAtchont,reqAtUrl}