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
    default: false,
  },
  divCentered: {
    type: Boolean,
    required: false,
    default: false,
  },
  width: {
    type: String,
    required: false,
  },
  additionalTextClasses: {
    type: String,
    required: false,
  },
  additionalTitleClasses: {
    type: String,
    required: false,
    default: "text-primary",
  },
});

let flexStyle = "flex flex-col mx-auto";
let textStyle = "text-xl pt-10";
let buttonStyle = "";
if (props.divCentered) {
  flexStyle = "flex flex-col items-center justify-center p-10";
  buttonStyle = "w-full";
}
if (props.centered) {
  flexStyle = "flex flex-col items-center justify-center text-center";
  textStyle += " text-center";
}
textStyle += " " + props.additionalTextClasses;
if (props.width) {
  flexStyle += " " + props.width;
}
</script>

<template>
  <div :class="flexStyle">
    <h1 class="text-4xl font-bold w-full" :class="additionalTitleClasses">
      {{ props.title }}
    </h1>
    <slot name="before"></slot>
    <p class="w-full" :class="textStyle">{{ props.text }}</p>
    <slot name="after"></slot>
    <div :class="buttonStyle">
      <FilledButton
        v-if="buttonText"
        :link="props.buttonUrl"
        classes="w-44 mt-10"
      >
        <template v-slot:content>
          {{ props.buttonText }}
        </template>
      </FilledButton>
    </div>
  </div>
</template>
