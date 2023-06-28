<script setup lang="ts">
import { ContentItem } from "~/utils/Types";

defineProps<{
  content: ContentItem[] | undefined;
}>();
</script>

<template>
  <div
    class="grid grid-rows-2 xl:grid-cols-3 m-auto xl:m-0 place-items-center w-fit grid-cols-2"
  >
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
