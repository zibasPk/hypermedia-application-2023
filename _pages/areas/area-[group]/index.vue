<!--
    Page description for a single area.
-->
<template>
  <main>
    <div>This is area page {{ route.params.group }}</div>
  </main>
</template>

<script setup>
const route = useRoute();
</script>
