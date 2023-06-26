<script setup>
const imageBucket = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/W",
  alt: "project_",
};

const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: p } = await useFetch("/api/projects/" + id);
const { data: a } = await useFetch("/api/project_to_area/" + id);
let project = p.value;
const areas = a.value;
console.log(areas);
</script>

<template>
  <div class="min-h-[200px] h-[100vh] overflow-hidden">
    <div class="relative flex text-center align-center justify-center h-full">
      <div class="absolute inline-flex left-0 top-12">
        <TitleTextItem
          v-for="inner in areas"
          :title="'Area ' + inner.area.area_code"
          :text="inner.area.name"
          buttonText="Go to Area"
          :buttonUrl="'/areas/' + (inner.area.area_code - 1)"
          :buttonFilled="false"
          additionalTitleClasses="text-3xl"
          additionalTextClasses="w-3/4 text-xs pt-0"
          additionalButtonClasses="mt-2"
          centered
          class="pr-6"
          :topMargin="false"
        >
        </TitleTextItem>
      </div>
      <div class="m-auto z-20">
        <TitleTextItem :title="project.name" :text="project.description">
        </TitleTextItem>
      </div>
    </div>
  </div>
  <StandardSlotted separator>
    <template v-slot:first>
      <div class="relative">
        <ImageGridItem
          buttontext="Profile"
          :buttonlink="'/people/' + project.supervisor.member_code"
          :maintext="project.supervisor.name + ' ' + project.supervisor.surname"
          :maindesc="project.supervisor.role"
        />
        <TitleTextItem
          :title="project.section_1_title"
          :text="project.section_1_description"
          divCentered
        >
        </TitleTextItem>
      </div>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket.src + project.section_1_image"
          :alt="imageBucket.alt + project.project_code.toString() + '_image_1'"
        />
      </div>
    </template>
  </StandardSlotted>
  <StandardSlotted>
    <template v-slot:first>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="imageBucket.src + project.section_2_image"
          :alt="imageBucket.alt + project.project_code.toString() + '_image_2'"
        />
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        :title="project.section_2_title"
        :text="project.section_2_description"
        divCentered
      >
      </TitleTextItem>
    </template>
  </StandardSlotted>
</template>
