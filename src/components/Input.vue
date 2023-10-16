<script>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid/index.js";

export default {
	name: "Input",
	props: ['handleSearch'],
	data(){
		return {
			term: ""
		}
	},
	methods: {
		onSubmit(e){
			this.handleSearch(this.term);
			this.term = "";
		}
	},
	components: { MagnifyingGlassIcon }
}
</script>

<template>
	<form v-on:submit.prevent="onSubmit" action="" class="relative">
		<input v-model="term" type="text" class="w-64 px-4 pl-8 py-1.5 bg-gray-800 text-sm rounded-full" placeholder="Search">
		<MagnifyingGlassIcon class="absolute top-1 ml-2 mt-1 text-gray-500 w-4" />
	</form>
</template>

<style scoped>

</style>