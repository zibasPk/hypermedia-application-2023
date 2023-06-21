<script setup lang="ts">
const props = defineProps(["value", "classes"]);
</script>

<template>
  <textarea
    class="bg-transparent text-secondarytext border-b border-secondary w-full text-sm align-text-top overflow-hidden"
    :class="classes"
  >
    {{ props.value }}
  </textarea>
</template>
