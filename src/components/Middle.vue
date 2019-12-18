<template>
	<div class="middle">
		<div class="bar">
			<router-link to="/blog">博客</router-link>
			<router-link to="/tool">小工具</router-link>
			<router-link to="/board">留言板</router-link>
		</div>
		<router-view class="show"></router-view>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
	.bar{
		height: 40px;
		line-height: 40px;
		font-size: 0;
		background-color: #336699;
	}
	.bar a{
		text-decoration: none;
		color: white;
		display: inline-block;
		width: 80px;
		text-align: center;
		font-size: 16px
	}
	.bar .router-link-active{
		color: #FFFF99;
		font-size: 18px;
	}
	.show{
		background-color: pink;
	}
</style>