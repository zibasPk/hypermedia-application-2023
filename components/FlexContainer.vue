<script setup lang="ts">
import { ContentItem } from "~/utils/Types";

const props = defineProps<{
  content: ContentItem[] | undefined;
}>();
</script>

<template>
  <div class="flex flex-row max-w-full flex-wrap gap-4">
    <ImageGridItem
      v-for="(item, index) in content"
      :buttontext="item.buttontext"
      :buttonlink="item.buttonlink"
      :maintext="item.maintext"
      :maindesc="item.maindesc"
      :rendermaindesc="item.rendermaindesc"
      :image="item.image"
      :key="index"
    />
  </div>
</template>
