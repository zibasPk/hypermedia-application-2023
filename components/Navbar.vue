<script setup lang="ts">
import { ref } from "vue";
import FilledButton from "../components/FilledButton.vue";
import { Consts } from "~/utils/Types";

interface element {
  text: string;
  link: string;
  iconHTML: string;
  toggled: any;
  dropdownElements: dropdownElement[];
  active: any;
  hideInDesktop: any;
}

interface dropdownElement {
  text: string;
  link: string;
}

let elements: element[] = [
  {
    text: "About Us",
    link: "/about",
    toggled: ref(false),
    dropdownElements: [],
    iconHTML: '<i class="fa-solid fa-circle-info"></i>',
    active: ref(false),
    hideInDesktop: ref(false),
  },
  {
    text: "Investment Areas",
    link: "/areas",
    toggled: ref(false),
    dropdownElements: [],
    iconHTML: '<i class="fa-solid fa-briefcase"></i>',
    active: ref(false),
    hideInDesktop: ref(false),
  },
  {
    text: "Our People",
    link: "/people",
    toggled: ref(false),
    dropdownElements: [],
    iconHTML: '<i class="fa-solid fa-users"></i>',
    active: ref(false),
    hideInDesktop: ref(false),
  },
  {
    text: "Portfolio",
    link: "/",
    toggled: ref(false),
    dropdownElements: [
      {
        text: "Top projects",
        link: "/portfolio",
      },
      {
        text: "All projects",
        link: "/projects",
      },
    ],
    iconHTML: '<i class="fa-solid fa-book-open"></i>',
    active: ref(false),
    hideInDesktop: ref(false),
  },
  {
    text: "Top projects",
    link: "/portfolio",
    toggled: ref(false),
    dropdownElements: [],
    iconHTML: '<i class="fa-solid fa-book-open"></i>',
    active: ref(false),
    hideInDesktop: ref(true),
  },
  {
    text: "All projects",
    link: "/projects",
    toggled: ref(false),
    dropdownElements: [],
    iconHTML: '<i class="fa-solid fa-folder"></i>',
    active: ref(false),
    hideInDesktop: ref(true),
  },
];

function toggle(toShow: element) {
  let init = toShow.toggled.value;
  elements.forEach((e) => {
    e.toggled.value = false;
  });
  toShow.toggled.value = !init;
}

function setActive() {
  elements.filter((el) => {
    let target = useRoute().fullPath.split("/")[1];
    el.active.value = el.link.includes(target) && target !== "";
  });
}
const route = useRoute();
watch(
  route,
  () => {
    setActive();
  },
  { immediate: true }
);

let dropdownActive = ref(false);
function toggleDropdown() {
  dropdownActive.value = !dropdownActive.value;
}

onMounted(() => {
  document.getElementById("maincontent")?.addEventListener("click", () => {
    dropdownActive.value = false;
  });
});

onBeforeUnmount(() => {
  document
    .getElementById("maincontent")
    ?.removeEventListener("click", toggleDropdown);
});
</script>

<template>
  <nav
    class="bg-primary border-[#1A202C] border-solid border-b-2 fixed z-40 w-full"
  >
    <div
      class="grid grid-flow-col md:grid-cols-[1fr,8fr] grid-cols-[1fr,8fr,1fr] items-center justify-evenly px-5 xl:px-20 py-4 mx-auto max-w-[100rem]"
    >
      <NuxtLink
        href="/"
        class="md:col-start-1 col-start-2 m-auto flex items-center"
      >
        <img
          :src="Consts.base_image_url + 'logo-lvg.png'"
          class="md:h-58 h-full md:w-140 mr-3"
          alt="the company logo"
        />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Flowbite</span
        > -->
      </NuxtLink>
      <button
        @click="toggleDropdown()"
        type="button"
        class="col-start-3 md:col-start-2 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
      <div
        class="ml-auto w-full md:block md:w-auto"
        id="navbar-dropdown"
        :class="!dropdownActive ? 'hidden' : ''"
      >
        <ul
          class="absolute right-10 top-20 md:right-0 md:top-0 md:relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary md:"
        >
          <template v-for="element in elements">
            <li
              :class="[element.hideInDesktop.value ? 'md:hidden' : '']"
              class="my-auto"
            >
              <NuxtLink
                :to="element.link"
                aria-current="page"
                v-if="element.dropdownElements.length == 0"
                class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md: md: align-middle"
              >
                <div
                  class="flex gap-2"
                  :class="[
                    element.active.value
                      ? 'border-solid text-gray-700 md:text-white lg:text-white border-b-2 border-secondary'
                      : 'text-gray-700 md:text-gray-400',
                  ]"
                >
                  <span
                    v-html="element.iconHTML"
                    class="hidden xl:block"
                  ></span>
                  {{ element.text }}
                </div>
              </NuxtLink>
              <button
                v-if="element.dropdownElements.length != 0"
                @click="toggle(element)"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto md: max-md:hidden"
              >
                <span
                  v-html="element.iconHTML"
                  class="hidden xl:block w-[24px]"
                ></span
                >{{ element.text }}
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
                class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-[184px] mt-[10px]"
              >
                <ul class="py-2 text-sm text-gray-700">
                  <li v-for="dropdownElement in element.dropdownElements">
                    <NuxtLink
                      :href="dropdownElement.link"
                      class="block px-4 py-2 hover:bg-gray-100"
                      >{{ dropdownElement.text }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </li>
          </template>
          <li class="max-md:mt-[8px]">
            <FilledButton
              classes="bg-secondary border-secondary p-0"
              link="/contact"
            >
              <template v-slot:content>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  Get in Touch
                </div>
              </template>
            </FilledButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
