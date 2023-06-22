<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp",
  alt: "hero",
};

const data = [
  { string1: "3+", string2: "Billion of dollars invested" },
  { string1: "International investments", string2: "50+" },
  { string1: "47", string2: "Exits worth 170M $ in the last 5 years " },
];
</script>

<template>
  <PageHeader :image="backgroundImageHeader">
    <div class="font-bold text-6xl text-secondarytext">Investing in Change</div>
  </PageHeader>

  <StandardSlotted>
    <template v-slot:first>
      <div class="grid grid-rows-2 max-h-[50rem]">
        <div class="m-auto">
          <TextWithData :stringObjectArray="data"></TextWithData>
        </div>
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
    <template v-slot:second>
      <div class="grid grid-rows-2 max-h-[50rem]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
        <div class="m-auto">
          <TitleTextItem
            title="ciao"
            text="ciaone"
            button-text="ciao"
            button-url="/portfoglio"
            centered
          >
          </TitleTextItem>
        </div>
      </div>
    </template>
  </StandardSlotted>

  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Our many different fields of action"
        text="We are at the forefront of multiple disciplines, leading the charge in innovation and problem-solving. From Sustainable Energy and Clean Technology to AI and Robotics, we're paving the way for a brighter future. Click below to explore our diverse projects."
        additionalTitleClasses="text-primary"
        button-text="All areas"
        button-url="/areas"
      />
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
</template>
