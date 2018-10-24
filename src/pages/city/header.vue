<template>
	<div class="header">
		<div class="title">
		  <div class="back iconfont" @click="handClick">&#xe64e;</div>
			城市选择
		</div>
	</div>
</template>

<script>
	export default {
		name:'city-header',
		methods: {
			 handClick () {
			 	 this.$router.go(-1)
			 }
		}
	}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl";
.title
 position: relative
 height: 3.6rem
 line-height: 3.6rem
 background: $bgColor
 text-align: center
 font-size: 1.6rem
 color: #fff
.back
 position: absolute
 top: 0
 left: 0
 width: 3.5rem
 line-height: 3.7rem
 font-size: 2rem
</style>