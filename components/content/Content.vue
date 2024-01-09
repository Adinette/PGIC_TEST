
<template>
  <div class=" dark:text-black">
    <div class="container p-6 grid grid-cols-12 mx-auto ">
      <div class="content-img  mt-16 col-span-12 lg:col-span-5 lg:h-auto">
        <img :src="img" alt="" class="object-contain content-img ">
        <div class="pt-6 ">
          <h5 class="text-lg font-bold text-black">{{ name }}</h5>
          <span>{{ role }}</span>
        </div>
      </div>
      <div class="flex flex-col col-span-12 pl-8 pr-32 lg:col-span-7 py-11 dark:divide-gray-700">
        <div class="pt-6 pb-4 ">
          <h5 class="text-3xl font-bold leadi text-green-700">{{ title }}
          </h5>
          <p class="mt-6 mb-11 leading-8 text-xl text-black">{{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    img:{
    type: String,
    required: true
    },
title: {
    type: String,
    required: true,
    },
description: {
    type: String,
    required: true,
    },
role: {
    type: String,
    required: true,
    },
name: {
    type: String,
    required: true,
    },
  },
};

</script>
