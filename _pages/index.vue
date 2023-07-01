<!--
    Home page
-->
<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <main>
    <img id="main-img" src="~/assets/img/home-image.webp" />
    <h2 class="bg-white">
      This is a description for the Dog's Hotel. The best place where dogs can
      rest.
    </h2>
    <button @click="count++">Count is: {{ count }}</button>
  </main>
</template>
