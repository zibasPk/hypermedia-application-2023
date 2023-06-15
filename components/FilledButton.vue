<script setup lang="ts">

const props = defineProps(['content'])

</script>

<template>
    <button class="text-white flex flex-row justify-center items-center p-4 gap-2 w-56 h-14 bg-gray-800 rounded-md">
     {{ props.content }}
    </button>

</template>