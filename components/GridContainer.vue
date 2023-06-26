<script setup lang="ts">
import { ContentItem } from "~/utils/Types";

defineProps<{
  content: ContentItem[] | undefined;
}>();
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-2 place-items-center w-fit">
    <ImageGridItem
      v-for="item in content"
      :buttontext="item.buttontext"
      :buttonlink="item.buttonlink"
      :maintext="item.maintext"
      :maindesc="item.maindesc"
      :rendermaindesc="item.rendermaindesc"
      :image="item.image"
      class="col-span-1 row-span-1 mr-6"
    />
  </div>
</template>
