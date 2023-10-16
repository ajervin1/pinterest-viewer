
<script>
// import { ThumbUpIcon, HeartIcon, EyeIcon } from "@vue-hero-icons/solid"
import NavBar from "./components/NavBar.vue";
import CardList from "./components/CardList.vue";
export default {
	name: "App",
	components: { CardList, NavBar }
}
</script>

<template>
	<main class="bg-gray-900 min-h-screen text-white font-serif">
		<NavBar />
        <CardList />
	</main>
</template>

<style scoped>

</style>