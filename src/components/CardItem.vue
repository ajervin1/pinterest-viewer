<script>
// import { ThumbUpIcon, HeartIcon, EyeIcon } from "@vue-hero-icons/solid"
import { HeartIcon } from '@heroicons/vue/24/solid'
import { pins } from "../mock_data.js";

const pinData = pins[0].images.orig.url
export default {
	name: "CardItem",
	props: ['pin'],
	components: {
		HeartIcon,
	}

 
}
</script>

<template>
	<article class="mt-8">
		<img :src="pin.images.orig.url" alt="hot image">
		<div class="info mt-2 ">
			<!-- User Info Top -->
			<div class="flex items-center justify-between">
				<h4 class="text-lg hover:text-gray-300">{{ pin.title || "Card Title" }}</h4>
				<div class="flex items-center  gap-2 mt-1">
					<HeartIcon  class="h-[14px] w-[14px] relative bottom-[1.2px] text-white" />
					<span class="text-gray-400 text-sm relative">22</span>
				</div>
			</div>
		
		
		</div>
	</article>
</template>

<style >

</style>