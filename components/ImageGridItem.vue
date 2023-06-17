<script setup lang="ts">
import ImageInfo from "~/utils/Image";

const props = defineProps({
  buttontext: { type: String, required: true },
  buttonlink: { type: String, required: true },
  maintext: { type: String, required: true },
  maindesc: { type: String, required: true },
  rendermaindesc: { type: Boolean, required: false, default: true },
  image: {
    type: Object as PropType<ImageInfo>,
    required: false,
    default: {
      src: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      alt: "A picture of a person",
    },
  },
});
</script>

<template>
  <div class="grid w-48 h-44 m-1">
    <div class="flex items-center space-x-4">
      <img
        class="w-[64px] h-[64px] rounded"
        :src="image.src"
        :alt="image.alt"
      />
      <p class="font-bold">{{ maintext }}</p>
    </div>
    <p v-if="rendermaindesc">{{ maindesc }}</p>
    <div class="w-full h-full">
      <OutlineButton
        :content="props.buttontext"
        classes="w-full"
        :link="buttonlink"
      />
    </div>
  </div>
</template>
