<script setup lang="ts">
const props = defineProps({
  content: {
    type: Array<{
      buttontext: { type: String; required: true };
      buttonlink: { type: String; required: true };
      maintext: { type: String; required: true };
      maindesc: { type: String; required: true };
      rendermaindesc: { type: Boolean; required: false; default: true };
    }>,
    required: true,
  },
});
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
      class="col-span-1 row-span-1 mr-6"
    />
  </div>
</template>
