<template>
	<view class="nav-bar">
	  <view class="nav-bar-top">
	    <view :style="{height:statusHeight + 'rpx'}"></view>
	    <view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}">
	      <uni-icons class="nav-bar-search-icon" type="search" color="#999"></uni-icons>
	      <view class="nav-bar-search-txt">输入文章标题进行搜索</view>
	    </view>
	  </view>
	  <!-- 底部垫片 -->
	  <view :style="{height:80 + statusHeight + 'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",
		data() {
			return {
				statusHeight: 40,
				marginRight: 0,
			};
		},
		created() {
			this.getSystemInfo()
		},
		methods:{
			getSystemInfo(){
				const systenInfo = uni.getSystemInfoSync()
				systenInfo.statusBarHeight && (this.statusHeight = systenInfo.statusBarHeight *2)
				/* 如果是小程序的换，进行胶囊处理*/
				// #ifdef MP-WEIXIN
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.marginRight = menuButtonInfo.width * 2
				this.statusHeight = menuButtonInfo.top * 2
				// #endif
			},
			goSearchPage () {
			  uni.navigateTo({
			    url: '/pages/search/search'
			  })
			}
		}
	}
</script>

<style lang="scss">
 @import "./css/NavBar.scss"
</style>
