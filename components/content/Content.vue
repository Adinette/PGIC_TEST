<template>
  <div class="dark:text-black">
    <div class="p-6 grid grid-cols-12 mx-auto">
      <div class="content-img mt-8 col-span-12 lg:col-span-5 lg:h-auto">
        <img :src="picture" alt="" class="object-contain content-img" />
        <div class="pt-6">
          <h5 class="text-lg font-bold text-black">{{ name }}</h5>
          <span>{{ role }}</span>
        </div>
      </div>
      <div class="flex flex-col col-span-12 pl-8 pr-32 lg:col-span-7  dark:divide-gray-700">
        <div class="pt-6 pb-4">
          <h5 class="text-3xl font-bold leadi text-green-700">{{ title }}</h5>
          <p class="mt-6 mb-6 leading-8 text-xl text-black">
            {{ description }}
          </p>
        </div>
        <!-- <div>
          <a href="" class="self-center px-4 py-2 font-semibold  dark:bg-amber-400 text-white">
            {{ link }}
          </a>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  picture: {
    type: String,
    required: true,
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
  // link: {
  //   type: String,
  //   required: true,
  // }
});

onMounted(() => {
  console.log(props.picture);
});
</script>
