<template>
  <div
    class="grid grid-cols-2 place-items-center gap-5 border-b border-secondary"
  >
    <div class="mb-[-1px]">
      <slot name="first"></slot>
    </div>

    <div class="mb-[-1px]">
      <slot name="second"></slot>
    </div>
  </div>
</template>
