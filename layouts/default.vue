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
    {
      rel: "stylesheet",
      href: "/fontawesome/css/all.min.css",
    },
  ],
  meta: [
    { charset: "utf-8" },
    { equiv: "Content-Type", content: "text/html" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>
<template>
  <Navbar />
  <div class="flex flex-col gap-32 mx-20 mb-32">
    <slot />
  </div>
  <Footer />
</template>
