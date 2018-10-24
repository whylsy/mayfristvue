<template>
	<div class="gallary" @click='handleGallaryClose'>
		<swiper class="container">
			<swiper-slide v-for="(item,index) of imgList" :key="index">
					<img class="gallary-img" :src="item"/>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default {
		props: {
			imgList: Array,
			default: []
		},
		name: 'gallary',
		methods: {
			handleGallaryClose () {
				 this.$emit('close')
			}
		}
	}
</script>

<style lang="stylus" scoped="">
.gallary
 position: fixed
 top: 0
 bottom: 0
 left: 0
 right: 0
 background: #000
 .container
  position: absolute
  .gallary-img
    width: 100%
</style>