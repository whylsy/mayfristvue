<template>
	<div class="fixed-title" v-show="show" ref="title">当前位置</div>
</template>

<script>
	export default {
		name:"fixed-title",
		data () {
			return {
				show:false
			}
		},
		methods:{
			setShow(flag) {
				this.show = flag
			},
			setMove(num) {
				 this.$refs.title.style.top= (78-num)+'px'
			}
		}
	}
</script>

<style lang="stylus" scoped>
.fixed-title
  position: fixed
  top: 4.2rem
  left: 0
  right: 0
  line-height: 2.8rem
  padding-left: 1rem
  font-size: 1.4rem
  background: #eee
  color: #616161
</style>
