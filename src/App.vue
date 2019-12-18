<template>
	<div>
		<div class='head'>
			<Weather v-show='isDisplay'></Weather>
			<h3 class="title">chd个人网站</h3>
			<span class="account login-click" @click="isLogin = true;isRegister=false">登录</span>
			<span class="account register-click"  @click="isLogin = false;isRegister=true">注册</span>
		</div>
		<div class="body">
			<div class='left' v-show='isDisplay'>空白</div>
			<Middle></Middle>
			<div class='right' v-show='isDisplay'>广告</div>
		</div>
		<div class='footer'>
			联系邮箱：chd1994@foxmail.com
		</div>
		<Login v-if="isLogin" @closeCur="isLogin=false"></Login>
		<Register v-if="isRegister" @closeCur="isRegister=false"></Register>
	</div>
</template>
<script>
	import Weather from './components/Weather.vue'
	import Login from './components/Login.vue'
	import Register from './components/Register.vue'
	import Middle from './components/Middle.vue'
	export default {
		data:()=>{
			return {
				// 自适应屏幕尺寸
				isDisplay: true,
				// 登录显示
				isLogin: false,
				// 注册显示
				isRegister: false,
			}
		},
		components:{
			Weather,
			Login,
			Register,
			Middle,
		},
		created(){
			// 首次加载时，浏览器视图宽度较小则不显示两边
			let width = window.innerWidth;
			// 宽度小于850px不显示
			this.isDisplay = (width < 850) ? false :true;
		}
	};
</script>
<style scoped>
	/*头部*/
	.head{
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: rgb(34,34,34);
		color: white;
	}
	.head .weather{
		position: absolute;
		padding: 0 5px;
	}
	.head .title{
		display: inline;
	}
	.head .account{
		position: absolute;
		text-decoration: underline;
	}
	.head .account:hover{
		color: rgb(170, 255, 255);
		cursor: pointer;
	}
	.head .login-click{
		right: 50px;
	}
	.head .register-click{
		right: 10px;
	}
	/*主体*/
	.body{
		display: flex;
		height: 600px;
		padding: 20px 0;
		background-color: rgb(221,221,221);
	}
	.body .left{
		flex: 0 0 200px;
		margin-left: 10px;
		margin-right: 20px;
		height: 300px;
		background-color: white;
	}
	.body .middle{
		flex:1 1 100%;
		background-color: white;
	}
	.body .right{
		flex:0 0 200px;
		margin-left: 20px;
		margin-right: 10px;
		height: 500px;
		background-color: white;
	}
	/*脚部*/
	.footer{
		height:60px;
		line-height: 60px;
		background-color: black;
		color: white;
		text-align: center;
	}
</style>