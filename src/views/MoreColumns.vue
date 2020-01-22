<template>
    <div id="more-columns">
        <div class="nav">
            <div class="nav-bar">
              <router-link to="home">  <div class="nav-bar-left">知乎</div></router-link>
                <div class="nav-bar-right">
                    <span><button class="nav-bar-btn"><i class="fa fa-edit edit-icon"></i>写文章</button></span>
                    <span><svg class="Zi Zi--Dots" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                              fill-rule="evenodd"></path></svg></span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="header">
              <div class="header-div">
                  <img src="../assets/image/zhihu-columns-bg.png" alt="背景图">
              </div>
               <div class="header-info">
                   <div class="heard-title">随心写作，自由表达</div>
                   <div class="header-btn"><button>开始写文章</button></div>
                   <div class="header-a"><a href="">申请开通专栏</a><i class="fa fa-angle-right"></i></div>
                   <div class="info-button">
                       <ul>
                           <li style="list-style-type: none">专栏</li>
                           <li>发现</li>
                       </ul>
                   </div>
               </div>
            </div>
         <div class="body">

             <div class="content">
             <div class="card" v-for="(moreColumn,index) in pageColumns" :key="index">
                 <div class="card-header">
                     <div class="avatar">
                         <img :src="moreColumn.imageUrl" alt="头像">
                     </div>
                 </div>
                 <div class="card-body">
                     <div  class="card-title" >
                         <a href="">{{ moreColumn.title  }}</a>
                     </div>

                     <div class="card-info">
                         {{ moreColumn.description }}
                     </div>
                     <div class="count">
                         <span class="count-span">{{ moreColumn.followers}}关注</span><span class="count-span">{{ moreColumn.articlesCount}}文章</span>
                     </div>
                     <div class="card-button">
                         <input type="button" value="进入专栏">
                     </div>
                 </div>
             </div>
             </div>
             <div class="content-bottom">
               <button class="content-button-btn" @click='getBatch()'><i class="fa fa-refresh"></i>换一换</button>
                        
                 <div class="content-bottom-title">
                  在知乎创作
                 </div>
                 <div class="content-bottom-btn"><button>申请专利</button></div>

             </div>
             <div class="footer">
                 2020年，知乎，知乎专栏，圆桌发现，移动应用，使用机构账号登录，联系我们，来知乎工作
             </div>
         </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MoreColumns",
        data(){
            return{
                moreColumns:[],
                pageColumns: [],
				count: 0
            };
        },
        created() {
			this.getColumns()
        },
        methods: {
			getColumns(){
				this.axios({
					methods: 'get',
					url: 'http://localhost:8080/api/columns/all'
				}).then(res =>{
					this.moreColumns = res.data.data;
					this.pageColumns=this.moreColumns.slice(this.count,this.count + 8);
					console.log(this.pageColumns)
				});
			},
			getBatch(){
				this.count += 8;
				this.pageColumns = this.moreColumns.slice(this.count,this.count+8);
				if(this.count+7>=this.moreColumns.length){
					this.count=0;
				}
			}

        }
    }
</script>

<style lang="scss" scoped>
@import url("../assets/css/style.css");
@import url("../assets/css/basic.css");
#more-columns{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.nav{
    margin-top: -7px;
       position: fixed;
       z-index:8;
        width: 100%;
        height: 52px;
        background:#fff;
        background-clip: border-box;
        background-clip: content-box;
        -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-shadow: 0 1px 3px
        rgba(26,26,26,.1);
        .nav-bar{
           text-align: justify-all;
            height: 52px;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 1000px;
            padding: 0 16px;
            margin: 0 auto;
            .nav-bar-left{
                height: 30px;
                width: 64px;
                color:#0084ff;
                font-size: 30px;

            }
            .nav-bar-right{
                float: right;
                margin-top: -20px;
                .nav-bar-btn{
                    margin-top: -10px;
                    color: #0084ff;
                    padding: 0 16px;
                    font-size: 14px;
                    line-height: 32px;
                    text-align: center;
                    cursor: pointer;
                    background: none;
                    border: 1px solid #0084ff;
                    border-radius: 3px;
                    i{
                        font-weight: bold;
                        margin-right: 5px;
                    }
                }
                span:last-child{
                    margin-left: 10px;
                    position: absolute;
                    margin-top: -3px;
                    color: #999;
                }


            }
        }
        }
.container{
    background:#eee;
    position: absolute;
    margin:0 auto;
    text-align: center;
    width: 100%;
    .header{
        width: 100%;
        background:#eee;
        text-align: center;
        margin: 0 auto;
        height: 400px;
        .header-div{
            margin: 0 auto;
            padding: 0 auto;
            overflow: hidden;
            height: 100%;
            width:60%;
            img{

                width: 570px;
                height:  700px;
                margin: 0 auto;
            }

        }
        .header-info{
            text-align: center;
            height: 200px;
            width: 400px;
            position: absolute;
            margin-top: -370;
            margin-left:520px;
            z-index: 5;
            .heard-title{
                width:300px;
                height: 30px;
                margin: 0 50px;
                color: #1a1a1a;
                font-size: 18px;
                font-weight: 300;
                letter-spacing: .5em;
                line-height: 24px;
                text-align: center;
            }
            .header-btn{
                border-color: #444;
                box-sizing: border-box;
                color: #444;
                height: 38px;
                left: 50%;
                line-height: 36px;
                margin-top: 20px;
                button{
                    width: 120px;
                    display: inline-block;
                    padding: 0 16px;
                    font-size: 14px;
                    line-height: 32px;
                    color: #444;
                    text-align: center;
                    cursor: pointer;
                    background: none;
                    border: 1px solid #444;;
                    border-radius: 3px;
                }
            }
            .header-a{
                margin-top: 15px;
                font-size: 14px;
                line-height: 12px;
                color: #11a668;
                a{
                    color: #11a668;
                }
                i{
                    margin-left: 10px;

                }
            }
            .info-button{
                height: 30px;
                display: flex;
                color: #1a1a1a;
                font-size: 14px;
                line-height: 22px;
                font-weight: 600;
                font-synthesis: style;
                text-align: center;
                padding-bottom: 15px;
                margin-top: 20px;
                ul{
                    display: flex;
                   padding-left: 150px;
                    li:last-child{
                        margin-left: 30px;
                    }
                }
            }
        }


    }
    .body{
        position: absolute;
        width:100%;
       height: 2000px;
        background: #eee;
        .content-button-btn{
            color: #444;
            display: inline-block;
            padding: 0 16px;
            font-size: 14px;
            line-height: 32px;
            cursor: pointer;
            background: none;
            border: 1px solid #444 ;
            border-radius: 3px;
            outline: none;
            margin-top: 780px;
            i{
                margin-right: 5px;
            }
        }
    }
    .content{
        position: absolute;
        margin:180px 260px;
        padding: 0 30px;
        width: 1000px;
        background:#eee;
        text-align: center;
        .card{
            margin-top: 20px;
            text-align: center;
            padding: 28px 24px;
            box-sizing: border-box;
            width: 206px;
            height: 264px;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
            box-shadow: 0 1px 3px 0
            rgba(26,26,26,.1);
            background-color: #fff;
            margin-left: 20px;
            float: left;
            .card-header{
                text-align: center;
                .avatar {
                    width: 48px;
                    height: 48px;
                    margin: 0 auto;

                    img {
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .card-body{
                width: 100%;
                .card-title{
                    margin-top:10px;
                    height: 22px;
                    line-height: 22px;
                    font-size: 16px;
                    max-width: 187px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 600;
                    font-synthesis: style;
                    text-align: center;
                    a{
                        color: inherit;
                        text-decoration: none;
                    }

                }
                .count{
                    margin-top: 4px;
                    height: 17px;
                    line-height:17px;
                    color: grey;
                    font-size: 14px;
                    margin-top: 14px;
                    span:first-child{
                        padding-right: 4px;
                        border-right: 1.3px solid gray;
                    }
                    .count-span{

                    }
                }
                .card-info{
                    margin-top: 7px;
                    height: 40px;
                    line-height: 21px;
                    color: grey;
                    font-size: 14px;
                    text-align: center;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-button{
                    input[type=button]{
                        color: #11a668;
                        display: inline-block;
                        padding: 0 16px;
                        font-size: 14px;
                        line-height: 32px;
                        cursor: pointer;
                        background: none;
                        border: 1px solid #11a668 ;
                        border-radius: 3px;
                        outline: none;
                        margin-top: 15px;
                    }
                }

            }

        }

    }
    .content-bottom-title{
        border-width: 1px 0;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 14px;
        padding: 26px 0;
        text-align: center;
        white-space: nowrap;
        width: 345px;
        border-top:1px solid #97ffd8;
        border-bottom:1px solid #97ffd8;
        margin: 120px 570px;
    }
    .content-bottom-btn{
        border-color: #444;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #444;
        line-height: 36px;
        height: 38px;
        width: 120px;
        margin: -89px 670px;
        button{
            height: 38px;
            width: 120px;
            display: inline-block;
            padding: 0 16px;
            font-size: 14px;
            line-height: 32px;
            color: #444;
            text-align: center;
            cursor: pointer;
            background: none;
            border: 1px solid #444;
            border-radius: 3px;

        }

    }
    .footer{
        color: grey;
        font-size: 12px;
        line-height: 22px;
        margin: 180px 0 60px;
        padding: 0 12px;
        text-align: center;
    }

}

</style>
