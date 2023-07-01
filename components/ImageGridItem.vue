<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import ImageInfo from "~/utils/Image";
import { Consts } from "~/utils/Types";

const props = defineProps({
  buttontext: { type: String, required: true },
  buttonlink: { type: String, required: true },
  maintext: { type: String, required: true },
  maindesc: { type: String, required: true },
  variant: {
    type: Object as PropType<"default" | "secondary">,
    required: false,
    default: "default",
  },
  image: {
    type: Object as PropType<ImageInfo>,
    required: false,
    default: {
      src: "%20Cross.jpg",
      alt: "A picture of a person",
    },
  },
});
</script>

<template>
  <template v-if="variant == 'secondary'">
    <div
      class="grid grid-flow-col h-full min-h-[10rem] p-4 w-60 bg-white rounded-lg"
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
        <p class="font-bold m-auto">{{ maintext }}</p>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="grid max-w-48 w-48 h-40 xl:h-44 m-1">
      <div class="grid grid-flow-col items-center space-x-4">
        <div class="w-[64px] h-[64px] rounded overflow-hidden">
          <img
            class="min-w-full min-h-full object-cover"
            :src="Consts.small_image_url + image.src"
            :alt="image.alt ?? 'image of the element of the grid'"
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
</template>
