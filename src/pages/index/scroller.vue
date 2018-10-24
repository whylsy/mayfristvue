<template>
  <div ref="scroller">
	  <div class="content">
	  	<transition name="loading">
	  		<div v-show="isLoading" class="loading">正在加载...</div>
	  	</transition>
		    	<router-link class="item" 
		    							 v-for="item in list" 
		    							 :key="item.id" 
		    							 :to="'/detail/' +item.id "
		    							 tag="div">
			       <img class="item-img" v-lazy="item.imgUrl"/>
			        <div class="item-content">
			        	<p class="item-title">{{item.title}}</p>
			        	<p class="item-desc">{{item.desc}}</p>
			        	<p class="item-price">
			        		<span class="price-tag">&yen;</span>
			        		{{item.price}}
			        		<span class="price-start">起</span>
			        	</p>
			        </div>
		     </router-link>  
	  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
	props:{
		sights: Array
	},
  name: 'index-scroller',
  data () {
  	 return {
  	 	 moreSights: [],
  	 	 isLoading: false,
  	 	 isFetching: false,
  	 	 pageNum:1
  	 }
  },
  watch: {
  	list() {
  	  this.$nextTick(()=>{
  	  	    this.scroller.refresh()
  	  })
  	}
  },
  computed: {
  	list() {
  		 return this.sights.concat(this.moreSights)
  	},
  	...mapState(['city'])
  },
  created () {
  	 this.getListInfo()
  },
  methods: {
  	createScroller () {
  		  this.scroller = new BScroll(this.$refs.scroller, {
  		  	probeType:3
  		  })
  	},
  	 bindEvents () {
  	 	 this.scroller.on('scroll',this.handleScroll.bind(this))
  	 	 this.scroller.on('scrollEnd',this.handleScrollEnd.bind(this))
  	 },
  	 handleScroll (e) {
  	 	if(e.y>60 && !this.isLoading){
  	 		this.getListInfo()
  	 		this.isLoading = true
  	 	}
  	 },
  	 handleScrollEnd () {
  	 	  this.isLoading = false
  	 },
		getListInfo () {
			if(!this.isFetching) {
				this.isFetching = true
				axios.get('/api/sightlist.json?city='+this.city +'&page='+this.pageNum)
			 	.then(this.handleGetListSucc.bind(this))
			 	.catch(this.handleGetListErr.bind(this))
			} 	
		 },
		 handleGetListSucc(res) {
		 	 res && (res = res.data)
		 	 if(res.data) {
		 	 	  if(res.data.list) {
		 	 	  	 this.moreSights = this.moreSights.concat(res.data.list)
		 	 	  	 this.pageNum +=1
		 	 	  }
		 	 	  this.isFetching = false
		 	 }else{
		 	 	  this.handleGetListErr('error')
		 	 }
		 },
		 handleGetListErr() {
		  	this.isFetching = false
		 	  console.log('erro')
		 }
	  },
	  mounted () {
	  	 this.createScroller()
	  	 this.bindEvents();
	  },
	  activated() {
		   this.scroll && this.scroll.refresh()
	 }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
.loading
 line-height: 1.2rem
 text-align: center
 color: $lightFontColor
.loading-enter-active, .loading-leave-active 
  transition: opacity .5s;
.loading-enter, .loading-leave-to
  opacity: 0;
.item
 display: flex
 padding: 1rem	
 height: 10rem
.item-img
 display: block
 float: left
 width: 8.3rem
 height: 8.3rem
 margin-right: 1rem
.item-content
 flex: 1
.item-title
 margin: 1.2rem 0 0.5rem 0
 font-size: 1.6rem
 color: $fontColor
.item-desc
 margin-bottom: 0.6rem
 font-size: 1rem
 color: $lightFontColor
.item-price
 font-size: 2rem
 color: $enlightFontColor
.price-tag
 font-size: 1.3rem
.price-start
 font-size: 1.3rem
</style>