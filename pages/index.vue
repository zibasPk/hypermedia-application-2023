<script setup lang="ts">
import { Consts } from "~/utils/Types";

const backgroundImageHeader = {
  src: Consts.base_image_url + "Cross_10.webp",
  alt: "a field with wind power generators wow",
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
  <StandardSlotted separator>
    <template v-slot:first>
      <StandardSlotted horizontal>
        <template v-slot:first>
          <div class="m-auto md:w-auto w-4/5 pb-10 md:pb-0">
            <TextWithData :stringObjectArray="data"></TextWithData>
          </div>
        </template>
        <template v-slot:second>
          <FullsizeImage
            :img="{
              src: Consts.base_image_url + 'Cross_13.webp',
              alt: 'the scary place where the magic happens',
            }"
          ></FullsizeImage>
        </template>
      </StandardSlotted>
    </template>
    <template v-slot:second>
      <StandardSlotted horizontal class="flex-col-reverse">
        <template v-slot:first>
          <FullsizeImage
            :img="{
              src: Consts.base_image_url + 'Cross_15.webp',
              alt: 'people sitting around a table watching each other intently',
            }"
          ></FullsizeImage>
        </template>
        <template v-slot:second>
          <div class="w-full flex">
            <div class="w-4/5 m-auto">
              <TitleTextItem
                title="Investment Highlights"
                text="Our carefully curated portfolio offers a balanced blend of high-growth ventures, mitigating the impact of market fluctuations and enhancing long-term value creation."
                button-text="Top Investments"
                button-url="/top_projects"
              >
              </TitleTextItem>
            </div>
          </div>
        </template>
      </StandardSlotted>
    </template>
  </StandardSlotted>

  <StandardSlotted>
    <template v-slot:first>
      <div class="my-auto xl:px-10">
        <TitleTextItem
          title="Our many different fields of action"
          text="We are at the forefront of multiple disciplines, leading the charge in innovation and problem-solving. From Sustainable Energy and Clean Technology to AI and Robotics, we're paving the way for a brighter future. Click below to explore our diverse projects."
          additionalTitleClasses="text-primary"
          button-text="Investment Areas"
          button-url="/areas"
        />
      </div>
    </template>
    <template v-slot:second>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + 'Cross_12.webp',
          alt: 'an image of the fabric of reality',
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>
</template>
