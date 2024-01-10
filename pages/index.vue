<template>
	<section>
		<div class="">
			<div
				class="home-banner   flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
				<h1 class="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-white">La mairie de Zogbodomey,</h1>
				<p class="mt-10 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white">Une administration communale au service
					de sa population</p>
			</div>
		</div>

		<div class="banner flex mx-auto justify-center">
			<div>
				<img src="~/assets/images/home/banner.png" alt="" class="banner-image mb-12  dark:bg-gray-500">
			</div>

			<div class="banner-block bg-black mb-12 py-11 pl-3 ">
				<h3 class="text-lg font-semibold leadi dark:text-white">07 OCT 2023</h3>
				<p class="mt-6 text-2xl xl:max-w-3xl dark:text-white">Réception provisoire de deux modules
					de 3
					salles de classes à Hon : le conseil communal
					de Zogbodomey prouve...</p>
				<button class="btn-banner px-6 mt-2 font-semibold dark:bg-amber-400 dark:text-white" style="">LIRE LA
					SUITE</button>
			</div>

		</div>
	</section>
	<About />
	<Stats />
	<section>
		<div class="flex p-8 justify-between">
			<h5 class="text-3xl font-bold leadi text-green-700">Services populaires
			</h5>
			<a href="" class="text-lg text-black font-semibold">Tous les services</a>
		</div>
		<div class=" p-6 mx-auto grid justify-center grid-cols-2 space-x-6 lg:grid-cols-3">
			<Service v-for="service in services" :key="service.id" :content="service.content" :price="service.price"
				:description="service.description" :liste1="service.liste1" :liste2="service.liste2"
				:liste3="service.liste3" :liste4="service.liste4" :liste5="service.liste5" :liste6="service.liste6"
				:link1="service.link1" :link2="service.link2" />
		</div>
	</section>
	<Join />
	<Projet />
	<More />
	<Document />
	<Patner />
	<Subscribe />
</template>

<script>
import Service from "../components/services/Service.vue"
export default {
	components: {
		Service,
	},
	setup() {
		return {

			services: [
				{
					content: "Dépôt de signature",
					price: "350 F CFA",
					description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  ",
					liste1: "n neque diam donec m cras consectetur bibendum",
					liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
					liste3: "Lorem ipsum dolor sit amet consectetur. ",
					liste4: "Lorem ipsum dolor sit amet consectetur. ",
					liste5: "Lorem ipsum dolor sit amet consectetur. ",
					liste6: "Lorem ipsum dolor sit amet consectetur. ",
					liste11: "Lire Plus",
					liste12: "Faire une demande",
				},
				{
					content: "Dépôt de signature",
					price: "350 F CFA",
					description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  ",
					liste1: "n neque diam donec m cras consectetur bibendum",
					liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
					liste3: "Lorem ipsum dolor sit amet consectetur. ",
					liste4: "Lorem ipsum dolor sit amet consectetur. ",
					liste5: "Lorem ipsum dolor sit amet consectetur. ",
					liste6: "Lorem ipsum dolor sit amet consectetur. ",
					liste11: "Lire Plus",
					liste12: "Faire une demande",
				},
				{
					content: "Dépôt de signature",
					price: "350 F CFA",
					description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.  ",
					liste1: "n neque diam donec m cras consectetur bibendum",
					liste2: "adipiscing. Metus vel tristique morbi aenean laor.",
					liste3: "Lorem ipsum dolor sit amet consectetur. ",
					liste4: "Lorem ipsum dolor sit amet consectetur. ",
					liste5: "Lorem ipsum dolor sit amet consectetur. ",
					liste6: "Lorem ipsum dolor sit amet consectetur. ",
					liste11: "Lire Plus",
					liste12: "Faire une demande",
				},

			],
		};
	},
}
</script>