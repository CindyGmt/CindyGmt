<template>
	<view :class="['nav_box', type === 'black' ? 'nav_box_black' : '']" :style="{height: navigatorHeight + 'rpx'}">
		<image v-if="type === 'black' " class="goback" src='../../common/img/goback_1.png' @click="goback"></image>
		<image v-else class="goback" src='../../common/img/goback.png' @click="goback"></image>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"navBox",
		props:{
			type:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				system:{},
				navigatorHeight: 0, //导航栏高度
			};
		},
		created(){
			//获取系统信息
			this.system = uni.getSystemInfoSync()
			
			this.navigatorHeight = 100 //导航栏高度
		},
		methods:{
			goback(){
				this.$emit('goback')
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav_box{
		width: 750rpx;
		line-height: 100rpx;
		font-size: 33.33rpx;
		font-weight: Bold;
		color: #EEC3A3;
		text-align: center;
		position: relative;
		margin: 0 auto;
		background-color: #fff;
	}
	.nav_box_black{
		color: #000;
	}
	.goback{
		position: absolute;
		width: 18.75rpx;
		height: 31.74rpx;
		left: 30.6rpx;
		top: 50%;
		transform: translateY(-50%);
	}
</style>