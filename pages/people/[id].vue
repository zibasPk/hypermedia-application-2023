<script setup lang="ts">
import { Project, TeamMember } from "../../utils/DatabaseTypes";

const BucketUrl =
  "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";
const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: m } = await useFetch<TeamMember>("/api/people/" + id);

const member = m.value;
if (member == null) {
  navigateTo("/404");
}
const projects = member?.project;

let roleText = member?.role;
switch (roleText) {
  case "Board":
    roleText = "Board Member";
    break;
  case "Assembly":
    roleText = "Assembly Member";
    break;
  case "Supervisor":
    roleText = "Project Supervisor";
    break;
  default:
    roleText = roleText;
    break;
}
let hasProjects = false;
let adaptedData: any[] = [];
if (projects!.length > 0) {
  hasProjects = true;
  adaptedData = projects!.map((project) => {
    return {
      buttontext: "View Project",
      buttonlink: "/projects/" + project.project_code.toString(),
      maintext: project.name,
      rendermaindesc: false,
      image: {
        src: project.section_1_image,
        alt: project.name + "image",
      },
    };
  });
}
</script>

<template>
  <StandardSlotted :separator="hasProjects" class="pt-32 pb-32">
    <template v-slot:first>
      <TitleTextItem
        :title="member?.name + ' ' + member?.surname"
        :text="member?.short_description || ''"
        additionalTitleClasses="pb-5"
        divCentered
      >
        <template v-slot:before>
          <div class="font-light w-full pb-">Role: {{ roleText }}</div>
        </template>
      </TitleTextItem>
    </template>
    <template v-slot:second>
      <div class="overflow-hidden max-h-[50rem]">
        <img
          class="rounded m-auto object-cover h-full"
          :src="BucketUrl + member?.image || ''"
          :alt="member?.name + ' ' + member?.surname + ' image' || 'member'"
        />
      </div>
    </template>
  </StandardSlotted>
  <StandardSlotted v-if="hasProjects">
    <template v-slot:first>
      <div class="px-10">
        <TitleTextItem
          :title="
            'Projects supervised by ' + member?.name + ' ' + member?.surname
          "
          :text="
            'Discover the Remarkable Projects Supervised by ' +
            member?.name +
            ' ' +
            member?.surname +
            '.'
          "
          additionalTitleClasses="pb-5"
        >
        </TitleTextItem>
      </div>
    </template>
    <template v-slot:second>
      <GridContainer :content="adaptedData" />
    </template>
  </StandardSlotted>
</template>
