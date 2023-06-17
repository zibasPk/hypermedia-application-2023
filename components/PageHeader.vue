<script setup lang="ts">
import ImageInfo from "~/utils/Image";
const props = defineProps({
  image: {
    type: Object as PropType<ImageInfo>,
    required: true,
  },
});
</script>

<template>
  <div class="relative text-center align-center justify-center w-screen max-h-screen overflow-hidden">
    <img :src="image.src" :alt="image.alt" />
    <div class="absolute top-1/2  w-full">
      <slot></slot>
    </div>
  </div>
</template>
