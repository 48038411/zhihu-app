<template>
	<div class="container">
		<div class="box">
			<img :src=details.banner class="imgs" alt=""/>
			<h1 style="font-size: 25px; margin-left: 20px; float: left;">{{details.name}}</h1>
			<h1 style="margin-bottom: 100px; margin-top: 150px;margin-left: 100px; margin-right: 300px;float: right; font-size: 20px;
			color:#778087;"  >共有{{details.visitsCount}}  次浏览   {{details.includeCount}}次关注</h1>
		</div>
	
	</div>
</template>
<script>
  export default {
	  data() {
		  return{
			  details: {
				  
			  }
		  }
	  },
    mounted() {
	  let str = JSON.parse(localStorage.getItem("list1"));
	  console.log(str);
	  console.log(this.$router);
	  str.map(item => {
		  if(item.urlToken == this.$router.history.current.params.urlToken){
			  this.details = item
		  }
	  })
	  console.log(this.details)
    }
  }
</script>

<style style="scss" scoped>
	.test{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-ms-flex-line-pack: justify;
		align-content: space-between;
		height: 904px
	}
	.box{
		border-style: solid;
	  width: 1000px;
	  height:301px;
	  background-color:#ffffff;
	  margin-top: 100px;
	  float: left;
	  border-color: #d3d9de;
	  .time{
		  color: #999999;
		  font-size: 15px;
		  margin-left: 20px;
		  margin-top: 0px;
		  .line{
			  margin-left: 20px;
			  margin-right: 20px;
		  }
	  }
	  h1{
		  color: #1a1a1a;
		  font-size: smaller;
	  }
	  img{
		  margin-left: 0px;
		  width: 200px;
		  height: 200px;
	  }
	  .box-1{
		 width: 100px;
		  height: 20px;
		  background-color: #ebf5ff;
		  float: right;
		  color: #0084ff;
		  margin-right: 40px;
	  }
	}
	.imgs{
		margin-left: 0px;
		width: 301px;
		height: 301px;
		float: left;
	}
</style>
