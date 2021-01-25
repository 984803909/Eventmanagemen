<template>
	<view class="my-plan-style">
		<!-- 3D轮播 -->
		<view class="">
			<swiper 
			class="imageContainer"  
			previous-margin="50rpx" 
			next-margin="50rpx" 
			@tap="imgnavto()"
			circular  
			autoplay>
				<block v-for="(item,index) in jinswperdata" :key="index">
					<swiper-item class="swiperitem">
						<image 
						class="itemImg" 
						:class="currentIndex == index ? 'swiperactive': ''" 
						:src="url+item.catalogcover" lazy-load mode="scaleToFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		props:{jinswperdata:{
			type:""
		}},
		data(){
			return {
				url:"http://jh.scms.sports51.com",

			}
		},
		mounted() {
			console.log("jinswperdata的值",this.jinswperdata)
		},
		methods:{
			imgnavto(){
				uni.navigateTo({
					url:'../../pages/Phogoup/Phogoup'
				})
			}
		}
	}	
</script>
<style lang="scss">
	// 3D轮播样式
	.imageContainer {
		width: 100%;
		/* height: 500rpx; */
		/* background: #000; */
		height: 325rpx;
		background-color: #fff;
	}
	
	.swiperitem {
		/* height: 500rpx; */
		height: 255rpx;
		padding: 0rpx 20rpx;
		box-sizing: border-box;
		position: relative;
		.swiperText {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: absolute;
			top: 56rpx;
			left: 51rpx;
			z-index: 998;
			width:162rpx;
			height:163rpx;
			background:rgba(255,255,255,1);
			border-radius:8rpx;
			padding:10rpx;
			.name {
				font-size:26rpx;
				font-weight:500;
				color:rgba(253,57,91,1);
				line-height:37rpx;
				margin-bottom: 10rpx;
			}
			.zq,.cz {
				font-size:20rpx;
				color:rgba(253,57,91,1);
				line-height:35rpx;
			}
			.addNl {
				width:120upx;
				height:26upx;
				background:rgba(253,57,91,1);
				border-radius:13upx;
				font-size:20upx;
				font-weight:500;
				color:rgba(255,255,255,1);
				text-align: center;
				line-height: 26upx;
				margin-top: 10upx;
			}
			
		}
	}
	
	.itemImg {
		position: absolute;
		width: 95%;
		/* height: 380rpx; */
		height: 255upx;
		border-radius: 15rpx;
		z-index: 5;
		opacity: 0.7;
		top: 5%;
		box-shadow:0px 4upx 15upx 0px rgba(153,153,153,0.24);
	}
	
	.swiperactive {
		width: 95%;
		opacity: 1;
		z-index: 10;
		/* height: 430rpx; */
		height: 287upx;
		top: 0%;
		transition: all .2s ease-in 0s;
	}
	
	.zhankai{
		text-align: center;
		.iconfont{
			margin-left: 10upx;
		}
	}
</style>