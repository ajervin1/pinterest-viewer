<script>
// import { ThumbUpIcon, HeartIcon, EyeIcon } from "@vue-hero-icons/solid"
import { HeartIcon } from '@heroicons/vue/24/solid'
import { pins } from "../mock_data.js";

const pinData = pins[0].images.orig.url
export default {
	name: "CardItem",
	props: [ 'pin' ],
	components: {
		HeartIcon,
	},
	computed: {
		text() {
			if ( this.pin.description.trim() ) {
				return this.pin.description
			} else if ( this.pin.title.trim() ) {
				return this.pin.title
			} else {
				return "Card Title"
			}
		}
	}
	
	
}
</script>

<template>
	<article class="mt-8">
		<RouterLink :to="{path: `/pins/${pin.id}`}">
			<img :src="pin.images.orig.url" alt="hot image">
		</RouterLink>
		
		<div class="info mt-2 ">
			<!-- User Info Top -->
			<div class="flex items-center justify-between">
				<h4 class="text-lg text-white hover:text-gray-300">{{ this.text }}</h4>
				<div class="flex items-center  gap-2 mt-1">
					<HeartIcon class="h-[14px] w-[14px] relative bottom-[1.2px] text-white"/>
					<span class="text-gray-400 text-sm relative">{{ pin.reaction_counts["1"] }}</span>
				</div>
			</div>
		</div>
	</article>
</template>

<style>

</style>