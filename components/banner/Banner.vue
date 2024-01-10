<template>
    <section>
		<div class="">
			<div
				class="banner-side  px-4 py-16 pb-24 mx-auto  lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
				<h2 class="text-4xl font-bold leadi xl:max-w-3xl dark:text-white">{{ title }}</h2>
				
			</div>
		</div>
        </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>