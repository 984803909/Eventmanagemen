import {Post} from './ajax.js'
let url="http://admin.scms.sports51.com/api/routepost"
const  reqLogin =()=>Post(url+'/collect',{pubmuiltnames:"infoshow.systemlist",infoshow_systemlist:{}})//获取列表
const  reqInitial=()=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.base",infoshow_system_base:{"paramval1":50972132}}) //首页初始化
const reqSwiper=(data1,data2)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.picloop","infoshow_system_picloop":{"paramval1":data1,"paramval2":data2}}) //轮播图
const reqaRist=(ristarr)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.article",infoshow_system_article:ristarr})
const reqAtchont=(id)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.articleview",infoshow_system_articleview:id})
const reqCont=(ristarr,id,loopdata,movedata,imgsdata)=>Post(url+"/collect",
{pubmuiltnames:"infoshow.system.base,infoshow.system.article,infoshow.system.picloop,infoshow.system.video,infoshow.system.photocatalog",
infoshow_system_base:{"paramval1":id},
infoshow_system_article:ristarr,
infoshow_system_picloop:loopdata,
infoshow_system_video:movedata,
infoshow_system_photocatalog:imgsdata

})
const reqAtUrl=(urlid)=>Post(url+"/collect",{pubmuiltnames:"infoshow.urlcode",infoshow_urlcode:{"paramval1":urlid}})//外面穿进来的页面
const reqMoveId=(urlid)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.videoview",infoshow_system_videoview:{"paramval1":urlid}})//外面穿进来的页面

const reqAtPhto=(paramval1,paramval2)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.photocatalog",infoshow_system_photocatalog:{"paramval1":paramval1,"paramval2":paramval2}})

const reqAtPhtoitem=(paramval1,paramval2)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.photo",infoshow_system_photo:{"paramval1":paramval1,"paramval2":paramval2}})

const reqMove=(perve1,perve2)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.video","infoshow_system_video":{"paramval1":perve1,"paramval2":perve2}}) //视频的接口

const reqPhtoView=(id)=>Post(url+"/collect",{pubmuiltnames:"infoshow.system.photoview","infoshow_system_photoview":{"paramval1":id}}) 
module.exports={
	reqLogin,
	reqInitial,
	reqSwiper,
	reqaRist,
	reqCont,
	reqAtchont,
	reqAtUrl,
	reqMove,
	reqMoveId,
	reqAtPhto,
	reqAtPhtoitem,
	reqPhtoView
	}