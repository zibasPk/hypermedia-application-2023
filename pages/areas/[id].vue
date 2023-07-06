<script setup lang="ts">
import { Project as ProjectDAO, Area as AreaDAO } from "~/utils/DatabaseTypes";
import { Consts, ContentItem } from "~/utils/Types";

const route = useRoute();
const id = route.params.id;

const { data: d } = await useFetch<AreaDAO>("/api/areas/" + id);
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
      buttonlink: "/projects/" + p.slug.toString(),
      maintext: p.name ?? "",
      maindesc: "",
      image: {
        src: p.section_1_image ?? "",
        alt: "logo of project " + p.name ?? "",
      },
    });
  });
}
</script>

<template>
  <PageHeader :image="{ src: Consts.base_image_url + area?.image, alt: '' }">
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
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + area?.section_1_image,
          alt: 'image representing ' + area?.section_1_title,
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>

  <StandardSlotted separator class="flex-col-reverse">
    <template v-slot:first>
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + area?.section_2_image,
          alt: 'image representing ' + area?.section_2_title,
        }"
      ></FullsizeImage>
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
      <FullsizeImage
        :img="{
          src: Consts.base_image_url + area?.section_3_image,
          alt: 'image representing ' + area?.section_3_title,
        }"
      ></FullsizeImage>
    </template>
  </StandardSlotted>

  <!-- Project related to this area -->
  <StandardSlotted :separator="false">
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
      <GridContainer :content="grid_content" variant="secondary" />
    </template>
  </StandardSlotted>
</template>
