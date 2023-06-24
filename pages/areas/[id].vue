<script setup lang="ts">
import {Project, Area} from "~/utils/DatabaseTypes"
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};
const route = useRoute();
const id = window.location.pathname.split("/")[2]
const area_code = parseInt(id) + 1

const { data : area} = await useFetch<Area>("/api/areas/" + area_code);
console.log(area.value)

</script>

<template>
  <PageHeader :image="backgroundImageHeader">
    <TitleTextItem
      title="Area Name #1"
      text="Gabbibbo"
      centered
      additionalTextClasses="text-secondarytext"
      additionalTitleClasses="text-secondarytext"
    >
    </TitleTextItem>
  </PageHeader>

  <!-- Shit about area -->
  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Sustainable development Goals"
        text="Testo"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>
  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Sustainable development Goals"
        text="Testo"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>
  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Sustainable development Goals"
        text="Testo"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>

  <!-- Project related to this area -->
  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Project of Area 0"
        text="Testo"
        additionalTitleClasses="text-primary"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second> </template>
  </StandardSlotted>
</template>
