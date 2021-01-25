<template>
	<view class="aticlscontai">
		<view class="aticlstitile">
			<span>{{title}}</span>
		</view>
		<view class="argecontent" v-if="moveandjor==0">
			<view class="arcontitem" 
			 v-for="(index,key) in infoshoticledata" 
			 :key="key" 
			 @tap="viewDtail(index.articleid)"
			 >
				 <view class="arleft">
					<view class="itemBt">{{index.articletitle}}</view>
						<view class="itemminfont">
							<view>{{index.articledate}}</view>
								<view></view>
								</view>
								</view>
							<view class="itemRightImg">
							 <image mode ="scaleToFill"  :src="url+index.articlepic"></image>
								</view>
			</view>
		</view>
		<view class="argecontent"  v-else>
			<view class="arcontitem"
			 v-for="(index,key) in movedata" 
			 :key="key" 
			 @tap="viewDtail(index.videoid)"
			 >
				 <view class="arleft">
					<view class="itemBt">{{index.videotitle}}</view>
						<view class="itemminfont">
							<view>{{index.videodate}}</view>
								<view></view>
								</view>
								</view>
							<view class="itemRightImg">
							 <image mode ="scaleToFill"  :src="url+index.videocover"></image>
								</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {reqaRist,reqMove} from '../../api/index.js'
	import app from '../../App.vue'
	export default{
		data(){
			return{
				url:"",
				infoshoticledata:[],
				infornum:1,
				moveandimg:0,
				title:"新闻通知",
				moveandjor:0, //判断在文章或者在商品列表
				movedata:[]
			}
		},
		onLoad(option){
			this.url=app.Publicdata.url
			if(option.num==0){
				this.onloadrest({"paramval1":0,"paramval2":15},0)
				this.title="新闻通知"
				this.moveandjor=0
				uni.setNavigationBarTitle({
				title:"新闻通知"
				})
			}else{
				this.onMove(0,5,0)
				this.title="视频列表"
				this.moveandjor=1
				uni.setNavigationBarTitle({
				title:"视频列表"
				})
			}
		
		},
		onReachBottom(){
			if(this.moveandjor==0){
				this.onloadrest({"paramval1":this.infornum*15,"paramval2":15},1)
			}else{
				console.log("我触发了")
				this.onMove(this.infornum*15,15,1)
			}
			
		},
		methods:{
		 onMove:async function(parnva,num,danshu){
			 let reqMoveData=await reqMove(parnva,num)
			 console.log("reqMoveData",reqMoveData)
			 if(reqMoveData.data.infoshow_system_video_data.code==200){
				 let movedata=reqMoveData.data.infoshow_system_video_data.data
				 console.log("movedata",movedata)
				 //this.movedata=movedata
				 if(movedata.length==0){
					 uni.showToast({
					 	icon:"none",
					     title: '视频已经到底',
					     duration: 2000
					 });
				 }else{
					  this.infornum=this.infornum+1
					 if(danshu==0){
					   this.movedata=movedata
					 }else{
						this.movedata=this.movedata.concat(movedata) 
					 }
				
					 
				 }
			 }
		 },
		 onloadrest:async function(paranva,num){
			 let reqaRistdata=await reqaRist(paranva)
			 if(reqaRistdata.data.infoshow_system_article_data.code==200){
				 let arcledata=reqaRistdata.data.infoshow_system_article_data.data
				 if(arcledata.length==0){
					  uni.showToast({
						  icon:"none",
					      title: '文章已经到低啦',
					      duration: 2000
					  });
				 }else{
					this.infornum=this.infornum+1
					if(num===0){
						this.infoshoticledata=arcledata
					}else{
						this.infoshoticledata=this.infoshoticledata.concat(arcledata) 
					} 
				 }
 
			 }
		 },
		 viewDtail(id){
			 if(this.moveandjor==0){
				 uni.navigateTo({
				 	url:`../atclecont/atclecont?id=${id}`
				 })
			 }else{
				 uni.navigateTo({
				 	url:`../movepaly/movepaly?id=${id}`
				 })
				
			 }
			
		 }
		}
	}
</script>

<style>
	.aticlscontai{
		width: 100%;
		background: #808080;
		display: flex;
		flex-direction: column;
	}
	.aticlstitile{
		background: #14a6ad;
		color: #ffffff;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
		
	}
	.aticlstitile span{
		margin-left: 2.5%;
	}
	.argecontent{
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #ffffff;
	}
	.arcontitem{
		margin-top: 19rpx;
		width: 95%;
		margin: 19rpx auto 0;
	    padding-bottom: 19rpx;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e4cbcb;
	}
	.arcontitem:nth-child(1){
		margin-top: 19rpx;
	}
	.arleft{
		height: 100%;
		margin-right: 56rpx;
		flex: 4;
		margin-right: 34rpx;
	}
	.itemBt{
		font-size: 33rpx;
		font-weight: 500;
		height: 86rpx;
	}
	.itemminfont{
		font-size: 24rpx;
		color:#585757;
		display: flex;
		margin-top: 19rpx;
	}
	.itemminfont view{
		margin-right: 20rpx;
	}
	.itemRightImg{
	   height: 90rpx;
	   width: 179rpx;
	  
	   flex: 1.5;
	}
	.itemRightImg image{
		width: 100%;
		height: 100%;
	}
</style>
