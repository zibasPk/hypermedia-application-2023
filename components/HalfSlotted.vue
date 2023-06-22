<script setup lang="ts">
let props = defineProps({
  separator: { type: Boolean, required: false, default: false },
});

let separatorClass = "";
if (props.separator) {
  separatorClass = "border-b border-secondary";
}
</script>

<template>
  <div :class="separatorClass">
    <div class="grid grid-cols-2 place-items-center gap-5 mb-[-1px]">
      <slot name="first"></slot>
      <slot name="second"></slot>
    </div>
  </div>
</template>
