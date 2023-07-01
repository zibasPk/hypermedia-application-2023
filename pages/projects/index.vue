<script setup lang="ts">
import { Area as AreaDAO, Project as ProjectDAO } from "~/utils/DatabaseTypes";
import { ContentItem, Consts } from "~/utils/Types";

const { data: d } = await useFetch<AreaDAO[]>("/api/areas/with_projects");
if (d.value == null) {
  navigateTo("/404");
}
let areas: AreaDAO[] = d.value ?? [];

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
  <div v-for="(area, index) in areas">
    <StandardSlotted :separator="false" class="pb-16">
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
