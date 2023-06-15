<script setup lang="ts">
// <FilledButton content="button" link="https://google.com"/>

const props = defineProps(["content", "link", "classes"]);

function forward() {
  location.href = props.link;
}
</script>

<template>
  <button
    class="border-2 text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
    :class="classes"
    @click="forward()"
  >
    {{ props.content }}
  </button>
</template>
