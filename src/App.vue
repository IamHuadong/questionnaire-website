<template>
	<div class="main">
		<div class="head">
			<div class='bg'>
				<div class='title'>
					<h2>陈华东的个人网站</h2>
				</div>
			</div>
		</div>
		<div class='content'>
			<div class='left'>
				<div class='title'>个人介绍</div>
				<div class='texts'>
					<introduction></introduction>
				</div>
			</div>
			<div class='middle'>
				<div class='title'>博客</div>
				<div class='texts'>
					构建中...
					<h1>网站初建，只为展示项目经历，日后慢慢完善</h1>
				</div>
			</div>
			<div class='right'>
				<div class='title'>项目经历</div>
				<div class='texts'>
					前端项目：
					<ul>
						<li><b><a href="http://localhost:8080/eleme.html" target='_blank'>高仿饿了么</a></b></li>
						<li><a href="http://localhost:8080/questionnaire.html" target='_blank'>调查问卷</a>(计划中...)</li>
					</ul>
					github地址：
					<a href="https://github.com/IamHuadong" target='_blank'>https://github.com/IamHuadong</a>
				</div>
			</div>
		</div>
		<div class='footer'>个人邮箱：chd1994@foxmail.com</div>
	</div>
</template>
<script>
import introduction from '../src/components/introduction.vue'
export default{
	components:{
		introduction
	}
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
	.main
		position relative
		width 100%
		height 100%
		.head
			position relative
			width 100%
			height 150px
			.bg
				height 120px
				width 100%
				background url("../src/AppImages/header.jpg") no-repeat
				background-size 100% 100%
				.title
					position relative
					height 120px
					width 100%
					background-color rgba(255,255,255,0.3)
					h2
						position absolute
						width 220px
						height 60px
						line-height 60px
						text-align center
						top 0
						right 0
						bottom 0
						left 0
						margin auto
		.content
			position absolute
			width 100%
			top 120px
			bottom 40px
			background linear-gradient(rgba(50,150,180,0.2),white)
			display flex
			border-top 2px solid black
			.left
				flex 0 0 400px
				border-right 1px solid black
			.middle
				margin 0 20px
				flex 1
				border-left 1px solid black
				border-right 1px solid black
			.right
				flex 0 0 400px
				border-left 1px solid black
				.texts
					padding 10px
					li
						margin-top 10px
					a
						text-decoration none
						color black
						&:link
							color black
						&:visited
							color green
						&:hover
							color red
			.title
				width 100%
				text-align center
				color white
				background-color rgb(100,100,100)
				line-height 30px
		.footer
			position absolute
			bottom 0
			height 40px
			width 100%
			line-height 40px
			color white
			text-align center
			background-color rgb(40,40,40)
</style>