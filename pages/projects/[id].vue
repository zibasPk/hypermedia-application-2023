<script setup lang="ts">
import { Area, Project } from "~/utils/DatabaseTypes";
import { Consts } from "~/utils/Types";

const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: p } = await useFetch("/api/projects/" + id);
const { data: a } = await useFetch("/api/projects/" + id + "/areas/");
let project = p.value as Project;
const areas = a.value as { area: Area }[];

const imageGridItemsArrayForAreas = areas.map(({ area }) => ({
  buttontext: area.name || "",
  buttonlink: "/areas/" + area.slug,
  maintext: area.name || "",
  maindesc: "",
  rendermaindesc: true, // assuming you want this to be true for all areas
  image: {
    src: area.image || "",
    alt: area.name ? `logo for area ${area.name}` : "",
  },
}));

let imageGridItemForSuper: {
  buttontext: string;
  buttonlink: string;
  maintext: string;
  maindesc: string;
  rendermaindesc: boolean; // assuming you want this to be true for the supervisor
  image: { src: string; alt: string };
};
if (project.supervisor != null) {
  imageGridItemForSuper = {
    buttontext: project.supervisor.name || "",
    buttonlink: "/people/" + project.supervisor.slug,
    maintext: project.supervisor.name + " " + project.supervisor.surname || "",
    maindesc: project.supervisor.role || "",
    rendermaindesc: true, // assuming you want this to be true for the supervisor
    image: {
      src: project.supervisor.image || "",
      alt: project.supervisor.name
        ? `picture of supervisor ${project.supervisor.name} ${project.supervisor.surname}`
        : "",
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
            <h3 class="md:text-left">Areas</h3>
          </div>
          <div
            class="grid auto-rows-fr place-items-start gap-4 xl:grid-cols-2 z-20"
          >
            <ImageGridItem
              v-for="(item, index) in imageGridItemsArrayForAreas"
              :key="index"
              buttontext="Area"
              :buttonlink="item.buttonlink"
              :maintext="item.maintext"
              :maindesc="item.maindesc"
              :rendermaindesc="item.rendermaindesc"
              :image="item.image"
            />
          </div>
          <div class="font-bold text-3xl pt-10 pb-2 text-secondarytext">
            <h3 class="text-left">Supervisor</h3>
          </div>
          <div>
            <ImageGridItem
              class="max-xl:m-auto"
              buttontext="Profile"
              :buttonlink="imageGridItemForSuper.buttonlink"
              :maintext="imageGridItemForSuper.maintext"
              :maindesc="imageGridItemForSuper.maindesc"
              :rendermaindesc="imageGridItemForSuper.rendermaindesc"
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
          alt: 'logo of ' + project.name,
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>
  <StandardSlotted class="flex-col-reverse">
    <template v-slot:first>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + project.section_2_image,
          alt: 'logo of project ' + project.name,
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
