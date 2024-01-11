<template>
  <div>
    <Icon
      name="uil:arrow-right"
      color="black"
      v-if="showIcon"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  showIcon: {
    type: Boolean,
    default: true
  }
})
</script>