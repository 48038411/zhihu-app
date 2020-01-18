<template>
	<div>
		  <div> <!-- sticky wrapper, IMPORTANT -->
		<van-sticky>
			<div class="nav gutter">
				<div class="nav-bar">
					<ul>
					  <li><router-link to="/home">首页</router-link></li>
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
		created() {}
	}
	
</script>

<style lang="scss" scoped>
	body{
		margin: 0;
	}
	
	ul {
		position: -webkit-sticky;
		    position: fixed;
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
		font-size: larger;
		margin-top: 10px;
		margin-left: 100px;
	    float: left;
	}
	
	li a {
	    display: block;
	    color: black;
	    text-align: center;
	    padding: 14px 16px;
	    text-decoration: none;
	}

	.router-link-active{
		color: black;
		border-bottom: 2px solid #000000;
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
