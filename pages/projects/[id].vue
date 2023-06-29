<script setup lang="ts">
import { Area, Project } from "~/utils/DatabaseTypes";
import { Consts } from "~/utils/Types";

const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: p } = await useFetch("/api/projects/" + id);
const { data: a } = await useFetch("/api/project_to_area/" + id);
let project = p.value as Project;
const areas = a.value as { area: Area }[];
</script>

<template>
  <div class="min-h-[200px] h-[100vh] overflow-hidden">
    <div class="relative flex text-center align-center justify-center h-full">
      <div class="absolute inline-flex left-0 top-12 w-100">
        <TitleTextItem
          v-for="inner in areas"
          :title="inner.area.name ?? ''"
          :text="''"
          buttonText="Go to Area"
          :buttonUrl="'/areas/' + inner.area.slug"
          :buttonFilled="false"
          additionalTitleClasses="text-3xl"
          additionalTextClasses="w-3/4 text-xs pt-0"
          additionalButtonClasses="mt-2"
          centered
          class="pr-6"
          :topMargin="false"
          :paddingBetweenText="false"
        >
        </TitleTextItem>
      </div>
      <div class="m-auto z-20">
        <TitleTextItem
          :title="project.name ?? ''"
          :text="project.description ?? ''"
        >
        </TitleTextItem>
      </div>
    </div>
  </div>
  <StandardSlotted separator>
    <template v-slot:first>
      <div class="relative">
        <ImageGridItem
          buttontext="Profile"
          :buttonlink="'/people/' + project.supervisor?.slug"
          :maintext="
            project.supervisor?.name + ' ' + project.supervisor?.surname
          "
          :maindesc="project.supervisor?.role ?? ''"
          :image="{
            src: project.supervisor?.image ?? '',
            alt: 'image of ' + project.supervisor?.name,
          }"
        />
        <TitleTextItem
          :title="project.section_1_title ?? ''"
          :text="project.section_1_description ?? ''"
          divCentered
        >
        </TitleTextItem>
      </div>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="Consts.base_image_url + project.section_1_image"
          :alt="project.name + ' image'"
        />
      </div>
    </template>
  </StandardSlotted>
  <StandardSlotted>
    <template v-slot:first>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auto object-cover h-full"
          :src="Consts.base_image_url + project.section_2_image"
          :alt="project.name + ' image'"
        />
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        :title="project.section_2_title ?? ''"
        :text="project.section_2_description ?? ''"
        divCentered
      >
      </TitleTextItem>
    </template>
  </StandardSlotted>
</template>
