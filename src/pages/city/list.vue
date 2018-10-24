<template>
   <div ref="wrapper">
	<div class="list">
		<div class="area" ref="current">
			<div class="title border-topbottom">当前位置</div>
			<div class="content">
			   <div class="button" @click="handleCityClick(city)">
				   	<div class="button-text button-active">
				   		{{city}}
				   	</div>
			   </div>
			</div>
		</div> 
		<div class="area" ref="hotcity">
			<div class="title border-topbottom">热门城市</div>
			<div class="content">
			   <div class="button" 
			   	    v-for="item in hotcity"
			   	    @click="handleCityClick(item.city)">
				   	<div class="button-text" 
				   		 :class="{'button-active':item.city === city}">
				   		 {{item.city}}
				   	</div>
			   </div>
			</div>
		</div> 		
		<div class="area" v-for="(item,key) in list" :ref="key">
			<div class="title border-topbottom">{{key}}</div>
			<div class="content">
			   <div class="content-item border-bottom" 
			   	    v-for="innerItem in item"
			   	    @click="handleCityClick(innerItem.name)">
			   	    {{innerItem.name}}
			   </div>
			</div>
		</div> 		
	</div>
  </div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import BScroll from 'better-scroll'
	export default {
		name:'list',
		props: {
			list: Object,
			hotcity: Array
		},
		computed: {
			areaPositions() {
				const arr = []
				arr.push(this.$refs.current.offsetTop)
				arr.push(this.$refs.hotcity.offsetTop)
				for(let i in this.list){
					arr.push(this.$refs[i][0].offsetTop) 
				}
				return arr
			},
			...mapState({
				 city (state) {
				 	 return state.city || '北京'
				}
			})
		},
//		watch: {
//			list () {
//			 console.log(this.list)
//			}
//		},
		methods: {
			handleCityClick (city) {
				this.changeCity(city)
				this.$nextTick(()=>{
					this.$router.push('/')
				})
			},
			scrollToIndex (item) {
			   this.scroll.scrollToElement(this.$refs[item][0])
		    },
		    handleScroll (e){
		    	const y = -e.y
		    	let flag = false
		    	for(var i=0;i<this.areaPositions.length;i++){
		    	   if(y>this.areaPositions[i]-27 && y<this.areaPositions[i]){
		    	   	const diff = y - this.areaPositions[i]+27
		    	   	
		    	   	
		    	   	flag = true
		    	   	this.$emit('fixchange',diff)
					break;    	   	
		    	   }
		    	}
		    	!flag && this.$emit('fixchange')
		    	this.$emit("scroll",e)
		    },
			...mapMutations(['changeCity'])
		},
		mounted () {
			 this.scroll = new BScroll(this.$refs.wrapper,{
			 	probeType:3
			 })
			 this.scroll.on('scroll',this.handleScroll.bind(this))
		},
		//解决better-scroll 无法滚动的解决办法
		activated() {
		   this.scroll && this.scroll.refresh()
	 }
	}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl";
.area
   margin: 1rem 0 1rem 0
 .title
	 line-height: 2.8rem
	 font-size: 1.4rem
	 padding-left: 1rem
	 background: #eee
	 color: #616161
 	&::before,&::after
	   border-color: #616161
 .content
	 overflow: hidden
	 padding:0.6rem 0.8rem 0 0.4rem
  .button
	  float: left
	  width: 33.33%
	  .button-text
	   line-height: 2rem
	   border: 0.1rem solid #999
	   margin: 0.4rem
	   border-radius: 0.4rem
	   text-align: center
	  .button-active
	   color: $bgColor
	   border-color: $bgColor
	 .content-item
	   line-height: 2.2rem
	   margin: 0 0 0 0.4rem
	   font-size: 1.5rem
	   color: #212121;
	   overflow: hidden;
	   text-overflow: ellipsis;
	   white-space: nowrap;
</style>