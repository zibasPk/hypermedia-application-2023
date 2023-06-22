<script setup lang="ts">
interface Item {
  text: string;
  link: string;
}

// Items with name and href
const items: Item[] = [
  { text: "About", link: "#" },
  { text: "Contact", link: "#" },
  { text: "Blog", link: "#" },
  { text: "License", link: "#" },
];
</script>

<template>
  <footer class="shadow bg-primary">
    <div class="w-full mx-auto py-10 p-20">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img
            src="../assets/img/logo-lvg.png"
            class="h-58 w-140 mr-3"
            alt="Flowbite Logo"
          />
          <!-- <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Flowbite</span
          > -->
        </a>
      </div>
      <div class="flex justify-between mt-10 text-xs">
        <span
          class="self-start flex-none text-center text-secondarytext sm:text-left"
          >© 2023 AJBR™. All Rights Reserved.</span
        >
        <ul class="flex flex-none items-right mb-6 text-secondarytext sm:mb-0">
          <li v-for="item in items">
            <a :href="item.link" class="mr-4 hover:underline md:mr-6">{{
              item.text
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
