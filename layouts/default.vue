<!--
    Default layout used by all the page
-->
<script setup>
useHead({
  title: "LVenture Group",
  htmlAttrs: {
    lang: "en",
  },
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
    // Social media tags
    { property: "og:title", content: "LVenture Group" },
    { property: "og:description", content: "Investing in Change" },
    {
      property: "og:image",
      content:
        "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/Cross_15.webp",
    },
    {
      property: "og:url",
      content: "https://hypermedia-application-2023.vercel.app/",
    },
    { property: "twitter:card", content: "summary_large_image" },
    // Images
    {
      itemprop: "image",
      content:
        "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/Cross_15.webp",
    },
  ],
});
</script>
<template>
  <Navbar />
  <div
    id="maincontent"
    class="flex flex-col gap-16 mx-auto px-2 md:px-20 mb-32 max-w-[100rem] pt-[86px]"
  >
    <slot />
  </div>
  <Footer id="footer" />
</template>
