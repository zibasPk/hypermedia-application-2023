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

const imageGridItemsArrayForAreas = areas.map(({ area }) => ({
  buttontext: area.name || "",
  buttonlink: area.slug,
  maintext: area.name || "",
  maindesc: "",
  rendermaindesc: true, // assuming you want this to be true for all areas
  variant: "secondary",
  image: {
    src: area.image || "",
    alt: area.name ? `${area.name} image` : "",
  },
}));

let imageGridItemForSuper: {
  buttontext: string;
  buttonlink: string;
  maintext: string;
  maindesc: string;
  rendermaindesc: boolean; // assuming you want this to be true for the supervisor
  variant: string; // assuming you want this to be "default" for the supervisor
  image: { src: string; alt: string };
};
if (project.supervisor != null) {
  imageGridItemForSuper = {
    buttontext: project.supervisor.name || "",
    buttonlink: project.supervisor.slug,
    maintext: project.supervisor.name + " " + project.supervisor.surname || "",
    maindesc: project.supervisor.role || "",
    rendermaindesc: true, // assuming you want this to be true for the supervisor
    variant: "default", // assuming you want this to be "default" for the supervisor
    image: {
      src: project.supervisor.image || "",
      alt: project.supervisor.name ? `${project.supervisor.name} image` : "",
    },
  };
}
</script>

<template>
  <StandardSlotted class="flex-col-reverse">
    <template v-slot:first>
      <div class="">
        <PageHeader
          :image="{
            src: Consts.base_image_url + project.descriptive_image,
            alt: '',
          }"
        >
          <div class="font-bold text-3xl pb-2 text-secondarytext">
            <p class="md:text-left">Areas</p>
          </div>
          <div class="grid gap-4 xl:grid-cols-2 z-20 align-center">
            <ImageGridItem
              class="m-auto"
              v-for="(item, index) in imageGridItemsArrayForAreas"
              :key="index"
              buttontext="Area"
              :buttonlink="item.buttonlink"
              :maintext="item.maintext"
              :maindesc="item.maindesc"
              :rendermaindesc="item.rendermaindesc"
              variant="secondary"
              :image="item.image"
            />
          </div>
          <div class="font-bold text-3xl pt-10 pb-2 text-secondarytext">
            <p class="text-left">Supervisor</p>
          </div>
          <div class="grid">
            <ImageGridItem
              class="max-xl:m-auto"
              :buttontext="imageGridItemForSuper.buttontext"
              :buttonlink="imageGridItemForSuper.buttonlink"
              :maintext="imageGridItemForSuper.maintext"
              :maindesc="imageGridItemForSuper.maindesc"
              :rendermaindesc="imageGridItemForSuper.rendermaindesc"
              variant="secondary"
              :image="imageGridItemForSuper.image"
            />
          </div>
        </PageHeader>
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        :title="project.name ?? ''"
        :text="project.description ?? ''"
        divCentered
      />
    </template>
  </StandardSlotted>
  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        :title="project.section_1_title ?? ''"
        :text="project.section_1_description ?? ''"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:second>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + project.section_1_image,
          alt: project.name + ' image',
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>
  <StandardSlotted class="flex-col-reverse">
    <template v-slot:first>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + project.section_2_image,
          alt: project.name + ' image',
        }"
      ></FullsizeImage>
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
