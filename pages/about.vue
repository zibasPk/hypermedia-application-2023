<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp",
  alt: "hero",
};
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

  <StandardSlotted>
    <TitleTextItem
      title="We Invest in Startups"
      text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
      additionalTitleClasses="text-primary"
    />
    <div class="overflow-hidden h-[1006px]">
      <img
        class="rounded m-auto object-cover h-full"
        :src="backgroundImageHeader.src"
        :alt="backgroundImageHeader.alt"
      />
    </div>
  </StandardSlotted>
  <StandardSlotted>
    <div class="overflow-hidden h-[1006px]">
      <img
        class="rounded m-auto object-cover h-full"
        :src="backgroundImageHeader.src"
        :alt="backgroundImageHeader.alt"
      />
    </div>
    <TitleTextItem
      title="We Value Capital"
      text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
      additionalTitleClasses="text-primary"
    />
  </StandardSlotted>
  <StandardSlotted>
    <TitleTextItem
      title="We Transform Corporates"
      text="Quis consectetur anim ut commodo deserunt quis exercitation ullamco ut nulla aute elit. Proident aute ad aliqua magna Lorem culpa exercitation. Nisi anim eiusmod nulla esse voluptate aliquip consequat labore Lorem pariatur mollit consequat."
      additionalTitleClasses="text-primary"
    />
    <div class="overflow-hidden h-[1006px]">
      <img
        class="rounded m-auto object-cover h-full"
        :src="backgroundImageHeader.src"
        :alt="backgroundImageHeader.alt"
      />
    </div>
  </StandardSlotted>
</template>
