<template>
	<view class="intor">
		 <web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	import {reqAtUrl} from '../../api/index.js'
	export default{
		data(){
			return{
				src:"https://www.baidu.com/",
				 webviewStyles: {
				                    progress: {
				                        color: '#FF3333'
				                    }
				                }
			}
		},
		onLoad(option)
		{
			console.log("option的值",option)
		   this.src=option.url
			//this.GetUrl()
		},
		methods:{
			GetUrl: async function(){
				let urldata=await reqAtUrl("11111")
				console.log("urldata的值",urldata)
				if(urldata.data.infoshow_urlcode_data.code==200){
					let url=urldata.data.infoshow_urlcode_data.data.url
					
					this.src=url
				}
			}
		}
	}
</script>

<style>
	.intor{
		width: 100vw;
		height: 100vh;
	}
</style>
