<template>
	<view class="moveplay">
		<video  
		:src="url+movedata.videopath"
		show-fullscreen-btn="false"
		:poster="url+movedata.videocover"
		></video>
		<view class="movetitle">这是标题</view>
	</view>
</template>

<script>
	import {reqMoveId} from '../../api/index.js'
	import app from '../../App.vue'
	export default{
	 data(){
		 return{
			 movedata:[],
			 url:""
		 }
	 },
	 onLoad(option){
		 
		 this.obtainmoveUrl(option.id)
		 this.url=app.Publicdata.url
	 },
	 methods:{
		 obtainmoveUrl:async function (id){
			let moveurl=await reqMoveId(id) 
			
			if(moveurl.data.infoshow_system_videoview_data.code==200){
				
				let movedata=moveurl.data.infoshow_system_videoview_data.data
				console.log("moveurl.data.infoshow_system_videoview_data",movedata)
				this.movedata=movedata
			}
			
		 }
	 }
	}
</script>

<style>
	.moveplay{
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000000;
	}
	.moveplay video{
		width: 100vw;
		height: 70vh;
	}
	.movetitle{
      position: absolute;
      bottom: 132rpx;
      left: 32rpx;
      color: #ffffff;
		
	}
</style>
