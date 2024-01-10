<template>
    <section>
        <div class="mx-40 my-6">
            <div class=" px-4 py-8 mx-auto md:px-10 lg:px-32 bg-teal-50 dark:text-gray-900">
                <h2 class="text-4xl font-bold text-center mb-10 leadi xl:max-w-3xl  dark:text-green-700">{{ title }} 
                </h2>
                <p>{{ description }} </p>
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
    description: {
      type: String,
      required: true,
    },
  },
};

</script>