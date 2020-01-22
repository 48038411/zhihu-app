<template>
	<div>
		  <div> <!-- sticky wrapper, IMPORTANT -->
		<van-sticky>
			<div class="nav gutter">
				<div :class="navBarFixed == true ? 'navBarWrap' :''">
					<ul :class="navBarFixed == true ? 'navBarWrap' :''">
					<li style="text-decoration: none;"><a href=""><img src="../assets/image/logo.png" width="90px" height="40px" alt="知乎"></a></li>
					  <li><b><router-link to="/home">首页</router-link></b></li>
					  <li><router-link to="/explore">发现</router-link></li>
					  <li><router-link to="/question/waiting">等你来答</router-link></li>
					  <li><router-link to="/special/all">查看全部</router-link></li>
					  <li><router-link to="/login">登录</router-link></li>
				</ul>
			
				</div>
			</div>
		</van-sticky>
		  </div>
		<!-- 二级路由入口 -->
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {};
		},
		mounted() {
			 // 事件监听滚动条
			      window.addEventListener('scroll', this.watchScroll)
		},
		methods: {
		      watchScroll () {
		        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		        //  当滚动超过 50 时，实现吸顶效果
		        if (scrollTop > 49) {
		          this.navBarFixed = true
		        } else {
		          this.navBarFixed = false
		        }
		     }
		},
		created() {}
	}
	
</script>

<style lang="scss" scoped>
	.navBarWrap {
	    position:fixed;
	    top:0;
	    z-index:999;
		height: 50px;
		margin-left: 30px;
	  }

	body{
		margin: 0;
	}
	
	ul {
		position: -webkit-sticky;
		    // position: fixed;
			margin-left: 30px;
		    top: 0;
		    background:#ccc;
		    padding:10px 0;
		// margin-top: 1000px;
	 //    list-style-type: none;
	 //    margin: 0;
	 //    padding: 0;
	 //    overflow: hidden;
	 //    background-color: #ffffff;
		// height: 100px;
		list-style-type: none;
		    margin: 0;
		    padding: 0;
		    overflow: hidden;
		    background-color: #ffffff;
		    width: 100%;
	}
	li {
		// width: 90%;
		font-size: larger;
		margin-top: 10px;
		margin-left: 50px;
	    float: left;
	}
	
	li a {
	    display: block;
	    color: black;
	    text-align: center;
	    padding: 14px 16px;
	    text-decoration: none;
	}
	li img{
		text-decoration: none;
	}

	.router-link-active{
		color: black;
		border-bottom: 5px solid #0084ff;
		text-decoration: none;
	}
	.nav-bar{
		 position: sticky;
		   position: -webkit-sticky;    // 兼容 -webkit 内核的浏览器
		   top: 10px;                          // 必须设一个值，否则不生效
	}
// 	.gutter{
// 		position: relative;
// 		margin-bottom: 10px;
// 	}
// 	​
// 	ul {
// 	    list-style-type: none;
// 	    margin: 0;
// 	    padding: 0;
// 	    overflow: hidden;
// 	    background-color: #55aaff;
// 	}
	
// 	li {
// 	    float: left;
// 	}

// li a {
//     display: block;
//     color: black;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
// }

// li a:hover:not(.active) {
//     background-color: #ed5564;
// }

// .active {
//     background-color: #4CAF50;
// }
</style>
