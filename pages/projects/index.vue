<script setup lang="ts">
import {Area as AreaDAO, Project as ProjectDAO} from "~/utils/DatabaseTypes";
const imageBucket = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF%20Hero.jpg",
  alt: "hero",
};

const { data : d } = await useFetch<AreaDAO[]>("/api/areas/with_projects");
if (d.value == null) {
  navigateTo("/404")
}
const areas = d.value?.sort((a, b) => a.area_code - b.area_code);
const grid_content = areas?.map(area => {
  return area.project.map(p => {
    return {
      buttontext: "Project",
      buttonlink: "/projects/" + p.project_code.toString(),
      maintext: p.name,
    }
  })
})

</script>

<template>

  <StandardSlotted v-for="(area, index) in areas" separator>
    <template v-slot:first>
      <TitleTextItem
        :title="area.name"
        :text="area.description"
        buttonText="Area"
        :button-url="'/areas/' + (area.area_code - 1)"
        :buttonFilled="false"
        divCentered
      >
      </TitleTextItem>
    </template>
    <template v-slot:second>
      <GridContainer :content="grid_content?.at(index)">
      </GridContainer>
    </template>

  </StandardSlotted>

</template>