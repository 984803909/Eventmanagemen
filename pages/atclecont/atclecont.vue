<template>
	<view class="atchlecont">
		<view class="conmarin">
			<view class="altitle">{{contlist.articletitle}}</view>
			<view class="smallprint">时间：{{contlist.articledate}}</view>
			<image 
			class="conimg"
			mode="widthFix"
			v-if="url"
			:src="url+contlist.articlepic">
			</image>
			<view class="ritext">
				 <rich-text :nodes="contlist.articlehtml"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import {reqAtchont} from '../../api/index.js'
	import app from '../../App.vue'
	export default{
		data(){
			return{
				url:"http://jh.scms.sports51.com",
				contlist:{}
			}
		},
      onLoad(option) {
	    this.url=app.Publicdata.url
      	this.qqactont(option.id)
      }	,
	 methods:{
		 qqactont:async function(id){
			 const reqAtcdata=await reqAtchont({"paramval1":id})
			 if(reqAtcdata.data.infoshow_system_articleview_data.code==200){
				 let data=reqAtcdata.data.infoshow_system_articleview_data.data
				 console.log("Data的值",data)
				 this.contlist=data
			 }
		 }
	 }	  
	}
</script>

<style>
	.atchlecont{
		width: 100%;
	}
	.conmarin{
		width: 89%;
		margin: 32rpx auto;
	}
	.altitle{
	 width:100% ;
	 font-weight: 600;
	 font-size: 39rpx;
	}
	.smallprint{
		font-size: 20rpx;
		color: #9c9b9b;
		margin-top: 11rpx;
	}
	.conimg{
		width: 100%;
	}
	.ritext{
		width: 100%;
		margin-top: 20rpx;
	}
</style>
