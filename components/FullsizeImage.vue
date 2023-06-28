<script setup lang="ts">
import ImageInfo from "~/utils/Image";
const props = defineProps({
  img: { type: Object as PropType<ImageInfo>, required: true },
});
</script>

<template>
  <div
    class="overflow-hidden md:pb-0 mb-10"
    :class="
      big
        ? 'md:h-full md:min-h-[600px] h-[600px]'
        : 'md:h-full md:min-h-[600px] h-[200px]'
    "
  >
    <img
      class="rounded m-auto object-cover h-full"
      :src="img.src ?? ''"
      :alt="img.alt ?? ''"
    />
  </div>
</template>
