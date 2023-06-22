<script setup lang="ts">
import { Area } from "../utils/DatabaseTypes";
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};

const { data } = useFetch<Area[]>("/api/areas");
let areas = data.value;
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
    <StandardSlotted>
      <template v-slot:first>
        <TitleTextItem title="ciao" text="ciaone" centered> </TitleTextItem>
      </template>
      <template v-slot:second>
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
