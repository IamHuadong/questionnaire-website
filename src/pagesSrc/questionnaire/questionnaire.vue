<template>
	<div>
		<div id='title'>{{title}}</div>
		<div v-for="question in questions">
			<ul>
				<span>{{question.constitution}}({{question.type}}型)</span>
				<li v-for="item in question.items">{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default{
	data(){
		return {
			title:'',
			questions:[]
		}
	},
	created(){
		axios.get('questionnaireStatic/data.json').then(res=>{
			this.title=res.data.questionnaires[0].title;
			this.questions=res.data.questionnaires[0].questions;
		});
	}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	
</style>