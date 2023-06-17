<!--
    Default layout used by all the page
-->
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900",
      crossorigin: "",
    },
  ],
});
</script>
<template>
  <Navbar />
  <slot />
  <Footer />
</template>
