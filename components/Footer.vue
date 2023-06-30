<script setup lang="ts">
interface Item {
  text: string;
  link: string;
}

// Items with name and href
const items: Item[] = [
  { text: "About", link: "/about" },
  { text: "Investement Areas", link: "/about" },
  { text: "Our People", link: "/people" },
  { text: "Portfolio", link: "/portfolio" },
];
</script>

<template>
  <footer class="shadow bg-primary">
    <div class="w-full mx-auto py-10 p-20">
      <div class="items-center md:flex md:items-center md:justify-between">
        <NuxtLink href="/" class="flex items-center mb-4 sm:mb-0">
          <img
            src="../assets/img/logo-lvg.png"
            class="h-58 w-140 mx-auto md:mr-3 md:mx-0"
            alt="LVenture logo"
          />
        </NuxtLink>
      </div>
      <div
        class="flex flex-col-reverse flex-wrap justify-center gap-2 mt-10 text-xs md:flex-row md:justify-between md:gap-0"
      >
        <span
          class="md:self-start text-center text-secondarytext md:text-left min-w-min"
          >© 2023 AJBR™. All Rights Reserved.</span
        >
        <ul
          class="flex justify-center flex-wrap mb-6 gap-4 text-gray-400 md:mb-0 md:items-right md:justify-normal"
        >
          <li v-for="item in items">
            <NuxtLink :href="item.link" class="hover:underline">{{
              item.text
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
