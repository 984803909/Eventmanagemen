<template>
	<view>
		 <web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	import {reqAtUrl} from '../../api/index.js'
	export default{
		data(){
			return{
				src:"https://uniapp.dcloud.io/static/web-view.html"
			}
		},
		onLoad(){
			this.GetUrl()
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
</style>
