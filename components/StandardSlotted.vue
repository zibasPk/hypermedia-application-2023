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
  <div
    class="grid grid-cols-2 place-items-center gap-5"
    :class="separatorClass"
  >
    <div class="mb-[-1px] w-full">
      <slot name="first"></slot>
    </div>

    <div class="mb-[-1px] w-full">
      <slot name="second"></slot>
    </div>
  </div>
</template>
