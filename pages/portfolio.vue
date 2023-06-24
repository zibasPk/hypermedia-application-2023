<script setup lang="ts">
import { Project } from "~/utils/DatabaseTypes";
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/",
  alt: "top_projects_",
};

const { data: d } = await useFetch<Project[]>("/api/projects/top");
const top_projects = d.value;
if (top_projects == null) {
  navigateTo("/404");
}
</script>

<template>
  <PageHeader :image="backgroundImageHeader">
    <TitleTextItem
      title="My preciousss"
      text="We wants it, we needs it. Must have the precious. They stole it from us. Sneaky little hobbitses."
      centered
      buttonText="Go To Projects"
      additionalTextClasses="text-secondarytext"
      additionalTitleClasses="text-secondarytext"
    >
    </TitleTextItem>
  </PageHeader>

  <StandardSlotted v-for="(project, index) in top_projects">
    <template v-slot:first v-if="(index + 1) % 2">
      <TitleTextItem
        :title="project.name"
        :text="project.section_1_description"
        buttonText="Go to Project"
        :buttonUrl="'/projects/' + project.project_code.toString()"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:first v-else>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src + project.section_1_image"
          :alt="backgroundImageHeader.alt + project.section_1_image"
        />
      </div>
    </template>

    <template v-slot:second v-if="(index) % 2">
      <TitleTextItem
        :title="project.name"
        :text="project.section_1_description"
        buttonText="Go to Project"
        :buttonUrl="'/projects/' + project.project_code.toString()"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:second v-else>
      <div class="overflow-hidden h-[1006px]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="backgroundImageHeader.src + project.section_1_image"
          :alt="backgroundImageHeader.alt + project.section_1_image"
        />
      </div>
    </template>
  </StandardSlotted>
</template>
