<script setup lang="ts">
import { Project } from "~/utils/DatabaseTypes";
import { Consts } from "~/utils/Types";

const { data: d } = await useFetch<Project[]>("/api/projects/top");
const top_projects = d.value;
if (top_projects == null) {
  navigateTo("/404");
}
</script>

<template>
  <PageHeader
    :image="{
      src: Consts.base_image_url + 'WF%20Hero_9.webp',
      alt: 'Portfolio base image',
    }"
  >
    <div class="w-3/5 m-auto">
      <TitleTextItem
        title="Portfolio"
        text="Dive into our portfolio to discover our ground-breaking projects across various industries. Our work in Sustainable Energy, Health & Life Sciences, Fintech, and E-commerce demonstrates our dedication to innovation and impactful change."
        centered
        buttonText="Go To All Projects"
        buttonUrl="/projects"
        additionalTextClasses="text-secondarytext"
        additionalTitleClasses="text-secondarytext"
      >
      </TitleTextItem>
    </div>
  </PageHeader>

  <StandardSlotted
    v-for="(project, index) in top_projects"
    separator
    :class="index % 2 ? 'flex-col-reverse' : ''"
  >
    <template v-slot:first v-if="(index + 1) % 2">
      <TitleTextItem
        :title="project.name ?? ''"
        :text="project.section_1_description ?? ''"
        buttonText="Go to Project"
        :buttonUrl="'/projects/' + project.slug"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:first v-else>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + project.section_1_image,
          alt: project.name + ' image',
        }"
      ></FullsizeImage>
    </template>

    <template v-slot:second v-if="index % 2">
      <TitleTextItem
        :title="project.name ?? ''"
        :text="project.section_1_description ?? ''"
        buttonText="Go to Project"
        :buttonUrl="'/projects/' + project.slug"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:second v-else>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + project.section_1_image,
          alt: project.name + ' image',
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>
</template>
