<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};
</script>
<template>
  <main>
    <StandardSlotted>
      <PageHeader :image="backgroundImageHeader"></PageHeader>
    </StandardSlotted>
  </main>
</template>
