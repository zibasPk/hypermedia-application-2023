<script setup lang="ts">
import { Area } from "../../utils/DatabaseTypes";
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};
const imageBucket =
  "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";
const { data } = await useFetch<Area[]>("/api/areas");
let areas = data.value?.sort((a, b) => a.area_code - b.area_code);
</script>
<template>
  <PageHeader :image="backgroundImageHeader">
    <TitleTextItem
      title="Our project portfolio"
      text="ciao"
      buttonText="Go To Projects by Area"
      centered
      additionalTextClasses="text-secondarytext"
      additionalTitleClasses="text-secondarytext"
    >
    </TitleTextItem>
  </PageHeader>
  <StandardSlotted v-for="(area, index) in areas" separator>
    <template v-slot:first v-if="(index + 1) % 2">
      <TitleTextItem
        :title="area.name ?? ''"
        :text="area.short_description ?? ''"
        buttonText="Show More"
        :buttonUrl="'/areas/' + index.toString()"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:first v-else>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + area.image"
          :alt="area.image"
        />
      </div>
    </template>

    <template v-slot:second v-if="index % 2">
      <TitleTextItem
        :title="area.name ?? ''"
        :text="area.short_description ?? ''"
        buttonText="Show More"
        :buttonUrl="'/areas/' + index.toString()"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second v-else>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + area.image"
          :alt="area.image"
        />
      </div>
    </template>
  </StandardSlotted>
</template>
