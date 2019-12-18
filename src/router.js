import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './components/middle/Blog.vue'

Vue.use(VueRouter)

const routes = [
	{path: '/', redirect: '/blog'},
	{path: '/blog', component: Blog},
]

export default new VueRouter({
	routes
})