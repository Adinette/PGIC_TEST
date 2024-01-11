<template>
    <section>
        <div class="flex flex-col divide-y dark:divide-gray-700">
            <h2 class="text-2xl text-green-700 font-bold mb-2">{{ title }}</h2>
            <div class="flex px-1 py-4">
                <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" :src="picture1">
                <div class="flex flex-col flex-grow">
                    <p class="mt-auto text-xs dark:text-gray-400">{{ description }}</p>
                    <a rel="noopener noreferrer" href="#" class="font-semibold text-green-700 flex mt-2">
                        <img class="mr-2" src="/images/home/Rectangle.png">
                        Consulter
                    </a>
                </div>
            </div>
            <div class="flex px-1 py-4">
                <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" :src="picture1">
                <div class="flex flex-col flex-grow">
                    <p class="mt-auto text-xs dark:text-gray-400">{{ description }}</p>
                    <a rel="noopener noreferrer" href="#" class="font-semibold text-green-700 flex mt-2">
                        <img class="mr-2" src="/images/home/Rectangle.png">
                        Consulter
                    </a>
                </div>
            </div>
            <div class="flex px-1 py-4">
                <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" :src="picture1">
                <div class="flex flex-col flex-grow">
                    <p class="mt-auto text-xs dark:text-gray-400">{{ description }}</p>
                    <a rel="noopener noreferrer" href="#" class="font-semibold text-green-700 flex mt-2">
                        <img class="mr-2" src="/images/home/Rectangle.png">
                        Consulter
                    </a>
                </div>
            </div>
            <div class="flex px-1 py-4">
                <img alt="" class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" :src="picture1">
                <div class="flex flex-col flex-grow">
                    <p class="mt-auto text-xs dark:text-gray-400">{{ description }}</p>
                    <a rel="noopener noreferrer" href="#" class="font-semibold text-green-700 flex mt-2">
                        <img class="mr-2" src="/images/home/Rectangle.png">
                        Consulter
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    picture1: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});
</script>