<script setup lang="ts">
import { Area as AreaDAO, Project as ProjectDAO } from "~/utils/DatabaseTypes";
import { ContentItem, Consts } from "~/utils/Types";

const { data: d } = await useFetch<AreaDAO[]>("/api/areas/");
if (d.value == null) {
  navigateTo("/404");
}

let areas: AreaDAO[] = d.value ?? [];
const backgroundImageHeader = {
  src: Consts.base_image_url + "WF Hero_3.webp",
  alt: "All investement projects header background image",
};

let grid_contents: ContentItem[][] = [];

if (d.value != null) {
  for (const a of areas) {
    let arr: ContentItem[] = [];
    for (const p of a.project) {
      try {
        const { data: abs_proj } = await useFetch<ProjectDAO>(
          "/api/projects/" + p.slug
        );
        if (abs_proj.value == null) continue;
        let project = abs_proj.value;
        arr.push({
          buttontext: "Project",
          buttonlink: "/projects/" + project.slug,
          maintext: project.name ?? "",
          maindesc: "",
          image: {
            src: project.section_1_image,
            alt: "logo of " + project.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    grid_contents.push(arr);
  }
}
</script>

<template>
  <PageHeader :image="backgroundImageHeader">
    <TitleTextItem
      title="All our investement projects"
      text="Here is a complete list of all our projects divided by area."
      centered
      additionalTextClasses="text-secondarytext"
      additionalTitleClasses="text-secondarytext"
    >
    </TitleTextItem>
  </PageHeader>

  <div v-for="(area, index) in areas" :key="index">
    <StandardSlotted :separator="false" class="pb-16 pt-10 md:pt-0">
      <template v-slot:first>
        <TitleTextItem
          :title="area.name ?? ''"
          :text="area.description ?? ''"
          buttonText="Area"
          :button-url="'/areas/' + area.slug"
          divCentered
        >
        </TitleTextItem>
      </template>
      <template v-slot:second>
        <FullsizeImage
          :img="{
            src: Consts.base_image_url + area.image,
            alt: 'logo of the area' + area.name,
          }"
        ></FullsizeImage>
      </template>
    </StandardSlotted>
    <FlexContainer :content="grid_contents[index]" class="justify-center">
    </FlexContainer>
  </div>
</template>
