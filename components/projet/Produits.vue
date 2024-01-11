
<template>
   
        <div class="max-w-lg  mt-4">
            <div class=" space-x-4">
                <img :src="picture" alt="" class="" />
            </div>
            <div class="p-6 border-b border-x border-slate-600">
                <h6 class="text-lg p-2 border-b  border-slate-600 text-black font-semibold mb-4">{{title}}</h6>
                <p class="text-base">{{description}}</p>
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
});

onMounted(() => {
  console.log(props.picture);
});
</script>
