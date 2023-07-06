<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import ImageInfo from "~/utils/Image";
import { Consts } from "~/utils/Types";

const props = defineProps({
  buttontext: { type: String, required: true },
  buttonlink: { type: String, required: true },
  maintext: { type: String, required: true },
  maindesc: { type: String, required: true },
  image: {
    type: Object as PropType<ImageInfo>,
    required: false,
    default: {
      src: "%20Cross.webp",
      alt: "A picture of a person",
    },
  },
});
</script>

<template>
  <template>
    <div
      class="grid grid-flow-col h-full min-h-[10rem] p-4 w-60 bg-white rounded-lg hover:shadow-md"
    >
      <div class="w-[70px] h-full mr-4 rounded overflow-hidden">
        <img
          class="min-w-full min-h-full object-cover"
          :src="Consts.small_image_url + image.src"
          :alt="image.alt ?? 'image of the element of the grid'"
        />
      </div>
      <div class="flex flex-col-reverse h-ful gap-1">
        <div class="w-full">
          <FilledButton classes="w-full" :link="buttonlink">
            <template v-slot:content>
              {{ props.buttontext }}
            </template>
          </FilledButton>
        </div>
        <p v-if="maindesc" class="text-sm w-full mb-auto">{{ maindesc }}</p>
        <p class="font-bold my-auto">{{ maintext }}</p>
      </div>
    </div>
  </template>
</template>
