<script setup lang="ts">
import { Project as ProjectDAO, Area as AreaDAO } from "~/utils/DatabaseTypes";
import { ContentItem } from "~/utils/Types";
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/",
  alt: "area",
};
const route = useRoute();
const id = window.location.pathname.split("/")[2];
const area_code = parseInt(id) + 1;

const { data: d } = await useFetch<AreaDAO>("/api/areas/" + area_code);
if (d.value == null) {
  navigateTo("/404");
}
const area = d.value;
const grid_content: ContentItem[] = [];
if (area != null) {
  const projects = area.project;
  projects.forEach((p) => {
    grid_content.push({
      buttontext: "Project",
      buttonlink: "/projects/" + p.project_code.toString(),
      maintext: p.name ?? "",
      maindesc: "",
    });
  });
}
</script>

<template>
  <PageHeader
    :image="{ src: backgroundImageHeader.src + area?.image, alt: '' }"
  >
    <TitleTextItem
      :title="area?.name ?? ''"
      :text="area?.description ?? ''"
      centered
      additionalTextClasses="text-secondarytext px-20"
      additionalTitleClasses="text-secondarytext"
    >
    </TitleTextItem>
  </PageHeader>

  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        :title="area?.section_1_title ?? ''"
        :text="area?.section_1_description ?? ''"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src + area?.section_1_image"
          :alt="backgroundImageHeader.alt + '_image_1'"
        />
      </div>
    </template>
  </StandardSlotted>

  <StandardSlotted separator>
    <template v-slot:first>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src + area?.section_2_image"
          :alt="backgroundImageHeader.alt + '_image_2'"
        />
      </div>
    </template>
    <template v-slot:second>
      <TitleTextItem
        :title="area?.section_2_title ?? ''"
        :text="area?.section_2_description ?? ''"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
  </StandardSlotted>

  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        :title="area?.section_3_title ?? ''"
        :text="area?.section_3_description ?? ''"
        additionalTextClasses="mx-auto"
        divCentered
      ></TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden h-screen">
        <img
          class="rounded m-auot object-cover h-full"
          :src="backgroundImageHeader.src + area?.section_3_image"
          :alt="backgroundImageHeader.alt + '_image_3'"
        />
      </div>
    </template>
  </StandardSlotted>

  <!-- Project related to this area -->
  <StandardSlotted separator>
    <template v-slot:first>
      <div class="p-10">
        <TitleTextItem
          title="Projects in this field"
          text="Explore the startups in our portfolio working on these topics"
          additionalTitleClasses="text-primary"
        ></TitleTextItem>
      </div>
    </template>
    <template v-slot:second>
      <GridContainer :content="grid_content" />
    </template>
  </StandardSlotted>
</template>
