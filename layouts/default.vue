<!--
    Default layout used by all the page
-->
<script setup>
useHead({
  title: "LVenture Group",
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
    { equiv: "Content-Type", content: "text/html; charset=utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "title", content: "LVenture Group" },
    { name: "description", content: "Investing in Change" },
    { name: "keywords", content: "VC, Investing, in, Change" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
    { name: "author", content: "AJBR" },
  ],
});
</script>
<template>
  <Navbar />
  <div
    class="flex flex-col gap-16 mx-auto px-2 md:px-20 mb-32 max-w-[100rem] pt-[92px]"
  >
    <slot />
  </div>
  <Footer />
</template>
