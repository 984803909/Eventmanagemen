<template>
	<view >
	
		<view class="phgorpimg">
			  <image 
			  v-for="(index,key) in reqdata "
			  class="imgitm"
			   mode="widthFix"
			   :src="url+index.photo"
			   @tap="pictor(index.photoid)"
			   :key="key"
			   ></image>
		</view>
	</view>

</template>

<script>
	import {reqAtPhtoitem} from '../../api/index.js'
	import App from '../../App.vue'
  export default{
	data() {
		return{
			url:"",
			reqdata:[]
		}
	},
	 onLoad() {
		this.url=App.Publicdata.url
	 	this.pahtochus()
	 },
	 methods:{
		pahtochus: async function (){
			let reqAtPhtodata=await reqAtPhtoitem(0,5)
			if(reqAtPhtodata.data.infoshow_system_photo_data.code==200){
				let reqdata=reqAtPhtodata.data.infoshow_system_photo_data.data
				this.reqdata=reqdata
				
			}
		},
		pictor(url){
		
		uni.navigateTo({
			url:`../pictitordetai/pictitordetai?id=${url}`,
	
		})
		}
	 }
  }
</script>

<style>
	.phgorpimg{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.imgitm{
		width: 100%;
		margin-bottom: 36rpx;
		border: 1px solid #4f4e50;
	}
</style>
