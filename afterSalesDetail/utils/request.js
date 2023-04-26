let commoneUrl = process.env.VUE_APP_BASE_URL; //公共路径 

if(process.env.NODE_ENV === 'development'){
	commoneUrl = '/devapi/'
}

//post请求封装
function postRequest(url,data){
	var promise = new Promise((resolve,reject) => {
		var postData = data;
		uni.request({
			url:commoneUrl + url,
			data:postData,
			method:'POST',
			// dataType:"jsonp",
			// jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
			// jsonpCallback:"success_jsonpCallback",
			header:{'content-type':  'application/json;charset=UTF-8'},
			success:function(res){
				resolve(res.data);
			},
			error:function(e){
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"GET",
				dataType:'json',
				header:{ 'content-type': 'application/json'},
				success:function(res){
					resolve(res.data);
				},
				error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//put请求封装
function putRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"PUT",
				dataType:'json',
				header:{
					'content-type': 'application/json'},
				success:function(res){
					resolve(res.data);
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//del请求封装
function delRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"DELETE",
				dataType:'json',
				header:{
					'content-type': 'application/json'},
				success:function(res){
					resolve(res.data);
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
module.exports = {
    post: postRequest,
    get: getRequest,
	put: putRequest,
	del: delRequest,
	ip: commoneUrl
};

