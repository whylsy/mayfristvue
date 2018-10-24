<template>
	<div class="search-wrapper">
		<div>
			<div class="search">
				   <input class="search-input" type="text" placeholder="输入城市名或拼音" @input="handInputChange"/>
			</div>
			<div class="search-list" v-show="showList" ref="list">
				<ul>
					<li class="search-item border-bottom" v-for="item in filterResult">{{item.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'search',
		props: {
			list: Object
		},
		data () {
			return {
				 showList: false,
				 filterResult: []
			}
		},
		computed: {
			result () {
				const result = []
				for(let i in this.list) {
					this.list[i].forEach((value)=>{
						result.push({
							name: value.name,
						})
					})
				}
				return result
			}
		},
		watch: {
			filterResult () {
				this.$nextTick(()=>{
//					this.scroll.refresh()
				})
			}
		},
		methods: {
			handInputChange (e) {
				const value = e.target.value.toLowerCase()
				if(value) {
					this.showList = true
					this.filterResult = this.result.filter((item) =>{
						if(item.name.indexOf(value) > -1){
							return true
						}
					})
				}else{
					this.showList = false
				}				
			}
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.list)
		}
	}
</script>

<style scoped lang="stylus">
@import "../../assets/stylus/varibles.styl";
.search-wrapper
 z-index: 1
.search
 width: 100%
 height: 3rem
 background: $bgColor
 padding: 0 1rem;
 box-sizing: border-box
.search-input
 height: 2.3rem
 width: 100%
 border: none
 box-sizing: border-box
 padding:0 1.2rem
 text-align: center
 font-size: 1.4rem
 color: $fontNormalColor
 border-radius: 0.3rem
.search-list
 position: absolute
 overflow: hidden
 z-index: 1
 top: 6.4rem
 left: 0
 right: 0
 bottom: 0
 background: #f5f5f5
.search-item
 padding-left: 0.8rem
 line-height: 2.2rem
 font-size: 1.4rem
 background: #fff
 color: #333
</style>