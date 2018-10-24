<template>
 	<div class="slide-container">
		<swiper :options="swiperOption" class="index-slide-container">
			<swiper-slide v-for="item of list" :key="item.id">
					<img class="slide-img" :src="item.imgUrl"/>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {
  	 list: Array
  },
  data () {
  	 return {	
  	 	swiperOption: {
  	 		loop: true,
            autoplay:2500,
  	 		pagination: '.swiper-pagination'
  	 	}
  	 }
  } 
}
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
.swiper-pagination >>> .swiper-pagination-bullet-active /* >>> 深入到子组件起作用*/ 
  background: #fff
.slide-container
 width: 100%
 overflow: hidden
 height: 0
 padding-bottom: 26.25% /*根据元素的宽度*/
.slide-img
  width: 100%
</style>
