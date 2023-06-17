<script setup lang="ts">
import ImageInfo from "~/utils/Image";
const props = defineProps({
  image: {
    type: Object as PropType<ImageInfo>,
    required: true,
  },
});
let containerStyle = `
background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url('${props.image.src}');
        background-size: cover;
`;
</script>

<template>
  <div class="w-fit min-h-fit h-[calc(100vh-75px)]">
    <div
      :style="containerStyle"
      class="relative flex h-full text-center align-center justify-center w-screen max-h-screen"
    >
      <div class="m-auto z-20">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
