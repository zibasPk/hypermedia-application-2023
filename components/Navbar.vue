<script setup lang="ts">
import { ref } from "vue";

interface element {
  text: string;
  link: string;
  toggled: any;
  dropdownElements: dropdownElement[];
}

interface dropdownElement {
  text: string;
  link: string;
}

let elements: element[] = [
  {
    text: "ciao",
    link: "a",
    toggled: ref(false),
    dropdownElements: [],
  },
  {
    text: "ciao2",
    link: "b",
    toggled: ref(false),
    dropdownElements: [
      { text: "aa", link: "aa" },
      { text: "bb", link: "bb" },
    ],
  },
  {
    text: "ciao3",
    link: "c",
    toggled: ref(false),
    dropdownElements: [
      { text: "aaa", link: "aaa" },
      { text: "bbb", link: "bbb" },
      { text: "ccc", link: "ccc" },
      { text: "ddd", link: "ddd" },
    ],
  },
];

function toggle(toShow: element) {
  let init = toShow.toggled.value;
  elements.forEach((e) => {
    e.toggled.value = false;
  });
  toShow.toggled.value = !init;
  console.log("ciao");
}
</script>

<template>
  <nav class="bg-white border-black border-solid border-b">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Flowbite</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:"
        >
          <li v-for="element in elements">
            <a
              v-if="element.dropdownElements.length == 0"
              :href="element.link"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md: md:"
              aria-current="page"
            >
              {{ element.text }}
            </a>
            <button
              v-if="element.dropdownElements.length != 0"
              @click="toggle(element)"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md: md:"
            >
              {{ element.text }}
              <svg
                class="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-if="
                element.dropdownElements.length > 0 && element.toggled.value
              "
              class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li v-for="dropdownElement in element.dropdownElements">
                  <a
                    :href="dropdownElement.link"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >{{ dropdownElement.text }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
