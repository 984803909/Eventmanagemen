<template>
	<view class="pricdetai">
		<image 
		mode="widthFix"
		class="pricclass"
		v-if="url"
		:src="url+requrl.photo"
		></image>
	</view>
</template>

<script>
	import {reqPhtoView} from '../../api/index.js'
	import App from '../../App.vue'
	export default{
		data(){
			return{
				url:"",
				requrl:""
			}
		},
		onLoad(prarm){
			this.url=App.Publicdata.url
			this.reqphview(prarm.id)
		},
		methods:{
		   reqphview:async function(id){
			   let reqpdata=await reqPhtoView(id)
			  
			   if(reqpdata.data.infoshow_system_photoview_data.code==200){
				   let reqdata=reqpdata.data.infoshow_system_photoview_data.data
				   this.requrl=reqdata
			   }
		   }
		}
	}
</script>

<style>
	.pricdetai{
		width: 100vw;
		height: 100vh;
		background:#000000 ;
		display: flex;
		justify-items: center;
		align-items: center;
	}
	.pricclass{
		width: 100%;
	}
</style>
