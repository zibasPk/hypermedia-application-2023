<script setup lang="ts">
interface StringObject {
  string1: string;
  string2: string;
}

const props = defineProps({
  stringObjectArray: {
    type: Array as () => Array<StringObject>,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-flow-row">
    <div class="flex" v-for="(item, index) in stringObjectArray">
      <template v-if="index % 2 === 0">
        <div class="text-secondary text-4xl">{{ item.string1 }}</div>
        <div class="text-xl">{{ item.string2 }}</div>
      </template>
      <template v-else>
        <div class="text-xl">{{ item.string1 }}</div>
        <div class="text-secondary text-4xl">{{ item.string2 }}</div>
      </template>
    </div>
  </div>
</template>
