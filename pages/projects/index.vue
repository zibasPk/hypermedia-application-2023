<script setup lang="ts">
import { Area as AreaDAO, Project as ProjectDAO } from "~/utils/DatabaseTypes";
import { ContentItem, Consts } from "~/utils/Types";

const { data: d } = await useFetch<AreaDAO[]>("/api/areas/with_projects");
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
  areas.forEach((a) => {
    let arr: ContentItem[] = [];
    a.project.forEach((p) => {
      arr.push({
        buttontext: "Project",
        buttonlink: "/projects/" + p.slug,
        maintext: p.name ?? "",
        maindesc: "",
        image: {
          src: p.section_1_image,
          alt: p.name + " image",
        },
      });
    });
    grid_contents.push(arr);
  });
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
  <div v-for="(area, index) in areas">
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
            alt: area.name + ' image',
          }"
        ></FullsizeImage>
      </template>
    </StandardSlotted>
    <FlexContainer :content="grid_contents[index]" class="justify-center">
    </FlexContainer>
  </div>
</template>
