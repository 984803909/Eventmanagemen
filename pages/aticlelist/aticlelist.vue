<template>
	<view class="aticlscontai">
		<view class="aticlstitile">
			<span>新闻通知</span>
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
</template>

<script>
	import {reqaRist} from '../../api/index.js'
	import app from '../../App.vue'
	export default{
		data(){
			return{
				url:"",
				infoshoticledata:[],
				infornum:1
			}
		},
		onLoad(){
			this.url=app.Publicdata.url
			this.onloadrest({"paramval1":0,"paramval2":15},0)
		},
		onReachBottom(){
			this.onloadrest({"paramval1":this.infornum*15,"paramval2":15})
		},
		methods:{
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
			uni.navigateTo({
				url:`../atclecont/atclecont?id=${id}`
			})
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
