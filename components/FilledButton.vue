<script setup lang="ts">
const props = defineProps(["link", "classes"]);
</script>

<template>
  <NuxtLink :to="link" aria-current="page">
    <button
      class="border-2 text-white bg-secondary border-secondary font-medium rounded-lg text-sm px-5 py-2.5"
      :class="classes"
    >
      <slot name="content"> </slot>
    </button>
  </NuxtLink>
</template>
