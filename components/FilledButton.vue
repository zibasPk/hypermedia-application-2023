<script setup lang="ts">
const props = defineProps({
  classes: { type: String, required: false },
  link: { type: String, required: true },
});
</script>

<template>
  <NuxtLink :to="link" aria-current="page">
    <button
      class="border-2 text-white bg-secondary border-secondary hover:bg-[rgb(161,57,247)] hover:border-[rgb(161,57,247)] font-medium rounded-lg text-sm px-5 py-2.5"
      :class="classes"
    >
      <slot name="content"> </slot>
    </button>
  </NuxtLink>
</template>
