<template>
	<view class="logistics-details-page page-box"
		:style="{'padding-top': '100rpx'}">
		<view class="page-nav">
			<navBox type="black" @goback="goback">{{logisticsAdressType === 'shipping' ? '发货' : '退货'}}物流详情</navBox>
		</view>
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :top='21'
			:up="upOption" :selfMinHeight="`calc(100vh - 100rpx)`">
			<view class="page-contain">

				<!-- 寄、收人信息 -->
				<view class="contain-item">
					<view class="send flex-box j-c-start" style="margin-bottom: 41.67rpx;">
						<text class="text-icon">寄</text>
						<view class="info-box ma-l-21 flex-box flex-col a-i-top">
							<view class="info-title">
								<text class="info-title">{{send.consignee}}</text>
								<text class="info-title" style="margin-left: 28.13rpx;">{{send.phone}}</text>
							</view>
							<view class="info">{{send.address}}</view>
						</view>
					</view>
					<view class="put-away flex-box j-c-start">
						<text class="text-icon" style="background: #96CF50;">收</text>
						<view class="info-box ma-l-21 flex-box flex-col a-i-top">
							<view class="info-title">
								<text class="info-title">{{putAway.consignee}}</text>
								<text class="info-title" style="margin-left: 28.13rpx;">{{putAway.phone}}</text>
							</view>
							<view class="info">{{putAway.address}}</view>
						</view>
					</view>
					<view class="line">
					</view>
				</view>

				<!-- 物流步骤条 -->
				<view class="contain-item" style="background-color: transparent;">
					<uni-steps :options="stepsList" active-color="#96CF50" :active="0" direction="column" />
				</view>

			</view>
		</mescroll-body>

	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				downOption: {
					auto: false,
					beforeEndDelay: 300
				},
				upOption: {
					use: false
				},
				send: {},
				putAway: {},
				stepsList: [],
				params: {},
				logisticsAdressType: ''
			};
		},
		onLoad(optoin) {
			this.params = optoin
			this.getLogisticsDetails()
		},
		onShow() {
			this.logisticsAdressType = getApp().globalData.logisticsType
			if (this.logisticsAdressType === 'shipping') { // 发货
				this.send = getApp().globalData.shopAdressInfo || {}
				this.putAway = getApp().globalData.userAdressInfo || {}
			}
			if (this.logisticsAdressType === 'return') { // 退货
				this.send = getApp().globalData.userAdressInfo || {}
				this.putAway = getApp().globalData.shopAdressInfo || {}
			}
		},
		methods: {
			downCallback() {
				this.getLogisticsDetails()
			},
			goback() {
				uni.navigateBack()
			},
			getLogisticsDetails() {
				let that = this
				this.$api.post('courier/checkOrder', this.params).then(res => {
					if (res.status === 'success') {
						let data = JSON.parse(res.data)
						if (data) {
							let stepsList = data.Traces || []
							stepsList.reverse()
							stepsList.forEach(item => {
								that.stepsList.push({
									title: item.AcceptStation,
									desc: item.AcceptTime
								})
							})
						}
						that.mescroll.endSuccess()
					} else {
						that.mescroll.endErr()
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	::v-deep.logistics-details-page {
		.contain-item {
			position: relative;
		}

		.line {
			position: absolute;
			left: 36rpx;
			top: 50%;
			transform: translateY(-50%);
			height: 82rpx;
			width: 1px;
			border-left: 1px dashed #C7C7C7;
		}

		.text-icon {
			width: 32rpx;
			height: 32rpx;
			background: #E80807;
			border-radius: 5rpx;
			font-size: 25rpx;
			color: #FFFFFF;
			line-height: 32rpx;
			text-align: center;
		}

		.ma-l-21 {
			margin-left: 23.69rpx;
		}

		.info-title {
			font-size: 27rpx;
		}

		.info {
			font-size: 23rpx;
			line-height: 50rpx;
		}
	}
</style>