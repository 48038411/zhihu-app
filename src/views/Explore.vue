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
						<div id="da">
							<div id="tu"><img :src="item1.banner" /></div>
						    <div id="dh"><button style="background: transparent ; border: none;
						font-size: 26px;" @click="getDescription(item1.urlToken)">{{item1.name}}</button><br>
							<div class="des">{{item1.description}}</div>
							</div>
						</div>
				<!-- 	</div> -->
					</div>
					<div align="center"><button style="border-radius: 25px; height: 72px; background-color: #ffffff; margin-top: 100px;">
					<router-link to="/roundtables" style="color: #8590a6; font-size: 20px; text-decoration: none;">查看更多圆桌  ></router-link></button>
					</div>
				</div>
				<div class="banner">
					<img src="../assets/image/favorite.png" alt="" />
					<h1 style="margin-left: 20px;">热门收藏夹</h1>
				</div>
				<div class="container">
						<div class="box2" v-for="(item2,index) in favorites" :key="index">
							<div class="title"><b>{{item2.title}}</b></div>
							<div class="btn">关注收藏夹</div>
							<p style="margin-left: 20px; font-size: 30px;"><img :src="item2.creatorAvatar" alt="" style="width: 2.5rem; height: 2.5rem">&nbsp;{{item2.creatorName}}&nbsp;<font color="#999999" size="4">创建
							&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
							{{item2.followers}}人关注
							</font>
							</p>
							<hr style="color: #ebebeb; width: 90%;" />
							<div>
								<p style="margin-left: 20px;"><b>{{item2.questionTitle}}</b></p>
								<p style="margin-left: 20px; font-size: 20px; color: #444444;"><span class="text-oneline">{{item2.answerAuthorName}}:{{item2.answerContent}}</span></p>
								<p style="margin-left: 20px; font-size: 15px;">回答 &nbsp;{{item2.voteupCount}}赞同,{{item2.commentCount}}评论</p>
							</div>
							
							</div>
							<div align="center"><button style="border-radius: 25px; height: 72px; background-color: #ffffff; margin-top: 10px;">
							<router-link to="/favorite" style="color: #8590a6; font-size: 20px; text-decoration: none;">查看更多收藏夹 ></router-link></button>
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
				roundtable: [],
				favorites: []
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
			console.log(resp);
			localStorage.setItem("list1",JSON.stringify(resp.data.data));
		});
		this.axios.get('http://localhost:8080/api/favorite').then(respn =>{
			this.favorites = respn.data.data
			console.log(respn)
		})
	
	}
	
	}

</script>

<style lang="scss" scoped>
	  .text-oneline{
	            display:block;            /*内联对象需加*/
	            word-break:keep-all;      /* 不换行 */
	            white-space:nowrap;       /* 不换行 */
	            overflow:hidden;          /* 内容超出宽度时隐藏超出部分的内容 */
	            text-overflow:ellipsis;   /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
	        }
	.btn{
		float: right;
		background-color: #ebf5ff;
		width: 155px;
		height: 50px;
		font-size: 25px;
		text-align: center;
		color: #0084ff;
		margin-right: 20px;
	}
	.title{
		margin-top: 40px;
		margin-left: 20px;
	}
	.des{
		top: 80px;
		font-size: 14px;
		color: #550000;
	}
	#da{ 
		position:absolute;/*设置父级元素，相对定位*/
		}
	#tu,#dh { 
		position:absolute;/*设置子元素绝对定位*/
		}
	#dh{ /*设置文字盒子的样式*/
		top:70px;	/*相对于父级元素，向下移10px*/
		left: 30px;
		width:300px; /*设置文字盒子的宽度，这里设置其和图片宽度一致*/
		height:40px;
		// line-height:40px;/*设置行高和高度一样，可以实现单行元素，在垂直方向上的居中*/
		// text-align:center;/*设置文字水平居中*/
		// background-color:#FFF;/*设置盒子背景颜色为白色*/
		// opacity:0.6;/*设置背景颜色透明度为0.6*/
		}

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
		-ms-flex-negative: 0;
		flex-shrink: 0;
	  width: 600px;
	  height:400px;
	  background-color: #ffffff;
	  margin: 25px 0 25px 15px;
	  float: left;
	  img{
		 width: 600px;
		 height: 600px;
	  }
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
