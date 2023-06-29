<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/Cross_14.jpg",
  alt: "people walking on pavement from above",
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
        text="We fuel startup success through strategic investments, partnering with visionary founders to drive innovation and create lasting impact. Join us as we unlock potential, ignite growth, and shape the future of the startup ecosystem."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>

    <template v-slot:second
      ><div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'WF Hero_3.jpg'"
          alt="people around a table"
        /></div
    ></template>
  </StandardSlotted>
  <StandardSlotted separator>
    <template v-slot:first>
      <div class="overflow-hidden h-screen">
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
        text="We unlock the full value of capital by maximizing investment potential. Through strategic allocation and expertise, we seize opportunities and deliver exceptional results for our partners. Join us in maximizing your capital's impact and achieving remarkable returns."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
  </StandardSlotted>
  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        title="We Transform Corporates"
        text="We are catalysts of corporate evolution, dedicated to transforming businesses through the power of innovation. By bridging the gap between startups and established companies, we facilitate strategic partnerships that drive growth and foster groundbreaking advancements. Join us in redefining the corporate landscape, embracing change, and unlocking new opportunities for success"
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket + 'Rectangle 3_10.jpg'"
          :alt="backgroundImageHeader.alt"
        />
      </div>
    </template>
  </StandardSlotted>
</template>
