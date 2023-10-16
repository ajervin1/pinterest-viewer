<script>
import CardItem from "./CardItem.vue";
import { HeartIcon } from '@heroicons/vue/24/solid'

export default {
	name: "CardList",
	components: { CardItem },
	props: ['pins'],
	computed: {},
	methods: {},
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