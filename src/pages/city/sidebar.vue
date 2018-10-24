<template>
	<div class="sidebar">
	  <div class="sidebar-list" ref="list">
	    <div class="sidebar-item" 
	    	 v-for="(item,index) in alphabet" 
	    	 :key="item"
	    	 @touchstart="handleTouchStart(item)"
	    	 @touchmove="handleTouchMove">{{item}}</div>
	  </div>
	</div>
</template>

<script>
	export default {
		name:'city-sidebar',
		props: {
			list: Object
		},
		computed: {
			alphabet () {
				const arr = []
				for (let i in this.list) {
					arr.push(i)
				}
				return arr
			},
			areaTop () {
				return this.$refs.list.offsetTop - this.$refs.list.offsetHeight /2+81
			}
		},
		methods: {
			handleTouchStart(item) {
				this.$emit("changeLetter",item)
			},
			handleTouchMove(e) {
				let index = (Math.floor((e.touches[0].clientY - this.areaTop) / 20))
				index = index < 0 ? 0 : index
				index = (index >= this.alphabet.length) ? (this.alphabet.length - 1) :index
				this.$emit("changeLetter",this.alphabet[index])
			}
		}
	}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl";
.sidebar
 position: absolute
 top: 6.62rem
 bottom: 0
 right: 0
 width: 1.2rem
 .sidebar-list
   height: auto
   width: 100%
   position: absolute  
   top: 68%
   transform: translateY(-68%)
   .sidebar-item
     width: 100%
     text-align: center
     line-height: 2.2rem
     font-size: 1.4rem
     color: #666
</style>