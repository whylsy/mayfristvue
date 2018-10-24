<template>
	<div class="icons">
	   <swiper :options="swiperOption" class="index-icons">
			<swiper-slide v-for="(page,index) in pageList" :key="page.index">
			  <div class="area-con">
			  	  <div class="area-item" v-for="item in page" :key="item.id">
			  	  	   <img class="area-img" :src="item.imgUrl" alt="" />
			  	  	   <p class="area-desc">{{item.title}}</p>
			  	  </div>
			  </div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'index-icons',
		props: {
			list: Array
		},
		 data () {
	  	 return {	
	  	 	swiperOption: {
	  	 		pagination: '.swiper-pagination'
	  	 	}
	  	 }
	  },
	  computed: {
	  	 pageList () {
	  	 	 const pages = [];
	  	 	 this.list.forEach((value,index) =>{
	  	 	 	 const page = Math.floor(index/8)
	  	 	 	 if(!pages[page]){
	  	 	 	 	pages[page] = []
	  	 	 	 }
	  	 	 	 pages[page].push(value);
	  	 	 })
	  	 	 return pages
	  	 }
	  }	  
	}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
.swiper-pagination
 bottom:0rem
.swiper-pagination >>> .swiper-pagination-bullet-active /* >>> 深入到子组件起作用*/ 
  background: $bgColor
.index-icons
 overflow: hidden
 height: 0
 width: 100%
 padding-bottom: 15.3rem
/*.icons
 width: 100%
 height: 15.3rem*/
.area-con
 display: flex
 flex-wrap: wrap 
.area-item
 width:25%
 height: 6.6rem
 padding-top:0.8rem
 text-align: center
.area-img
 display: block
 width: 3.7rem
 height: 3.7rem
 margin: 0 auto
.area-desc
 overflow: hidden
 white-space: nowrap
 text-overflow: ellipsis
</style>