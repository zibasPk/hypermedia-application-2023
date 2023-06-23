<template>
  <main>
    <div>This is project {{ route.params.id }} with descr:</div>
    <span>
      {{ project.description }}
    </span>
    <span>
      this project is supervised by:
      {{ project.supervisor.name }} {{ project.supervisor.surname }}
    </span>
  </main>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: p } = await useFetch("/api/projects/" + id);
let project = p.value;
</script>
