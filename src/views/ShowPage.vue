<script>
import { HeartIcon, ArchiveBoxArrowDownIcon, BookmarkIcon } from '@heroicons/vue/24/solid'
import { getSingleItem } from "../../requests.js";
import NavBar from "../components/NavBar.vue";
// closeup_unified_description
export default {
	name: "ShowPage",
	components: {
		NavBar,
		HeartIcon,
		ArchiveBoxArrowDownIcon,
		BookmarkIcon
	},
	data() {
		return {
			pin: null,
			pinId: null,
			imgUrl: "https://i.pinimg.com/750x/5d/73/8a/5d738a3dcea222de9ab30b4e5378fc66.jpg"
		}
	},
	computed: {
		original_pinner(){
			return this.pin.origin_pinner
		},
		pin_join(){
			return this.pin.pin_join
		},
		created_at(){
			return this.pin.created_at
		},
		visual_objects(){
			return this.pin.visual_objects.filter(visual => {
				if ( visual.title){
					return visual.title;
				}
			})
		},
		title() {
			if ( this.pin.description.trim() ) {
				return this.pin.description
			} else if ( this.pin.title.trim() ) {
				return this.pin.title
			} else {
				return "Card Title"
			}
		}
	},
	async created() {
		const id = this.$route.params.id;
		this.pinId = id;
		const data = await getSingleItem(id);
		this.pin = data;
	}
}

</script>

<template>
	<main class="show">
		<NavBar />
		<section class="border-b border-gray-800">
			<div v-if="this.pin" class="container mx-auto px-4 py-16 flex">
				<!-- Pin Image -->
				<div class="image-container flex-none">
					<img :src="this.pin.images.orig.url" alt="poster" class="w-64 lg:w-96 rounded shadow-2xl">
				</div>
				<!-- Pin Info -->
				<div class="pin-info md:ml-24">
					<h2 class="text-4xl font-semibold">{{ title }}</h2>
					<p class="text-gray-400 mt-2">{{ pin.closeup_unified_description }}</p>
					<!-- Info-top -->
					<div class="flex flex-wrap items-center text-gray-400 text-md mt-2">
						<HeartIcon class="h-5 w-5 relative bottom-[1.2px] text-red-400"/>
						<span class="ml-1">{{ pin.reaction_counts["1"] }} Likes</span>
					</div>
					
					<!-- User Pin Info -->
					<div class="flex items-center gap-4 mt-4">
						<img class="h-12 w-12 rounded-full" :src="original_pinner.image_medium_url" alt="">
						<div>
							<h4 class="text-white font-semibold">{{ original_pinner.username }}</h4>
							<p class="text-gray-400 text-sm">{{ original_pinner.follower_count }} followers</p>
						</div>
						
					</div>
			
					<!-- Info middle -->
					<p class="text-gray-300 mt-8 mb-4">
						{{ pin.seo_description }}
					</p>
					<!-- Pin tags -->
					<span  v-for="tag in visual_objects" class="py-1 px-3 bg-red-800 text-sm font-semibold rounded-full mr-1">
						{{ tag.title }}
					</span>
					<!-- Info bottom Pin Actions -->
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
	</main>
</template>

<style scoped>

</style>