<template>
	<div class="container">
		<div class="banner" ref="box">
			<h3>个人中心</h3>
			<div class="banner-box">
				<img src="../assets/image/zhihu-columns-bg.png" ref="img" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'people',
		data() {
			return {
				// 主色
				dominant: '',
				// 副色
				secondary: ''
		};
	},
	created() {
		this.$nextTick(() => {
			let box = this.$refs.box;
			let img = this.$refs.img;
			RGBaster.colors(img, {
				success: function(payload) {
					console.log('主色:' + payload.dominant + ',次色' + payload.secondary);
					this.dominant = payload.dominant;
					this.secondary = payload.secondary;
					// 当前主色设置为背景颜色
					box.style.background = this.dominant;
				}
			});
		});
			}
			};
</script>

<style lang="scss" scoped>
	.container {
		position: relative;
		width: 80%;
		margin: 0 auto;
		.banner {
			display: flex;
			align-items: center;
			text-align: center;
			height: 200px;
			background-color: #ccc;
			h3 {
				flex: 0 0 40%;
				color: #fff;
			}
			.banner-box {
				flex: 0 0 60%;
				height: 100%;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
