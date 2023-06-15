<script setup lang="ts">
const props = defineProps(["content"]);
</script>

<template>
  <div class="grid grid-rows-3 w-48 h-44">
    <div class="flex items-center space-x-4">
      <img
        class="w-10 h-10 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt=""
      />
      <div class="font-medium dark:text-white">
        <div>Jese Leos</div>
      </div>
    </div>

    <div>text</div>
    <div class="m-1 w-full h-full">
      <FilledButton :content="props.content" classes="w-full" link="/" />
    </div>
  </div>
</template>
