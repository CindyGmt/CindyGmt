<script>
	import Cookies from 'js-cookie'
	export default {
		globalData: {
			suoId: '',
			orderId: '',
			aftersaleLogList: [],
			logisticsType: '',
			shopAdressInfo: {},
			userAdressInfo: {},
		},
		onLaunch: function() {
			console.log('App Launch')
			this.getUserInfo()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getUserInfo() {
				let that = this
				this.$bridge.callmethod('getAppInfo', {}, (res) => { // geCookie为方法名
					if (res) {
						let data = JSON.parse(res)
						let cookieStr = data.cookie || ''
						let cookieArr = cookieStr.split(';')
						cookieArr.forEach(item => {
							let itemArr = item.split('=')
							let val = ''
							for (let i = 1; i < itemArr.length; i++) {
								val += itemArr[i]
							}
							// 获取用户信息、cookie
							let key = itemArr[0]
							Cookies.set(key.trim(), val)
						})
						that.globalData.suoId = data.suoId
						that.globalData.orderId = data.orderId
					}
				})

			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "@/common/css/common.less";
</style>