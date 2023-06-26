<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp",
  alt: "hero",
};
const imageBucket =
  "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";
</script>
<template>
  <PageHeader :image="backgroundImageHeader">
    <div class="font-bold text-4xl text-secondarytext">
      <h1>LVenture Group is a Venture</h1>
      <h1>Capital company, investing in</h1>
      <h1>early-stage startups to shape</h1>
      <h1>tomorrow’s entrepreneurship.</h1>
    </div>
  </PageHeader>

  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        title="We Invest in Startups"
        text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>

    <template v-slot:second
      ><div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'WF Hero_3.jpg'"
          alt="people around a table"
        /></div
    ></template>
  </StandardSlotted>
  <StandardSlotted separator>
    <template v-slot:first>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'WF Hero_9.jpg'"
          alt="a whiteboard with a lot of text on it"
        />
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        title="We Value Capital"
        text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
  </StandardSlotted>
  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        title="We Transform Corporates"
        text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'Rectangle 3_10.jpg'"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>
</template>
