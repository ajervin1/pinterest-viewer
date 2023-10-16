import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/Home.vue";

const routes = [
	{
		path: '/',
		component: Home,
		name: "Home"
	},

]
const router = createRouter({
	history: createWebHistory(),
	routes
})
createApp(App)
.use(router)
.mount('#app')
