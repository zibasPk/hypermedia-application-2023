<script setup lang="ts">
import ImageInfo from "~/utils/Image";
const props = defineProps({
  image: {
    type: Object as PropType<ImageInfo>,
    required: true,
  },
});
let containerStyle =
  "bg-[url('" +
  props.image.src +
  "')]" +
  "relative text-center align-center justify-center w-screen max-h-screen overflow-hidden";
</script>

<template>
  <div class="bg-black">
  <div
    style="
      background-image: url('https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp');
      background-size: cover;
    "
    class="relative text-center align-center justify-center w-screen max-h-screen overflow-hidden opacity-40"
  >
    <div class="m-auto w-full max-w-full">
      <slot></slot>
    </div>
  </div>
</div>
</template>
