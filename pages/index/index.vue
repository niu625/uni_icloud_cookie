<template>
	<view class="wrap">
		<NavBar></NavBar>
	</view>
</template>

<script>
	export default {
		data() {
			name:'首页'
			return {
				title:'首页'
			}
		},
		methods: {
			changeMsg(value){
				this.msg = value
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
