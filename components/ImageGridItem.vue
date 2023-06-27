<script setup lang="ts">
import ImageInfo from "~/utils/Image";
import { Consts } from "~/utils/Types";

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
  <div class="grid max-w-48 w-48 h-44 m-1">
    <div class="grid grid-flow-col items-center space-x-4">
      <div class="w-[64px] h-[64px] rounded overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover"
          :src="Consts.base_image_url + image.src"
          :alt="image.alt ?? ''"
        />
      </div>
      <p class="font-bold break-words overflow-hidden">{{ maintext }}</p>
    </div>
    <p v-if="rendermaindesc" class="text-sm">{{ maindesc }}</p>
    <div class="w-full h-full">
      <OutlineButton classes="w-full" :link="buttonlink">
        <template v-slot:content>
          {{ props.buttontext }}
        </template>
      </OutlineButton>
    </div>
  </div>
</template>
