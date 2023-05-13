<!--
    Page for projects in a single area
-->
<template>
  <main>
    <div>
      These are the projects for area {{ route.params.group }}
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
</script>