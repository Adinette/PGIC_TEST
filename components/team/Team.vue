
<template>
    <div class="flex flex-col justify-center p-12 px-8 ml-6 mr-16 my-12 text-center rounded-md w-80  dark:bg-teal-50 dark:text-gray-800">
        <img alt="" class="self-center flex-shrink-0 w-52 h-52 -mt-24 bg-center bg-cover  dark:bg-gray-500" :src="imageSrc">
        <div class="flex-1 my-8">
            <p class="text-xl font-semibold leadi">{{ author }}</p>
            <p class="my-8">{{ role }}</p>
            <button class="bg-amber-500 text-white text-xl font-bold px-4 py-2">{{ link }}</button>
        
        </div>
        <!-- <img alt="" src="~/assets/images/home/drapeau.png"> -->
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: '',
        },
        author: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>
  