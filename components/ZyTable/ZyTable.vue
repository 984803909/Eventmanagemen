<template>
	<view class="Zytable">
		<view class="TabTitle">
			<view v-for="(value,index) in tabletitle" :key="index">{{value}}</view>
		</view>
		<view class="tableitem">
			<view 
			class="itemregion" 
			v-for="(val,index) in tabledata" 
			:key="index">
				<view v-for="(val1,index1) in val" :key="index1">{{val1}}</view>
			</view> 
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
               tabletitle:["名词","县市区","奖牌","金牌","银牌","总分"],
			   tabledata:[ {
				     rank:"1",
					 region:"蒋干",
					 golodmodel:"160",
					 sermodel:"150",
					 bronze:"140",
					 totalscore:"3605"
			   } ,
			   {
			   				     rank:"2",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"3",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"4",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"5",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"6",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"7",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"8",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"9",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   },
			   {
			   				     rank:"10",
			   					 region:"蒋干",
			   					 golodmodel:"160",
			   					 sermodel:"150",
			   					 bronze:"140",
			   					 totalscore:"3605"
			   }
			   ]
			}
		},
	
	}
</script>

<style>
	.Zytable{
		display: flex;
		flex-direction: column;
		border: 2rpx solid #f7f7f7;
	}
	.TabTitle{
		display: flex;
		justify-content: space-around;
		text-align: center;
		color: #ffffff;
		font-size: 31rpx;
		background: #007AFF;
		padding-top: 4rpx;
		padding-bottom: 4rpx;
	}
	.TabTitle view{
		width: 100%;
		text-align: center;
		border-right: 2rpx solid #f7f7f7;
	}
	.tableitem{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.itemregion{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.itemregion view{
		flex: 1;
		text-align: center;
	}
	.itemregion:nth-child(odd){
		background-color: #EFFAFF;
	}
	.itemregion:nth-child(even){
		background-color: #FFFFFF;
	}
</style>
