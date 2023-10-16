<script>
import { pins } from "../mock_data.js";
import CardItem from "./CardItem.vue";

export default {
	name: "CardList",
	components: { CardItem },
	props: {
		name: String,
	},
	computed: {},
	methods: {},
	data() {
		return {
			pins: pins
        }
	},
	created() {
		/* Fetch Here */
	},
	beforeMount() {
	}
}
</script>

<template>
    <section class="container mx-auto px-4 pt-16">
        <section class="card-list">
            <h2 class="uppercase tracking-wider text-purple-500 text-lg font-semibold">Search Results</h2>
            <!--Card List-->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div v-for="pin in pins">
                   <CardItem :pin="pin" />
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>

</style>