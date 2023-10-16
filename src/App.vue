
<script>
// import { ThumbUpIcon, HeartIcon, EyeIcon } from "@vue-hero-icons/solid"


import NavBar from "./components/NavBar.vue";

export default {
	name: "App",
	components: { NavBar }
}
</script>

<template>
	<div class="main-container bg-gray-900 min-h-screen text-white font-serif">
		<NavBar />
		<router-view ></router-view>
	</div>
</template>

<style scoped>

</style>