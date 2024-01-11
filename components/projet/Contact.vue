
<template>
	<div class=" dark:text-black">
		<div class=" p-6 grid grid-cols-12 mx-auto ">
			<div class="flex flex-col col-span-12 pr-12 lg:col-span-3 py-11 dark:divide-gray-700">
				<h6 class="text-base py-1 text-center mb-4 bg-slate-100  text-black">{{ title_content }}</h6>
				<span>{{ description }}</span>
			</div>
			<div class="flex flex-col col-span-12 mt-11 lg:col-span-9">
				<form novalidate="" class="space-y-6">
				<div class="flex ">
					<div class="col-span-full sm:col-span-3">
						<div>
							<label for="username" class="text-xl font-bold">Nom et Prénoms *</label>
						</div>
						<input id="username" type="text"
							class="contact-input pl-2 mt-2 py-2 rounded-md border dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full ml-6 sm:col-span-3">
						<div>
							<label for="username" class="text-xl font-bold">Email *</label>
						</div>
						<input id="username" type="text"
							class="contact-input pl-2 mt-2 py-2 rounded-md border dark:border-gray-700 dark:text-gray-900">
					</div>
				</div>
				<div class="flex ">
					<div class="col-span-full sm:col-span-3">
						<div>
							<label for="username" class="text-xl font-bold">Objet du message</label>
						</div>
						<input id="username" type="Number" placeholder="Projet de construction du "
							class="contact-input pl-2 mt-2 py-2 rounded-md border dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full ml-6 sm:col-span-3">
						<div>
							<label for="username" class="text-xl  font-bold">Téléphone</label>
						</div>
						<input id="username" type="text" placeholder="+229"
							class="contact-input pl-2 mt-2 py-2 rounded-md border dark:border-gray-700 dark:text-gray-900">
					</div>
				</div>
				<div class="col-span-full">
					<div>
							<label for="username" class="text-xl  font-bold">Message</label>
						</div>
					<textarea id="bio" placeholder=""
					class="w-full contact-textarea pl-2 mt-2 py-2 rounded-md border dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<button type="submit"
					class="py-2 px-4 text-sm font-bold  dark:bg-green-700 dark:text-white">
					Envoyer</button>
			</form>
			</div>
		</div>

	</div>
</template>
  
<script setup>
const props = defineProps({
	title_content: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

</script>
  
