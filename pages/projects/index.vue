<script setup lang="ts">
import { Area as AreaDAO, Project as ProjectDAO } from "~/utils/DatabaseTypes";
import { ContentItem } from "~/utils/Types";
const imageBucket = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};

const { data: d } = await useFetch<AreaDAO[]>("/api/areas/with_projects");
if (d.value == null) {
  navigateTo("/404");
}
let areas: AreaDAO[] = [];
let grid_contents: ContentItem[][] = [];
if (d.value != null) {
  areas = d.value.sort((a, b) => (a.slug > b.slug ? 1 : 0));
  areas.forEach((a) => {
    let arr: ContentItem[] = [];
    a.project.forEach((p) => {
      arr.push({
        buttontext: "Project",
        buttonlink: "/projects/" + p.slug.toString(),
        maintext: p.name ?? "",
        maindesc: "",
      });
      grid_contents.push(arr);
    });
  });
}
</script>

<template>
  <StandardSlotted v-for="(area, index) in areas" separator class="py-40">
    <template v-slot:first>
      <TitleTextItem
        :title="area.name ?? ''"
        :text="area.description ?? ''"
        buttonText="Area"
        :button-url="'/areas/' + area.slug"
        :buttonFilled="false"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:second>
      <GridContainer :content="grid_contents.at(index)"> </GridContainer>
    </template>
  </StandardSlotted>
</template>
