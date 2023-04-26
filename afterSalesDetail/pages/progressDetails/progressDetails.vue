<template>
	<view class="progress-details-page page-box" :style="{'padding-top': '100rpx','margin-top':statusBarHeight + 'px'}">
		<view class="page-nav">
			<navBox type="black" @goback="goback">进度详情</navBox>
		</view>
		<view class="page-contain" :style="{'min-height': `calc(100vh - 100rpx - ${statusBarHeight}px)`}">
			<!-- 物流步骤条 -->
			<view class="contain-item" style="background-color: transparent;">
				<uni-steps :options="stepsList" active-color="#96CF50" :active="0" direction="column" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				stepsList: []
			};
		},
		onLoad() {
			let that = this
			uni.$on('getMenu', data => {
				that.statusBarHeight = data
			})
		},
		onShow() {
			let that = this
			that.stepsList = []
			let aftersaleLogList = getApp().globalData.aftersaleLogList
			if (aftersaleLogList.length > 0) {
				aftersaleLogList.forEach(item => {
					that.stepsList.push({
						title: item.logcontent,
						desc: that.parseTime(item.logtime)
					})
				})
			}
		},
		onUnload() {
			// 移除监听事件  
			uni.$off('getMenu');
		},
		methods: {
			goback() {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="less" scoped>
	.progress-details-page {
		.page-contain {
			background-color: #fff;
			box-sizing: border-box;
			padding-top: 21rpx;

			.contain-item {
				padding-top: 40rpx;
			}
		}
	}
</style>