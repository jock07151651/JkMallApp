import JKRequest from './index.js'

export function getHomeBannerData(){
	return JKRequest.get('/api/v1/index-infos',{})
}