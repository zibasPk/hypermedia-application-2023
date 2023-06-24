<script setup lang="ts">
import { Project, TeamMember } from "../../utils/DatabaseTypes";
const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: m } = await useFetch<TeamMember>("/api/people/" + id);
const member = m.value;
if (member == null) {
  navigateTo("/404");
}
const projects = member?.projects;
</script>

<template>
  <StandardSlotted separator>
    <template v-slot:first>
      <TitleTextItem
        :title="member?.name + ' ' + member?.surname"
        :text="member?.short_description"
        divCentered
      >
        <div>role: {{ member?.role }}</div>
      </TitleTextItem>
    </template>
    <template v-slot:second> </template>
  </StandardSlotted>
</template>
