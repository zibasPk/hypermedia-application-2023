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
const BucketUrl =
  "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";
</script>

<template>
  <div class="grid w-48 h-44 m-1">
    <div class="flex items-center space-x-4">
      <img
        class="w-[64px] h-[64px] rounded overflow-hidden object-cover"
        :src="BucketUrl + image.src"
        :alt="image.alt"
      />
      <p class="font-bold">{{ maintext }}</p>
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
