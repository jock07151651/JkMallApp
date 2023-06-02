<template>
	<view class="home">
		home
		<view class="banner">
			{{banners}}
		</view>
		<view class="remmends">
			{{remmends}}
		</view>
	</view>
</template>

<script setup>
import {getHomeBannerData} from '@/services/home.js'
import {onLoad} from '@dcloudio/uni-app'
import {useHomeStore} from '@/store/home.js'
import {storeToRefs} from 'pinia'

const homeStore = useHomeStore()
let {banners,remmends} = storeToRefs(homeStore)

onLoad(()=>{
	// 直接调用services/home.js
	getHomeBannerData().then(res => {
		console.log("banner:",res.data.carousels);
	})
	// 使用pinia状态管理存放请求后的数据
	homeStore.getHomeBannerDataAction()
})
</script>

<style>
	
</style>
