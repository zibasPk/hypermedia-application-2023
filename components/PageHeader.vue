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
  <div class="w-fit min-h-fit h-[calc(100vh-75px)]">
    <div
      style="
        background-image: url('https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp');
        background-size: cover;
      "
      class="relative flex h-full text-center align-center justify-center w-screen max-h-screen shadow-xl"
    >
      <div class="bg-black/60 absolute top-0 left-0 w-full h-full"></div>
      <div class="m-auto z-20">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
