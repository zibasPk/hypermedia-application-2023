<script setup lang="ts">
let props = defineProps({
  separator: { type: Boolean, required: false, default: false },
  horizontal: { type: Boolean, required: false, default: false },
});

let separatorClass = "";
if (props.separator) {
  separatorClass = " border-b-2 border-secondary ";
}

let orientation_dependent_classes = " flex-col md:grid-cols-2 ";
if (props.horizontal) {
  orientation_dependent_classes = " md:grid-rows-2 flex-col ";
}
</script>

<template>
  <div
    class="flex md:grid place-items-center md:gap-5"
    :class="separatorClass + orientation_dependent_classes"
  >
    <div class="mb-[-2px] w-full h-full grid">
      <slot name="first"></slot>
    </div>

    <div class="mb-[-2px] w-full h-full grid">
      <slot name="second"></slot>
    </div>
  </div>
</template>
