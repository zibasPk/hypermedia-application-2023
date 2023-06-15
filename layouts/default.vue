<!--
    Default layout used by all the page
-->
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Inter",
      crossorigin: "",
    },
  ],
});
</script>
<template>
  <Navbar />
  <slot /><StandardSlotted />
  <Footer />
</template>
