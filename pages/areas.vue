<script setup lang="ts">
import { Area } from "../utils/DatabaseTypes";
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};

const { data } = await useFetch<Area[]>("/api/areas");
let areas = data.value;
console.log(areas)
</script>
<template>
  <main>
    <PageHeader :image="backgroundImageHeader">
      <TitleTextItem
        title="Our project portfolio"
        text="ciao"
        buttonText="Go To Projects"
        centered
        additionalTextClasses="text-secondarytext"
        additionalTitleClasses="text-secondarytext"
      >
      </TitleTextItem>
    </PageHeader>
    <StandardSlotted v-for="(area, index) in areas">
      <template v-slot:first v-if="(index +1) % 2">
        <TitleTextItem :title='area.name ?? ""' :text='area.short_description ?? ""'></TitleTextItem>
      </template>
      <template v-slot:first v-else>
        <div class="overflow-hidden h-[1006px]">
          <img
            class="rounded m-auto object-cover h-full"
            :src="backgroundImageHeader.src"
            :alt="backgroundImageHeader.alt"
          />
        </div>
      </template>
      
      <template v-slot:second v-if="index % 2">
        <TitleTextItem :title='area.name ?? ""' :text='area.short_description ?? ""'></TitleTextItem>
      </template>
      <template v-slot:second v-else>
        <div class="overflow-hidden h-[1006px]">
          <img
            class="rounded m-auto object-cover h-full"
            :src="backgroundImageHeader.src"
            :alt="backgroundImageHeader.alt"
          />
        </div>
      </template>

    </StandardSlotted>
  </main>
</template>
