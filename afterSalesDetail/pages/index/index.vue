<template>
	<view class="index-page page-box" :style="{'padding-top': '100rpx'}">
		<view class="page-nav">
			<navBox type="black" @goback="goback">售后详情</navBox>
		</view>
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :top='21'
			:up="upOption" :selfMinHeight="`calc(100vh - 100rpx)`">
			<view class="page-contain">
				<!-- 售后当前进度：退款进度、退货退款进度、换货进度 -->
				<view class="contain-item overall-progress">
					<text class="title">
						{{afterSale.aftersaletype}}进度
					</text>
					<view class="progress-new pa-t-23 flex-box">
						<view class="info progress-new-info">
							<text class="word-nowrap">{{nowOverallProgress.logcontent}}</text>
							<text class="dis-b">{{parseTime(nowOverallProgress.logtime)}}</text>
						</view>
						<image class="gonext" src='../../common/img/to_next.png' @click="goOverallProgressDetail">
						</image>
					</view>
				</view>

				<!-- 换货售后的当前的发货进度及进度详情入口 -->
				<view class="contain-item shipping-logistics"
					v-if="afterSale.aftersaletype === '换货' && afterSale.reExpressnum" @click="toLogisticsDetails">
					<text class="title">
						发货物流详情
					</text>
					<view class="progress-new pa-t-23 flex-box">
						<view class="info">
							<text>{{nowShippingLogistics.title}}</text>
							<text>{{nowShippingLogistics.desc}}</text>
						</view>
						<image class="gonext" src='../../common/img/to_next.png'></image>
					</view>
				</view>

				<!-- 售后商品信息 -->
				<view class="contain-item after-sales-products">
					<text class="title">
						{{afterSale.aftersaletype}}商品
					</text>
					<view class="good-info pa-t-23 flex-box j-c-start">
						<image class="good-img" :src="dingdanGood.photoPath" mode="scaleToFill"></image>
						<view class="info-box ma-l-21 flex-box flex-col a-i-top">
							<view class="w-100">
								<text class="info-title word-nowrap">{{dingdanGood.gname}}</text>
								<view class="info-detail dis-i-b">
									<text :class="[i > 0 ? 'ma-l-21' : '']" v-for="(item, i) in dingdanGood.norms"
										:key="item.key">{{item.key + ':' + item.value}}</text>
								</view>
							</view>
							<view class="info">
								售后原因：{{afterSale.reason}}
							</view>
						</view>
					</view>
				</view>

				<!-- 退货退款说明、换货说明 -->
				<view class="contain-item illustrate" v-if="afterSale.aftersaletype !== '仅退款' && !afterSale.expressnum">
					<text class="title">
						{{dictionary.termDesc}}
					</text>
					<view class="info pa-t-23">{{dictionary.termVal}}</view>
				</view>

				<view class="contain-item return-address-info"
					v-if="afterSale.aftersaletype !== '仅退款' && !afterSale.expressnum">
					<text class="title">
						退货地址信息
					</text>
					<view class="pa-t-23">
						<text class="info dis-b">收货人：<text class="black">{{shopAdressInfo.consignee}}</text></text>
						<text class="info dis-b">联系电话：<text class="black">{{shopAdressInfo.phone}}</text></text>
						<text class="info dis-b">收货地址：<text class="black">{{shopAdressInfo.address}}</text></text>
					</view>
				</view>

				<!-- 退货物流单号填写入口及进度入口 -->
				<view class="contain-item return-logistics flex-box" @click="goReturn"
					v-if="afterSale.aftersaletype !== '仅退款'">
					<text class="title">退货物流单号</text>
					<view class="flex-box">
						<text class="info"
							style="margin-right: 7.29rpx;">{{afterSale.expressnum ? afterSale.expressnum : ''}}</text>
						<image class="gonext" style="width: 13.82rpx;height: 23.39rpx;"
							src='../../common/img/to_next.png'>
						</image>
					</view>
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
				dictionary: {},
				aftersaleLogList: [],
				nowOverallProgress: {},
				dingdanGood: {},
				afterSale: {},
				nowShippingLogistics: {},
				shopAdressInfo: {},
				optionsNameMap: {}
			}
		},
		watch:{
			optionsNameMap:{
				deep: true,
				immediate: true,
				handler(n,o){
					if(JSON.stringify(n) !== '{}'){
						let address =
							n[this.shopAdressInfo.province] +
							n[this.shopAdressInfo.city] +
							n[this.shopAdressInfo.district] +
							n[this.shopAdressInfo.street] +
							this.shopAdressInfo.detailedAddress
						this.shopAdressInfo.address = address
						getApp().globalData.shopAdressInfo = this.shopAdressInfo
					}
					
				}
			}
		},
		onLoad() {
			this.getAfterSalesDetails()
		},
		methods: {
			downCallback() {
				this.getAfterSalesDetails()
			},
			nameMap(arr) {
				let that = this
				if (arr.length > 0) {
					arr.forEach(item => {
						that.optionsNameMap[item.value] = item.label
						if (item.children) {
							if (item.children.length > 0) {
								that.nameMap(item.children)
							}
						}
					})
				}
			},
			getJson: function() {
				if (uni.getStorageSync('pcas_code')) {
					this.nameMap(uni.getStorageSync('pcas_code'));
					return
				}
				let that = this
				const url = "pcas/pcas-code.json"; //获取JSON格式的全国数据
				this.$api.get(url).then(res => {
					uni.setStorage({
						key: 'pcas_code',
						data: res
					})
					that.nameMap(res);
				})
			},
			goback() {
				this.$bridge.callmethod('goBack', {}, () => {})
			},
			//获取订单详情
			getAfterSalesDetails() {
				let params = {
					suoId: getApp().globalData.suoId,
					orderId: getApp().globalData.orderId,
					aftersaleId: getApp().globalData.aftersaleId
				}
				let that = this
				this.$api.post('Aftersale/afterSalesDetails', params).then(res => {
					if (res.status === "success") {
						let dingdan = res.data.dingdan || {}
						that.aftersaleLogList = res.data.aftersaleLogList || []
						that.dingdanGood = res.data.dingdanGood || {}
						that.dingdanGood.photoPath = that.$api.ip + res.data.dingdanGood.photoPath
						if (res.data.dingdanGood.norms.length > 0) {
							let norms = res.data.dingdanGood.norms
							that.dingdanGood.norms = []
							norms.forEach(item => {
								let obj = JSON.parse(item.value)
								that.dingdanGood.norms.push(obj)
							})
						}
						let shopReturnsAddress = res.data.shopReturnsAddress[0] || {}
						that.afterSale = res.data.afterSale || {}
						that.nowOverallProgress = res.data.aftersaleLogList[0] || {}
						if (res.data.dictionaryList && res.data.dictionaryList.length > 0) {
							let filterKey = ''
							if (that.afterSale.aftersaletype === '退货退款') {
								filterKey = 'RETURNSANDREFUNDS'
							}
							if (that.afterSale.aftersaletype === '换货') {
								filterKey = 'EXCHANGE'
								if (that.afterSale.reExpressnum) { //卖家已发货
									that.getShippingLogistics({
										"wlname": that.afterSale.reExpresscom,
										"wlorder": that.afterSale.reExpressnum,
										"telephone": that.afterSale.uphone
									})
								}
							}
							let dictionary = res.data.dictionaryList.filter(item => {
								return item.termName === filterKey
							})
							if (dictionary.length > 0) {
								that.dictionary = dictionary[0]
							}
						}
						
						that.shopAdressInfo = {
							consignee: shopReturnsAddress.consignee || '',
							phone: shopReturnsAddress.telephone || '',
							province: shopReturnsAddress.province,
							city: shopReturnsAddress.city,
							district: shopReturnsAddress.district,
							street: shopReturnsAddress.street,
							detailedAddress: shopReturnsAddress.detailedAddress
						}
						let userAdressInfo = {}
						if (dingdan.address && dingdan.address.value) {
							let info = JSON.parse(dingdan.address.value)
							userAdressInfo = {
								consignee: info.consignee || '',
								phone: info.telephone || '',
								address: info.area ? info.area + (info.detailedAddress || '') : ''
							}
						}
						
						getApp().globalData.userAdressInfo = userAdressInfo
						that.getJson()
						that.mescroll.endSuccess()
					} else {
						this.mescroll.endErr()
					}
				})
			},
			// 售后进度详情
			goOverallProgressDetail() {
				let that = this
				uni.navigateTo({
					url: '/pages/progressDetails/progressDetails',
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('sendAftersaleLogList', that.aftersaleLogList)
					}
				})
			},
			// 获取发货物流详情
			getShippingLogistics(params) {
				let that = this
				this.$api.post('courier/checkOrder', params).then(res => {
					if (res.status === 'success') {
						let data = JSON.parse(res.data)
						if (data) {
							let shippingLogistics = []
							let stepsList = data.Traces || []
							stepsList.reverse()
							stepsList.forEach(item => {
								shippingLogistics.push({
									title: item.AcceptStation,
									desc: item.AcceptTime
								})
							})
							that.nowShippingLogistics = shippingLogistics[0] || {}
						}

					}
				})
			},
			// 查看发货物流详情
			toLogisticsDetails() {
				getApp().globalData.logisticsType = 'shipping'
				uni.navigateTo({
					url: `/pages/logisticsDetails/logisticsDetails?wlname=${this.afterSale.reExpresscom}&wlorder=${this.afterSale.reExpressnum}&telephone=${this.afterSale.uphone}`
				})
			},
			// 去填写、修改、查看退货物流
			goReturn() {
				uni.redirectTo({
					url: `/pages/returnLogistics/returnLogistics?id=${this.afterSale.id}&expresscom=${this.afterSale.expresscom || ''}&expressnum=${this.afterSale.expressnum || ''}&telephone=${this.afterSale.uphone || ''}`
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.index-page {
		.progress-new-info {
			width: calc(100% - 80rpx);
			margin-right: 45rpx;
		}

		.good-img {
			min-width: 188.54rpx;
			width: 188.54rpx;
			height: 188.54rpx;
			border-radius: 12.5rpx;
		}

		.info-box {
			height: 188.54rpx;
		}

		.info-title {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>