<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};
</script>
<template>
  <main>
    <StandardSlotted>
      <PageHeader :image="backgroundImageHeader">
        <TitleTextItem
          title="Our project portfolio"
          text="ciao"
          buttonText="Go To Projects"
          centered
          additionalTextClasses="text-secondarytext"
        >
        </TitleTextItem>
      </PageHeader>
    </StandardSlotted>
  </main>
</template>
