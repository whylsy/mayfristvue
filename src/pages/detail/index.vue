<template>
  <div>
    <banner :bannerImg="bannerImg" :imgList="imgList">111</banner>
  </div> 
</template>

<script>
import Banner from './banner'
import axios from 'axios'
export default {
	name: 'detail',
	props: {
		 sightId :[Number,String]
	},
	data(){
		return {
		    bannerImg :	'',
		    imgList : []
		}
	},
	components: {
		Banner
	},
	created () {
		this.getDetailInfo()
	},
	watch: {
		'$route' () {
			if(this.sightId){
				this.getDetailInfo
			}
		}
	},
	methods: {
		getDetailInfo () {
			axios.get('./api/detail.json',{
				  params: {
				  	id: this.sightId
				  }
			})
			.then(this.handleGetDetailSucc.bind(this))
			.catch(this.handleGetDetailErr.bind(this))
		},
		handleGetDetailSucc (res) {
			//边界条件的判断
		  res && (res = res.data)
		  if(res && res.ret && res.data){
		  	this.bannerImg = res.data.bannerImg
		  	this.imgList = res.data.imgList
		  }else{
		  	this.handleGetDetailErr('error')
		  }
		},
		handleGetDetailErr () {
			 console.log('error')
		}
	}
}
</script>

<style scoped lang="stylus">
</style>
