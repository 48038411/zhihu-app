<template>
	<div class="body">
		<meta name="viewport" content="width=1024(这里写你指定宽度)">
		<div class="banner" >
			<img src="../assets/image/flower.png" alt="">
			<h1>圆桌讨论详情页</h1>
		</div>
		<div v-for="(roundTable,index) in roundTables" :key="index" class="roundTable">
			<div class="col4">
				<img :src="roundTable.banner" alt="" class="img1">
				<h3>{{roundTable.name}}</h3>
				<h3>该圆桌被浏览{{roundTable.visitsCount}}次</h3>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'roundTables',
		data(){
			return{
				roundTables:[]
			};
		},
		created(){
			this.axios.get('http://localhost:8080/api/roundtable').then(res =>{
				console.log(res);
				this.roundTables = res.data.data;
			})
			
		}
	}
</script>
	
<style lang="scss" scoped>
	.body{
		margin-right: 100px;
	}
	h3{
		font-size: 13px;
		color: #999999;
	}
	.img1{
		width: 12.5rem;
		height: 12.5rem;
		
	}
	.col4{
		float: left;
		margin-right: 25px;
	}
	.roundTable{
		width: 100%;
		margin-left: 200px;
		display: block;
		margin-top: 1px;
		background-color: #FFFFFF
		
	}
	.banner {
		width: 100%;
		margin-bottom: 10px;
		margin-top: 80px;
		height: 100px;
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px 5px #ddd;
		display: flex;
		align-items: center;
		img {
			height: 100%;
		}
	}
	
</style>