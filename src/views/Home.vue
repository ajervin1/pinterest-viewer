<script src="../../requests.js"></script>
<script>

import Test from "../components/Test.vue";
import CardList from "../components/CardList.vue";
import NavBar from "../components/NavBar.vue";


export default {
	name: "Home",
	components: { NavBar, CardList, Test },
	data(){
		return {
			pins: [],
			
		}
	},
	methods: {
		handleSearch(term){
		
		}
	}
}
</script>

<template>
	<main>
		<NavBar  :handleSearch="this.handleSearch"   />
		<CardList />
	</main>
</template>

<style >

</style>