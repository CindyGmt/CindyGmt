<template>
	<view class="return-logistics-page page-box" :style="{'padding-top': '100rpx'}">
		<view class="page-nav">
			<navBox type="black" @goback="goback">填写退货物流单号</navBox>
		</view>
		<mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :top='21'
			:up="upOption" :selfMinHeight="`calc(100vh - 100rpx)`">
			<view class="page-contain" :style="{'min-height': `calc(100vh - 121rpx)`}">
				<!-- 提示语 -->
				<view class="contain-item illustrate">
					<text class="title">退货退款说明</text>
					<view class="info pa-t-23">为了更快的为您进行退款，请务必填写正确的快递单号。</view>
				</view>

				<!-- 退货物流信息填写 -->
				<view class="contain-item logistics-info">
					<uni-forms class="form-content" ref="logisticsform" :modelValue="formData" :rules="rules"
						:label-width='labelWidth'>
						<uni-forms-item label="退货快递单号" name="expressnum" style="margin-bottom: 31.25rpx;">
							<input type="text" v-model="formData.expressnum" placeholder="请输入快递单号" />
						</uni-forms-item>
						<uni-forms-item label="快递公司" name="expresscom" style="margin-bottom: 0;">
							<input type="text" v-model="formData.expresscom" placeholder="自动匹配快递公司"
								style="margin-right: 25rpx;" v-show="false" />
							<input type="text" v-model="expresscom" placeholder="自动匹配快递公司" style="margin-right: 25rpx;"
								@blur='checkWlname' />
							<view :class="['icon-img', showPopup ? 'rotate-icon' : '']" @click="showpopup"></view>
						</uni-forms-item>
					</uni-forms>
				</view>

				<!-- 退货物流详情入口 -->
				<view class="contain-item flex-box to-logistics-details" v-if="show" @click="toLogisticsDetails">
					<text class="title">退货物流详情</text>
					<view class="flex-box">
						<text class="info" style="margin-right: 7.29rpx;">查看详情</text>
						<image class="gonext" style="width: 13.82rpx;height: 23.39rpx;"
							src='../../common/img/to_next.png'>
						</image>
					</view>
				</view>
			</view>

			<button class="bg-btn" @click="submit('logisticsform')">确定</button>
		</mescroll-body>
		<!--快递公司列表  -->
		<uni-popup ref="popup" :mask-click="false">
			<view class="popup-content">
				<view class="ul-list">
					<uni-data-checkbox v-model="formData.expresscom" :localdata="wloptions"
						:map="{text:'name',value:'code'}" :multiple="false" mode="list" icon="right"
						selectedColor='#E80707' selectedTextColor='#E80707'
						@change="changeWlname"></uni-data-checkbox>
				</view>
				<button class="bg-btn" @click="close()">确定</button>
			</view>
		</uni-popup>
		<!--自己输入的快递公司没有匹配项  -->
		<uni-popup ref="popupTip">
			<text class="tip">未匹配到快递公司，请选择快递公司</text>
		</uni-popup>
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
				oldOp: {},
				formData: {},
				oldExpresscom:'',
				expresscom: '',
				telephone: '',
				rules: {
					expressnum: {
						rules: [{
							required: true,
							errorMessage: '请输入快递单号'
						}, ]
					},
					expresscom: {
						rules: [{
							required: true,
							errorMessage: '请选择或输入快递公司'
						}, ]
					}
				},
				labelWidth: 200,
				showPopup: false,
				wloptions: [],
				show: false
			};
		},
		onLoad(option) {
			this.oldOp = option
			this.init(option)
			this.getExpressList()
			let windowInfo = uni.getWindowInfo()
			this.labelWidth = (windowInfo.screenWidth / 750) * 200
		},
		methods: {
			init(option) {
				this.formData = {
					id: option.id,
					expresscom: option.expresscom,
					expressnum: option.expressnum,
				}
				this.telephone = option.telephone
				this.expresscom = this.oldExpresscom
				if (this.formData.expressnum) {
					this.show = true
				}
			},
			downCallback() {
				this.init(this.oldOp)
				this.mescroll.endSuccess()
			},
			goback() {
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			getExpressList() {
				let that = this
				this.$api.get('express/expressInfo.json').then(res => {
					that.wloptions = res;
					if (that.formData.expresscom) {
						res.forEach(item => {
							if (item.code === that.formData.expresscom) {
								that.expresscom = item.name
								that.oldExpresscom = item.name
							}
						})
					}


				})
			},
			checkWlname(e) {
				this.formData.expresscom = ''
				let val = e.detail.value
				if (!val) return
				let that = this
				this.wloptions.forEach(item => {
					if (item.name === val) {
						that.formData.expresscom = item.code
					}
				})
				if (this.formData.expresscom === '') {
					this.expresscom = ''
					this.$refs.popupTip.open('center')
				}
			},
			showpopup() {
				this.showPopup = true
				this.$refs.popup.open('bottom')
			},
			changeWlname(e) {
				this.expresscom = e.detail.data.name
			},
			close() {
				this.$refs.popup.close()
				this.showPopup = false
			},
			toLogisticsDetails() {
				getApp().globalData.logisticsType = 'return'
				uni.navigateTo({
					url: `/pages/logisticsDetails/logisticsDetails?wlname=${this.formData.expresscom}&wlorder=${this.formData.expressnum}&telephone=${this.telephone}`
				})
			},
			submit(form) {
				let that = this
				this.$refs[form].validate().then(res => {
					that.$api.post('Aftersale/newUpdateExpressById', that.formData).then(res => {
						if (res.status === "success") {
							uni.redirectTo({
								url: '/pages/index/index'
							})
						}
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	::v-deep.return-logistics-page {
		.tip {
			background-color: #fff;
			display: block;
			width: 601rpx;
			height: 200rpx;
			font-size: 25rpx;
			color: #000000;
			border-radius: 21rpx;
			line-height: 200rpx;
			text-align: center;
		}

		.form-content {

			.uni-forms-item__label {
				height: 35rpx;
				line-height: 35rpx;
				font-size: 27rpx;
				color: #000000;
			}

			.uni-forms-item__content {
				position: relative;

				uni-input {
					height: 35rpx;
					line-height: 35rpx;
					font-size: 25rpx;
					color: #999999;
					text-align: right;
				}

				.icon-img {
					width: 13rpx;
					height: 22rpx;
					background: url(../../common/img/to_next.png) no-repeat;
					background-size: cover;
					position: absolute;
					right: 0;
					top: 6rpx;
					transition: transform linear 0.3;
				}

				.rotate-icon {
					transform: rotate(90deg);
				}
			}

			.uni-forms-item__error {
				font-size: 20rpx;
				right: 0;
				left: unset;
			}
		}

		.popup-content {
			padding: 45.83rpx;
			height: 60vh;
			background: #fff;
			border-radius: 19rpx 19rpx 0 0;

			.ul-list {
				height: calc(100% - 200rpx);
				overflow: auto;
			}

			.uni-data-checklist .checklist-group .checklist-box .checklist-content .checklist-text {
				font-size: 27rpx !important;
				color: #333333;
				line-height: 90rpx !important;
			}

			.uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-text {
				color: #2979ff;
			}

			.uni-data-checklist .checklist-group .checklist-box .checklist-content .checkobx__list {
				height: 18rpx;
				width: 10rpx;
				border-color: #E80707 !important;
			}
		}
	}
</style>