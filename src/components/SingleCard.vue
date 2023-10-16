<script>
import { HeartIcon, ArchiveBoxArrowDownIcon, BookmarkIcon } from '@heroicons/vue/24/solid'

export default {
	name: "SingleCard",
	components: {
		HeartIcon,
		ArchiveBoxArrowDownIcon,
		BookmarkIcon
	},
	data() {
		return {
			imgUrl: "https://i.pinimg.com/750x/5d/73/8a/5d738a3dcea222de9ab30b4e5378fc66.jpg"
		}
	}
}

</script>

<template>
	<section class="pin-info-container border-b border-gray-800">
		<div class="container mx-auto px-4 py-16 flex">
			<!-- Pin Image -->
			<div class="image-container flex-none">
				<img :src="imgUrl" alt="poster" class="w-64 lg:w-96 rounded shadow-2xl">
			</div>
			<!-- Pin Info -->
			<div class="pin-info md:ml-24">
				<h2 class="text-4xl font-semibold">Pin Title</h2>
				<!-- Info-top -->
				<div class="flex flex-wrap items-center text-gray-400 text-md mt-2">
					<HeartIcon class="h-5 w-5 relative bottom-[1.2px] text-red-400"/>
					<span class="ml-1">10 Likes</span>
				</div>
				<!-- Info middle -->
				<p class="text-gray-300 mt-8">
					Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime numquam possimus provident
					velit. Est, officiis!
				</p>
				<!-- Info bottom -->
				<div class="mt-12">
					<h4 class="text-white font-semibold text-lg mb-4">Pin Actions</h4>
					<button
						 class="px-5 py-2 inline-flex items-center rounded font-semibold  bg-purple-500 text-gray-100 hover:bg-purple-600 transition ease-in-out duration-150">
						<ArchiveBoxArrowDownIcon class="w-5 mr-2"/>
						<span>Download Pin</span>
					</button>
					<button class="ml-8 px-5 py-2 inline-flex items-center rounded font-semibold  bg-red-800 text-white ">
						<BookmarkIcon class="w-5 mr-2"/>
						Save Pin
					</button>
				</div>
			</div>
		
		</div>
	
	</section>
</template>

<style scoped>

</style>