<template>
	<view class="content">
		<view class="contitle">{{title}}</view>
		<view class="contaimatch">
			
			<view class="mathitem"   v-for="(item,index) in arr" @tap="starnvto(item.id)" :key="index">
				<image mode ="scaleToFill" v-if="item.systemlogo"  :src="imgurl+item.systemlogo"    class="mataimg"   ></image>
				<view class="matfont">{{item.systemname}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {reqLogin}from '../../api/index.js'
	import app from '../../App.vue'
	export default {
		data() {
			return {
				title: '近期赛事',
				imgurl:"http://admin.scms.sports51.com",
				arr:[]
			}
		},
		onLoad() {
         this.indexrest()
		   this.imgurl=app.Publicdata.url
		},
		methods: {
           indexrest: async function (){
			  let logi  =await reqLogin()
			  let data=logi.data.infoshow_systemlist_data	
			  if(data.code==200){
				this.arr=data.data
			  }
		   },
		   starnvto(id){
			   app.Publicdata.systemid=id
			  uni.redirectTo({
				  url:`/pages/page/page?id=${id}`,
			  })
		   }
		}
	}
</script>

<style>
	.content {
		width: 93%;
		margin: 0 auto;
	    display: flex;
		flex-direction: column;
	}
	.contitle{
		font-size: 54rpx;
		margin-top: 41rpx;
	}
	.contaimatch{
		width: 100%;
		display: flex;
        justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 74rpx;
	}
	.mathitem{
		width: 26%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 42rpx;
	}
	.mataimg{
		width:100% ;
		height: 200rpx;
	}
	.matafont{
		margin-top: 10rpx;
	}
	.matfont{
		width: 100%;
		text-align: left;
		margin-top: 14rpx;
	}

	
</style>
