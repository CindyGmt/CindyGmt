<template>
	<view class="progress-details-page page-box" :style="{'padding-top': '100rpx'}">
		<view class="page-nav">
			<navBox type="black" @goback="goback">进度详情</navBox>
		</view>
		<view class="page-contain" :style="{'min-height': `calc(100vh - 100rpx`}">
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
				stepsList: []
			};
		},
		onLoad() {
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