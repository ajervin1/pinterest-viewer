
<script>

import Test from "../components/Test.vue";
import CardList from "../components/CardList.vue";
import NavBar from "../components/NavBar.vue";
import { searchPins } from "../../requests.js";


export default {
	name: "Home",
	components: { NavBar, CardList, Test },
	data(){
		return {
			pins: [],
		}
	},
	methods: {
		async handleSearch(term){
			const data = await searchPins(term);
			this.pins = data;
		}
	}
}
</script>

<template>
	<main class="home">
		<NavBar  :handleSearch="this.handleSearch"   />
		
		<CardList v-if="pins.length" :pins="this.pins" />
	</main>
</template>

<style >

</style>