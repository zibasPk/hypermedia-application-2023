<script setup lang="ts">
let props = defineProps({
  separator: { type: Boolean, required: false, default: false },
});

let separatorClass = "";
if (props.separator) {
  separatorClass = "border-b-2 border-secondary";
}
</script>

<template>
  <div
    class="grid grid-cols-1 place-items-center xl:grid-cols-2 xl:gap-5"
    :class="separatorClass"
  >
    <div class="mb-[-1px] w-full h-full grid">
      <slot name="first"></slot>
    </div>

    <div class="mb-[-1px] w-full h-full grid">
      <slot name="second"></slot>
    </div>
  </div>
</template>
