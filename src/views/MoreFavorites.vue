<template>
<div id="more-favorites">
    <div class="header">
       <div class="header-info">
           <i class="fa fa-star"></i><img src="../assets/image/favorite.png"/><span>热门收藏夹</span>
       </div>
    </div>
    <div class="container">
     <div class="content"  v-for="(moreFavorite,index) in moreFavorites" :key="index">
        <div class="content-div1">
            <a href="" class="title">{{ moreFavorite.title }}</a>
            <div class="creator-div">
                <ul>
                <li  style="border-radius: 5px"><img :src="moreFavorite.creatorAvatar" :alt="moreFavorite.creatorName"></li>
                <li class="li">{{ moreFavorite.creatorName}}</li>
                <li class="li" style="color: #999;">创建</li>
                </ul>
            </div>
            <div class="bottom">
                <ul>
                    <li>
                        <input type="button" value="关注收藏夹">
                    </li>
                    <li>{{ moreFavorite.followers }}人关注</li>
                   </ul>
            </div>
        </div>
         <div class="content-div2">
             <div class="div2-title"><a href="">{{ moreFavorite.questionTitle }}</a></div>
             <div class="div2-content">{{ moreFavorite.answerAuthorName }}: <div v-html="moreFavorite.answerContent"></div></div>
             <div class="div2-detail">
                 <ul>
                     <li>回答</li>
                     <li>{{ moreFavorite.voteUpCount }}赞同</li>
                     <li>{{ moreFavorite.commentCount }}.评论</li>
                 </ul>
             </div>
             <div class="div2-bottom">已收藏{{ moreFavorite.totalCount}}内容<i class="fa fa-angle-right"></i></div>
         </div>
     </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "MoreFavorites",
        data(){
            return {
                moreFavorites:[]
            }
        },
        created() {
            this.axios.get('http://localhost:8080/api/favorite/all').then(res => {
                console.log(res);
                this.moreFavorites = res.data.data;
            });
        }
    }
</script>

<style lang="scss" scoped>
    #more-favorites{
		margin-top: 100px;
        background: #eee;
        width: 100%;
        height: 100%;
    }
.header{
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    .header-info{
		margin-top: 100px;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 auto;
        width: 1000px;
        height: 100px;
    }
    i{
        color:#0084ff;
        font-size: 36px;
        margin-left: 40px;
    }
    span {
        margin-left: 12px;
        font-size: 25px;
        font-weight: 600;
        font-synthesis: style;
    }
}
.container{
    width: 1000px;
    margin: 10px auto 0;
    font-size: 15px;
    color: #1a1a1a;
    -webkit-tap-highlight-color: rgba(26,26,26,0);
    min-height: 300px;
    .content{
        margin-top: 10px;
        background: #fff;
        display: flex;
        padding: 24px;
        width: 1000px;
        height: 179px;
        box-shadow:1px 3px rgba(26,26,26,.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
        box-shadow: 0 1px 3px 0
        rgba(26,26,26,.1);
        .content-div1{
            width: 270px;
            height: 131px;

            .title{
                display: block;
                height: 24px;
                line-height: 24px;
                font-size: 16px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 600;
                font-synthesis: style;
                    color: inherit;
                    text-decoration: none;

            }
            .creator-div{
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                margin-top: 16px;
                height: 28px;
                ul{
                    margin-left: -35px;
                    display: flex;
                    list-style-type: none;
                    li:first-child{
                        margin-left: 0px;
                    }
                }
               li{
                   margin-left: 10px;
                   img{
                       border-radius: 2px;
                       height:30px;
                   }
               }
            }
            .bottom{
                margin-top: 29px;
                ul{
                    margin-left: -35px;
                    display: flex;
                    list-style-type: none;
                }
                li:last-child{
                    margin-left: 10px;
                    color: #999;
                }
                input[type=button]{
                    width: 102px;
                    height: 34px;
                    background-color: rgba(0,132,255,.08);
                    font-size: 14px;
                    color: #0084ff;
                    border-radius: 3px;
                    font-weight: 600;
                    font-synthesis: style;
                    border: none;
                    outline: none;
                }
            }
        }
        .content-div2{
            flex: 1 1;
            margin-left: 20px;
            padding-left: 20px;
            height: 131px;
            border-left: 1px solid
            #ebebeb;
            overflow: hidden;
            .div2-title{
                    display: block;
                    height: 21px;
                    line-height: 21px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 600;
                    font-synthesis: style;
                a{
                    color: inherit;
                    text-decoration: none;
                }
            }
            .div2-content{
				overflow: hidden;
				    -webkit-line-clamp: 2;
				    text-overflow: ellipsis;
                margin-top: 4px;
               min-height: 62px;
                color: #444;
                display: -webkit-box;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .div2-detail{
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                margin-top: 0px;
                padding-top:11px;
                color: #999;
                font-size: 12px;
                position: relative;
                ul{
                    margin-top: 3px;
                    margin-left: -20px;
                    display: flex;
                    list-style-type: none;
                    li{
                        margin-left: 20px;
                    }
                    li:first-child{
                        margin-left: -22px;
                        background: #eee;
                        padding: 2px;
                    }
                }
            }
            .div2-bottom{
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                margin-top: -1px;
                height: 24px;
                font-size: 14px;
                color: #8590a6;
                font-weight: 500;
                i{
                    margin-left: 10px;
                }
            }
        }
    }



}
</style>
