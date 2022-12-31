<template>
	<view class="nav_box" :style="{height: navigatorHeight + 'px', 'padding-top': statusBarHeight + 'px', 'background-image': 'url(../../static/img/bg.jpeg)'}">
		<view class="nav_contain" :style="{width: menuLeft + 'px'}">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"navBox",
		data() {
			return {
				system:{},
				menu:{},
				statusBarHeight: 0, //状态栏的高度 
				navigatorHeight: 0, //导航栏高度
				menuHeight: 0, //胶囊高度
				menuTop: 0, //胶囊与顶部的距离
				menuLeft: 0, //胶囊与左部的距离
				totalHeight: 0, //总高度
			};
		},
		created(){
			//获取系统信息
			this.system = uni.getSystemInfoSync()
			
			//获取胶囊信息
			this.menu = uni.getMenuButtonBoundingClientRect()
			
			//计算组件高度
			this.statusBarHeight = this.system.statusBarHeight //状态栏高度
			this.navigatorHeight = (this.menu.top - this.system.statusBarHeight) * 2 + this.menu.height //导航栏高度
			this.totalHeight = this.statusBarHeight + this.navigatorHeight //总高度
			this.menuHeight = this.menu.height //胶囊高度
			this.menuTop = this.menu.top //胶囊与顶部的距离
			this.menuLeft = this.menu.left //胶囊与左部的距离
			setTimeout(() => {
				uni.$emit('getMenu', this.menu)
			}, 1000)
		}
	}
</script>

<style lang="less">
	.nav_contain{
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>