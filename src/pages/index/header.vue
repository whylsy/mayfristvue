<template>
  <div class="header">
     <div class="back iconfont">&#xe64e;</div>
     <div class="search">
	     	<div class="search-content">
	     		<span class="search-icon iconfont">&#xe61e;</span>
	     		请输入搜索内容
	     	</div>
     </div>
     <router-link to="/city">
     		<div class="city">
     			{{city}}
     		</div>
     </router-link>
     
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index-header',
  computed: {
  	...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
.header
 display: flex
 height: 3.7rem
 line-height: 3.7rem
 background: $bgColor
 color: #fff
.back
 width: 2.4rem
 text-align: center
 font-size:1.6rem
.search
  flex: 1
.search-content
  width: 100%
  height:2.4rem
  margin-top: 0.6rem
  background: #fff
  color: #ccc
  line-height: 2.4rem
  border-radius: 0.2rem
  text-indent: 0.5em
  font-size: 1.4rem
.search-icon
  font-weight: bold
.city
 position: relative
 float: right
 max-width: 8.6rem
 padding:0 2.2rem 0 0.8rem
 overflow: hidden
 white-space: nowrap
 text-overflow: ellipsis
 color: #fff
&::before
 position: absolute
 top: 1.6rem
 right: 0.8rem
 content:''
 width: 0;
 height: 0;
 border-top: 0.6rem solid #fff;
 border-left: 0.6rem solid transparent;
 border-right: 0.6rem solid transparent;
			
</style>
	 			<!--position: relative
				  &:before
				  position: absolute
				  top: 1.6rem
				  right: 0.8rem
				  content:''
				  width: 0;
				  height: 0;
				  border-top: 0.6rem solid #fff;
				  border-left: 0.6rem solid transparent;
				  border-right: 0.6rem solid transparent;-->