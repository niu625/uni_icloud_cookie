<template>
	<view class="wrap">
		<NavBar></NavBar>
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	export default {
		data() {
			name:'首页'
			return {
				title:'首页',
				labelList:[]
			}
		},
		onLoad() {
			this._intiLabelList()
		},
		methods: {
			_intiLabelList() {
				uniCloud.callFunction({
					name: "get_label_list",
					success:(res)=> {
						this.labelList = res.result.labelList
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
