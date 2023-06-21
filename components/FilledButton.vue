<script setup lang="ts">
const props = defineProps(["link", "classes"]);

function forward() {
  location.href = props.link;
}
</script>

<template>
  <button
    class="border-2 text-white bg-secondary border-secondary font-medium rounded-lg text-sm px-5 py-2.5"
    :class="classes"
    @click="forward()"
  >
    <slot name="content"> </slot>
  </button>
</template>
