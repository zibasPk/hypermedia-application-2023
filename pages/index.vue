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
      <TextWithData :stringObjectArray="data"></TextWithData>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-[503px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>

  <StandardSlotted>
    <template v-slot:first>
      <div class="overflow-hidden h-[503px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        title="Investment Highlights"
        text="Our carefully curated portfolio offers a balanced blend of high-growth ventures, mitigating the impact of market fluctuations and enhancing long-term value creation."
        additionalTitleClasses="text-primary"
      />
    </template>
  </StandardSlotted>

  <StandardSlotted>
    <template v-slot:first>
      <TitleTextItem
        title="Investment Highlights"
        text="Our carefully curated portfolio offers a balanced blend of high-growth ventures, mitigating the impact of market fluctuations and enhancing long-term value creation."
        additionalTitleClasses="text-primary"
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

  <main>ciao<i class="fa-solid fa-user fa-beat-fade"></i>come</main>
</template>
