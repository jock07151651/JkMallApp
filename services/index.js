// 定义常用常量
const BASE_URL = 'http://backend-api-01.newbee.ltd'
const TIME_OUT = 60000
// 封装网络请求类
class JKRequest{
	request(url,method,data){
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method : method || "GET",
				timeout: TIME_OUT,
				data : data,
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject("err=>:",err)
				}
			})
		})
	}
	
	get(url,params){
		return this.request(url,'GET',params)
	}
	
	post(url,data){
		return this.request(url,"POST",data)
	}
}
export default new JKRequest