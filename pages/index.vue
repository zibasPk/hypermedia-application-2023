<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/Cross_10.jpg",
  alt: "a field with wind power generators wow",
};
const imageBucket =
  "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";

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

  <StandardSlotted separator>
    <template v-slot:first>
      <div class="grid grid-rows-2 max-h-[50rem] p-10">
        <div class="m-auto">
          <TextWithData :stringObjectArray="data"></TextWithData>
        </div>
        <div class="h-full w-full flex overflow-hidden">
          <img
            class="rounded m-auto object-cover w-full min-h-full cover"
            :src="imageBucket + 'Cross_13.jpg'"
            alt="people sitting around a table watching each other intently"
          />
        </div>
      </div>
    </template>
    <template v-slot:second>
      <div class="grid grid-rows-2 max-h-[50rem] p-10">
        <div class="h-full w-full flex overflow-hidden">
          <img
            class="rounded m-auto object-cover w-full min-h-full cover"
            :src="imageBucket + 'Cross_15.jpg'"
            alt="an image of our beautiful but also scary office"
          />
        </div>
        <div class="m-auto">
          <TitleTextItem
            title="Investment Highlights"
            text="Our carefully curated portfolio offers a balanced blend of high-growth ventures, mitigating the impact of market fluctuations and enhancing long-term value creation."
            button-text="Top Investments"
            button-url="/portfolio"
          >
          </TitleTextItem>
        </div>
      </div>
    </template>
  </StandardSlotted>

  <StandardSlotted>
    <template v-slot:first>
      <div class="my-auto pl-10">
        <TitleTextItem
          title="Our many different fields of action"
          text="We are at the forefront of multiple disciplines, leading the charge in innovation and problem-solving. From Sustainable Energy and Clean Technology to AI and Robotics, we're paving the way for a brighter future. Click below to explore our diverse projects."
          additionalTitleClasses="text-primary"
          button-text="All areas"
          button-url="/areas"
        />
      </div>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'Cross_12.jpg'"
          alt="an image of the fabric of reality"
        />
      </div>
    </template>
  </StandardSlotted>
</template>
