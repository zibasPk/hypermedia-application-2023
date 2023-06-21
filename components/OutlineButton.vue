<script setup lang="ts">
// <OutlineButton content="button" link="https://google.com"/>

const props = defineProps(["link", "classes"]);

function forward() {
  location.href = props.link;
}
</script>

<template>
  <button
    class="box-border border-2 border-secondary text-secondary bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    :class="classes"
    @click="forward()"
  >
    <slot name="content" />
  </button>
</template>
