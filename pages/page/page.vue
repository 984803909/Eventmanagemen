<template>
	<view  class="pagecontai">
		<view class="pageHeadImag">
			<image mode ="widthFix" v-if="url" :src="url+pageHeadImag"></image>
		</view>
		<view class="pankList" v-if="infoshdata.infoshdata==1" >
			<view class="pankTtile">{{msg}}</view>
			<view class="packglob">
				<view class="globTitle">{{globakmorank}}</view>
				<view class="globtable">
					<ZyTable></ZyTable>
				</view>
			
			</view>
			<view class="packglob">
				<view class="globTitle">{{fenshurank}}</view>
				<view class="globtable">
					<ZyTable></ZyTable>
				</view>
			</view>
		</view>
		<view class="pageSwiper">
			<swiper circular="true" autoplay="true"  interval="3000">
				<swiper-item 
				 v-for="(item,index) in swiperimg"
				:key="index"
				>
				<image  
				v-if="url"
				mode ="scaleToFill" 
				class="swiperImg" 
				:src="url+item.photo"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="pageHeadImag" v-if="infoshdata.showbysitedisplay==1">
			<image mode ="widthFix" 
			v-if="url" 
			:src="url+infoshdata.sitedisplaybtnimg"
			@tap="Getplauirurl(infoshdata.sitedisplayurl)"
			></image>
		</view>
		<view class="pageArgs">
			<view class="Argstitle">
				<view class="titeljust">
					<view>新闻</view>
					<view @tap="GetAtlist(0)">更多></view>
				</view>
			     <view class="argecontent">
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
			</view>
			
		</view>
	<view class="pageArgs">
		<view class="Argstitle">
			<view class="titeljust">
				<view>相册</view>
			</view>
		   <view class="argecontent">
			   <jinswiper v-if="!(jinswperdata=='')" :jinswperdata="jinswperdata" />
		   </view>
	</view>
	</view>
		<view class="pageArgs">
			<view class="Argstitle">
				<view class="titeljust">
					<view>视频</view>
					<view @tap="GetAtlist(1)">更多></view>
				</view>
			     <view class="argecontent">
					 <view class="arcontitem"
					  v-for="(index,key) in removedatas" 
					  :key="key"
					  @tap="MoveDtail(index.videoid)"
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
			
		</view>
		
	</view>
</template>

<script>
	import ZyTable from '../../components/ZyTable/ZyTable.vue'
	import app from '../../App.vue'
    import jinswiper from '../../components/jing-swiper/jing-swiper.vue'
	import {reqCont}from '../../api/index.js'
   
	export default{
		data(){
			return{
				url:"",
				pageHeadImag:"",
				msg:"这是一场是虚拟的比赛",
				globakmorank:"金牌排行榜",
				fenshurank:"分数排行",
				swiperimg:[],
				infoshdata:"",
				infoshoticledata:"", //新闻列表
				removedatas:[], //视频列表
				jinswperdata:""
					
			}
		},
		onLoad(option){
		this.url=app.Publicdata.url
		this.PageInite(option.id)
		},
		methods:{
			PageInite:async function(id){	
				
				let reqContdata=await reqCont(
				{"paramval1":0,"paramval2":3},
				 id,
				{"paramval1":0,"paramval2":5},
				{"paramval1":0,"paramval2":5},
				{"paramval1":0,"paramval2":5}
				)
	
				if(reqContdata.data.code==200){
					let reqdata=reqContdata.data
					console.log("reqdata的值",reqdata)
					if(reqdata.infoshow_system_photocatalog_data.code==200){
						let reqatdata=reqdata.infoshow_system_photocatalog_data.data
						this.jinswperdata=reqatdata
					}
					if(reqdata.infoshow_system_video_data.code==200){
						let removedatas=reqdata.infoshow_system_video_data.data
						this.removedatas=removedatas
					}
					if(reqdata.infoshow_system_picloop_data.code==200){
						let infordatasys=reqdata.infoshow_system_picloop_data.data
						this.swiperimg=infordatasys
					}
					if(reqdata.infoshow_system_base_data.code==200){
			         let ifdata=reqdata.infoshow_system_base_data.data
					 this.pageHeadImag=ifdata.systembanner
					 this.infoshdata=ifdata
					 uni.setNavigationBarTitle({
					 title:ifdata.systemname
					 })
					}
					if(reqdata.infoshow_system_article_data.code==200){
					 let ardata=reqdata.infoshow_system_article_data.data
				     this.infoshoticledata=ardata
					}
				}


				
			},
			GetAtlist(num){
				
				uni.navigateTo({
					url:'../aticlelist/aticlelist?num='+num
				})
			},
			viewDtail(id){
						uni.navigateTo({
							url:`../atclecont/atclecont?id=${id}`
						})
			},
			Getplauirurl(url){
				uni.navigateTo({
					url:`../itovther/itovther?url=${url}`
				})
			},
			MoveDtail(url){
				uni.navigateTo({
				url:`../movepaly/movepaly?id=${url}`
				})
			}
		},
		components:{
			ZyTable,
			jinswiper
			
		}
	}
</script>

<style>
	.pagecontai{
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #f7f7f7;
		overflow: ;
	}
	.pageHeadImag{
		width: 100%;
	}
	.pageHeadImag image{
		width: 100%;
		height: 100%;
		
	}
	.pankList{
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		background: #ffffff;
	}
	.pankTtile{
    color: #ffffff;
    background: #14a6ad;
    padding-top: 14rpx;
    padding-bottom: 14rpx;
    padding-left: 20px;
    font-size: 33rpx;
	width: 100%;
	}
	.packglob{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.globTitle{
		font-size: 44rpx;
		margin-top: 14rpx
	}
	.globtable{
		width: 89%
	}
	.pageSwiper{
		width: 99%;
		margin: 20rpx auto;
	
	}
	.swiperImg{
		width: 100%;
		height: 100%;
	}
	.pageArgs{
		width: 100%;
		display: flex;
		
		padding-bottom: 15px;
	
	}
	.Argstitle{
	   width: 100%;
	   background: #14a6ad;
	 
	   
	}
	.Argstitle .titeljust{
		display: flex;
		width: 95%;
		margin: 0 auto;
		justify-content: space-between;
		color: #ffffff;
		padding-top: 14rpx;
		padding-bottom: 14rpx;
	}
	.argecontent{
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #ffffff;
	}
	.arcontitem{
		width: 95%;
		margin: 0rpx auto 0;
	    padding-bottom: 19rpx;
		display: flex;
		justify-content: space-between;
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
