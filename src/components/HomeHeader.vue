<template>
    <div id="home-header">
      <div class="home-nav">
        <img class="NewYearimage" src="https://static.zhihu.com/heifetz/assets/NewYear2020Banner.e5ccc19d.png">
        <div class="recommend">
         <ul class="home-nav-ul">
              <li class="home-nav-item"><router-link to="/home/recommoned">推荐</router-link></li>
              <li class="home-nav-item"><router-link to="/home/follow">关注</router-link></li>
              <li class="home-nav-item"><router-link to="/home/hot">热榜</router-link></li>
          </ul>
		  </div>
      </div>
        <!--二级路由入口-->
        <router-view/>
    </div>

</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="scss" scoped>
	.home-nav-item{
		font-size: 18px;
		padding-top: 16px;
		padding-left: 35px;
	}
	.home-nav-ul{
		display: flex;
		list-style: none;
	}
	.recommend{
		margin-top: 1%;
		background-color: #FFFFFF;
		width: 650px;
		height: 60px;
	}
	.NewYearimage{
		padding-top: 5px;
		width: 100%;
		height: 49%;
	}
.home-nav{
	width: 650px;
	height: 150px;
	background-color: #eeeeee
}
	a{
		position: relative;
		color: #8590a6;
	}
	a:hover{
		color: #1a1a1a;
	}
	// 路由激活样式,跳到哪里字变深，颜色变黑
	.router-link-active{
		color: #444;
		font-weight: 600;
	}
	.router-link-active:after{
		position: absolute;
		left: 0;
		right: 0;
		top: 35px;
		height: 3px;
		content: '';
		color: #44446e;
		font-weight: 600;
		background-color: #0084ff;
	}
</style>
