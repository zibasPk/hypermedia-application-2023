<script setup lang="ts">
const props = defineProps({
  type: { type: String, required: false, default: "text" },
  value: { type: String, required: false, default: "" },
  classes: { type: String, required: false, default: "" },
});
</script>

<template>
  <input
    :type="type"
    class="bg-transparent border-b border-secondary w-full text-sm outline-none focus:border-gray-400 text-secondarytext"
    :classes="classes"
    :placeholder="value"
    required
  />
</template>
