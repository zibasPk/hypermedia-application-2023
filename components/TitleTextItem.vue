<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: false,
  },
  buttonUrl: {
    type: String,
    required: false,
  },
  centered: {
    type: Boolean,
    required: false,
    default: false
  },
  width: {
    type: String,
    required: false,
    default: "w-full"
    
  } 
});

let flexStyle = "flex flex-col";
let textStyle = "text-xl py-10";
if(props.centered) {
 flexStyle = "flex flex-col items-center justify-center";
 textStyle += " text-center";
}
flexStyle += " " + props.width;

</script>

<template>
  <div :class="flexStyle">
    <h1 class="text-4xl font-bold">{{ props.title }}</h1>
    <p :class="textStyle" >{{ props.text }}</p>
    <FilledButton
      v-if="buttonText"
      :content="props.buttonText"
      :link="props.buttonUrl"
      classes="w-44"
    />
  </div>
</template>