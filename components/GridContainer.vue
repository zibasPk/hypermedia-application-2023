<script setup lang="ts">
import { ContentItem } from "~/utils/Types";

const props = defineProps({
  content: { type: Array<ContentItem>, required: true },
  variant: {
    type: Object as PropType<"default" | "secondary">,
    required: false,
    default: "default",
  },
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:max-xl:grid-cols-1 xl:m-0 place-items-center w-fit gap-4"
  >
    <ImageGridItem
      v-for="item in content"
      :buttontext="item.buttontext"
      :buttonlink="item.buttonlink"
      :maintext="item.maintext"
      :maindesc="item.maindesc"
      :rendermaindesc="item.rendermaindesc"
      :image="item.image"
      class="col-span-1 row-span-1"
      :variant="variant"
    />
  </div>
</template>
