<template>
    <section>
        <div class="mx-40 my-6">
            <div class=" px-4 py-8 mx-auto md:px-10 lg:px-32 bg-teal-50 dark:text-gray-900">
                <p class="my-6">{{ description }} </p>
                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title1 }} 
                </h2>
                <p>{{ description1 }} </p>

                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title2 }} 
                </h2>
                <p>{{ description2 }} </p>
                
                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title3 }} 
                </h2>
                <p>{{ description3 }} </p>
                
                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title4 }} 
                </h2>
                <p>{{ description4 }} </p>
                
                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title5 }} 
                </h2>
                <p>{{ description5 }} </p>
                <h2 class="text-xl font-bold my-6 leadi    dark:text-green-700">{{ title6 }} 
                </h2>
                <p>{{ description6 }} </p>
            </div>
            
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    title1: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title6: {
      type: String,
      required: true,
    },
    description6: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    title4: {
      type: String,
      required: true,
    },
    description4: {
      type: String,
      required: true,
    },
    title5: {
      type: String,
      required: true,
    },
    description5: {
      type: String,
      required: true,
    },
});

</script>