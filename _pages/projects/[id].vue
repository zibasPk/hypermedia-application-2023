<!--
    Page for a single prject.
-->
<template>
  <main>
    <div>
      This is project {{ route.params.id }}
    </div>
  </main>
</template>

<script setup>
  const route = useRoute();
</script>