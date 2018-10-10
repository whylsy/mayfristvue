<template>
  <div class="header">
     <div class="back iconfont">&#xe64e;</div>
     <div class="search">
     	 <span class="search-icon iconfont">&#xe61e;</span>请输入搜索内容
     </div>
     <div class="city">
     	   乌鲁木齐
     </div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
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
  height: 2.5rem
  line-height: 2.5rem
  margin: 0.6rem 1rem
  padding-left: 0.8rem
  background: #fff 
  border-radius: 0.2rem
  color: #ccc
  font-size: 1.4rem
.search-icon
  position: relative
  top:0.1rem
  padding-right: 0.9rem
  font-weight: bold
.city
 padding-right: 2.2rem
 position: relative
 &:before
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
