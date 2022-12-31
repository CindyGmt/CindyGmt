<template>
	<view :style="{'background-image': 'url(../../static/img/bg.jpeg)'}">
		<navBox>
			<image src='../../static/img/logo.png' class="logo" 
			:style="{width: menuHeight + 'px', height: menuHeight + 'px'}"></image>
			<uni-search-bar @confirm="search" radius="100" :focus="true" v-model="searchValue" cancelButton="none">
			</uni-search-bar>
		</navBox>
		<view class="container">
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"/>
		</view>
	</view>
	
</template>

<script>
	import navBox from '@/components/navBox/navBox.vue'
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		components: { navBox, carousel },
		data() {
			return {
				menu: {},
				menuHeight:0,
				searchValue:'',
				imgList: [{
					url: require('@/static/img/1.jpeg'),
					id: 1
				},{
					url: require('@/static/img/2.jpeg'),
					id: 2
				},{
					url: require('@/static/img/3.jpeg'),
					id: 3
				},{
					url: require('@/static/img/4.jpeg'),
					id: 4
				},]
			}
		},
		onLoad(){
			uni.$on('getMenu',data => {
				this.menu = data
				this.menuHeight = this.menu.height
			})
		},  
		onUnload() {  
			// 移除监听事件  
				uni.$off('getMenu');  
			},
		methods: {
			search(){
				
			},
			selectedBanner(item, index) {
				console.log(item, index)
			}
		}
	}
</script>

<style>
	.logo{
		margin: 0 10px;
	}
	.nav_contain .uni-searchbar{
		padding: 0;
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
