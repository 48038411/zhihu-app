<template>
	<div>
		<div class="banner">
			<img src="../assets/image/book.png" alt="" />
			<h1 style="margin-left: 30px">最新专题</h1>
		</div>
		<div class="container">
				<div class="box" v-for="(item,index) in table" :key="index">
					<div><img  :src="item.banner" alt="" /></div>
					<div>
					<h1 style="margin-left: 20px;">
					{{item.title}}              
					<div class="box-1">
						关注专题
					</div>
					</h1>
					<span class="time">
					{{item.updated}}更新，{{item.viewCount}}次浏览
					  <p style="margin-left: 20px;"> {{item.introduction}}</p>
					<hr class="line" />
		</span>
					</div>
				</div>
				<div align="center"><button style="border-radius: 25px; height: 72px; background-color: #ffffff; ">
				<router-link to="/special/all" style="color: #8590a6; font-size: 20px; text-decoration: none;">查看更多专题  ></router-link></button>
				</div>
		</div>
		<div class="banner">
			<img src="../assets/image/flower.png" alt=""/>
			<h1 style="margin-left: 20px;">圆桌讨论</h1>
		</div>
		<div class="container">
				<div class="box2" v-for="(item1,index) in roundtable" :key="index">
					<div style="position: relative; width: 170px; height: 89px;">
					<img  :src="item1.banner" alt="">
					<span style="position: absolute; top: 40px; left: 10px; color: #ffffff;">
						<button style="background: transparent ; border: none;
						font-size: 26px;" @click="getDescription(item1.urlToken)">{{item1.name}}</button>
						</span>
					</div> 
					</div>
				</div>
				
		</div>
	</div>
</template>

<script>
	export default{
		name: 'explore',
		data() {
			return {
				table: [],
				roundtable: []
			};
	},
	methods: {
		getDescription(urlToken){
	this.$router.push({
		path:`/roundTable/${urlToken}`,
	})			
		}
	
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res => {
			console.log(res);
			this.table = res.data.data;
			localStorage.setItem("list",JSON.stringify(res.data.data));
		});
		this.axios.get('http://localhost:8080/api/roundtable/recent').then(resp =>{
			this.roundtable = resp.data.data;
			localStorage.setItem("list1",JSON.stringify(resp.data.data));
		});
	
	}
	}

</script>

<style lang="scss" scoped>
	.box{
	  width: 600px;
	  height: 500px;
	  background-color: #f6f6f6;
	  margin: 25px 0 25px 15px;
	  float: left;
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
		  width: 600px;
		  height: 300px;
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
	.box2{
	  width: 600px;
	  height: 300px;
	  background-color: #f6f6f6;
	  margin: 25px 0 25px 15px;
	  float: left;
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
		  width: 600px;
		  height: 300px;
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
</style>
