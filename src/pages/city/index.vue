<template>
	<div class="main">
	   <city-header></city-header>
	   <search :list="list"></search>
	   <list class="list" 
	   	     :list="list" 
	   	     :hotcity="hotcity" 
	   	     ref="list" 
	   	     @scroll="handleListScroll"
	   	     @fixchange="handleFixChange"></list>
	   <sidebar :list="list" @changeLetter="handleLetterChange"></sidebar>
	   <fixed-title ref="fixedTitle"></fixed-title>
  </div> 
</template>

<script>
import CityHeader from './header'
import Search from './search'
import Sidebar from './sidebar'
import List from './list'
import FixedTitle from './title'
import axios from 'axios'
export default {
	name: 'city',
	data() {
		return {
			list: {},
			hotcity: []
		}
	},
	components: {
		CityHeader,
		Search,
		List,
		Sidebar,
		FixedTitle
	},
	methods: {
		getListInfo() {
			axios.get('/api/city.json')
				.then(this.handleGetListSucc.bind(this))
				.catch(this.handleGetListErr.bind(this))
		},
		handleGetListSucc(res) {
			res && (res = res.data)
			if(res && res.data) {
				res.data.list && (this.list = res.data.list)
				res.data.hotcity && (this.hotcity = res.data.hotcity)
			} else {
				this.handleGetListErr()
			}
		},
		handleGetListErr() {
			console.log("error")
		},
		handleLetterChange(item) {
			this.$refs.list.scrollToIndex(item)
		},
		handleListScroll (e) {
			this.$refs.fixedTitle.setShow(!(e.y>0))
		},
		handleFixChange (num) {
			this.$refs.fixedTitle.setMove(num || 0)
		}
	},
	created() {
		this.getListInfo()
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
 .list
  flex: 1
  overflow: hidden
</style>
