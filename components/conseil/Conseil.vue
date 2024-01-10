
<template>
    <div class=" dark:text-black">
        <div class=" p-6 grid grid-cols-12 mx-auto ">
            <div class="content-img  mt-16 col-span-12 lg:col-span-5 ">
                <img src="~/assets/images/maire/maire2.png" alt="" class=" object-contain content-img ">
            </div>
            <div class="flex flex-col col-span-12 pl-3 pt-6 pb-4 lg:col-span-6 mt-28 ml-2 h-96 bg-teal-50">
                <h5 class="text-2xl ml-7 font-bold leadi text-black">{{ name }}
                </h5>
                <h5 class="flex items-center mt-12 text-2xl font-bold leadi text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                    {{ title1 }}
                </h5>
                <h5 class="flex items-center text-2xl font-bold leadi text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="currentColor" class="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                    {{ title2 }}
                </h5>
                <div class="ml-8 mt-10">
                    <button class="bg-amber-500 text-white text-xl font-bold px-4 py-2">{{ button1 }}</button>
                    <button class="bg-green-700 text-white text-xl font-bold px-4 py-2 ml-3">{{ button2 }}</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        title1: {
            type: String,
            required: true,
        },
        title2: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        button1: {
            type: String,
            required: true,
        },
        button2: {
            type: String,
            required: true,
        },
    },
};

</script>
