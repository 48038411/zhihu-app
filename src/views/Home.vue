<template>
    <div id="home">
        <div class="container">
          <div class="left">
              <div class="banner">
                  <!--头部导航栏-->
                  <HomeHeader></HomeHeader>
              </div>

          </div>
        </div>
        <div class="right">
            <div class="right">
                <HomeRight></HomeRight>
            </div>
        </div>
    </div>
</template>

<script>
    /*引入头部组件*/
    import HomeHeader from '../components/HomeHeader.vue'
   /* 引入右边栏组件*/
    import  HomeRight from '../components/HomeRight.vue'
    export default {
        name: "specials",
        data() {
            return {
                specials: [],
            };
        },
        /*组件*/
        components:{
        HomeHeader, /*头部导航栏*/
        HomeRight

        },
        created() {
            this.axios.get('http://localhost:8080/api/specials/all').then(res => {
                console.log(res);
                this.specials = res.data.data;
            });
        }
    };
</script>

<style lang="scss" scoped>
	/*.NewYearimage{*/
		/*width: 50%;*/
		/*height: 10%;*/
	/*}*/
    #home{
        width: 100%;
        background: #eee;
        margin: 0  auto;
        display: flex;

    }

    .container{
        width: 54%;
        color: black;
        padding-left:30px;
        margin-left: 10%;

        .left{
            width: 100%;
            .banner{
                width: 100%;

            }
        }
        .right{
            width: 30%;
			margin-top: 50px;
            margin-left: -10%;
        }


    }

    h3{
       margin-top: 40px;
        margin-left: -20;
    }
    .row{

        width: 100%;
       .content{
           display: flex;
           min-height:100px;
       }
        .bottom{
            margin-top: 0;
            scroll-padding: 20px;
            .meta{
                color: #8590a6;
            }
        }
    }
    .col-4{
        min-height:100px;
        img{
            width: 190px;
            height: 105px;
        }
    }
    .col-8{
        margin-top: 0;
        padding-left: 20px;
        min-height:100px;
    }
.right{
   position: absolute;
    left:64%;
    top:40px;
    width: 300px;
}
</style>
