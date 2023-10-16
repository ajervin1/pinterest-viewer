import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue";
import ShowPage from "./views/ShowPage.vue";
const routes = [
	{
		path: '/',
		component: Home,
		name: "Home"
	},
	{
		path: '/pins/:id',
		name: 'ShowPage',
		component: ShowPage
	}

]
const router = createRouter({
	history: createWebHistory(),
	routes
})
createApp(App)
.use(router)
.mount('#app')
