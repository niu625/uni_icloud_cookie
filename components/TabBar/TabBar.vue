<template>
	 <view class="tab">
	 	<!-- 滚动区域 -->
	 	<scroll-view class="tab-scroll" scroll-x="true">
	 		<view class="tab-scroll-box">
	 			<view @click="navClickFn(index)" :class="{active:activeIndex === index}" v-for="(item, index) in labelList" :key="index" class="tab-scroll-item">{{ item.name}}</view>
	 		</view>
	 	</scroll-view>
	 	<view class="tab-icons">
	 		<uni-icons @click="goLabelAdmin" type="gear" size="26" color="#666"></uni-icons>
	 	</view>
	 	<!-- 设置图标 -->
	 </view>
</template>

<script>
	export default {
		props: {
			labelList: Array
		},
		name:"TabBat",
		data() {
			return {
				activeIndex:0
			};
		},
		methods:{
			goLabelAdmin() {
				uni.navigateTo({
					url: "/pages/labelAdmin/labelAdmin"
				})
			},
			navClickFn(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "./css/TabBar.scss";
</style>
