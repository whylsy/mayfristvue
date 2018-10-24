<template>
<!--一个组件只能暴露一个根元素，故将包于div中-->
<div class="main">
	<index-header></index-header>
	<index-swiper :list="swiperInfo"></index-swiper>
	<index-icons :list="iconsInfo"></index-icons>
	<scroller class="scroller" :sights="sights"></scroller>
</div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons  from './icons'
import Scroller  from './scroller'
export default {
  name: 'index',
  components: {
  	IndexHeader, 
  	IndexSwiper,
  	IndexIcons,
  	Scroller
  },
  data () {
  	return {
  		swiperInfo: [],
  		iconsInfo: [],
  		sights: []
  	}
  },
  computed: {
  	 ...mapState(['city'])
  },
  watch: {
	city () {
		this.getIndexData()
	}
  },
  methods: {
  	  ...mapMutations(['changeCity']),
  	  getIndexData () {
  	  	  axios.get("/api/index.json?city=" + this.city)
  	  	       .then(this.handleGetDataSucc.bind(this))
  	  	       .catch(this.handleGetDataErr.bind(this))
  	  },
  	  handleGetDataSucc (res) {
  	  	 res = res ? res.data : null
  	  	 if(res && res.ret && res.data){
//	  	 	res.data.city && (this.changeCity(res.data.city))
			res.data.swiperList && (this.swiperInfo = res.data.swiperList)
  	  	  	res.data.iconList && (this.iconsInfo = res.data.iconList)
//	  	  	res.data.sights && (this.sights = res.data.sights)
  	  	  } else {
  	  	  	 this.handleGetDataErr('error')
  	  	  }
  	  },
  	  handleGetDataErr () {}
  },
//methods: {
//	  getIndexData () {
//	  	  axios.get("/api/index.json")
//	  	       .then(this.handleGetDataSucc.bind(this))
//	  	       .catch(this.handleGetDataErr.bind(this))
//	  },
//	  handleGetDataSucc (res) {
//	  	  const data = res.data.data
//	  	  this.swiperInfo= data.swiperList
//	  	  this.iconsInfo = data.iconList
//	  },
//	  handleGetDataErr () {
//	  	 console.log('error')
//	  }
//},
  created () {
  	 this.getIndexData()  
  }
}
</script>
<style scoped lang="stylus">
.main
 display: flex
 flex-direction: column
 position: absolute
 top: 0
 left: 0
 bottom: 0
 right: 0
.scroller
 flex: 1
 overflow: hidden
</style>
