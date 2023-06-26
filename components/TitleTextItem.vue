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
  buttonFilled: {
    type: Boolean,
    required: false,
    default: true,
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
  topMargin: {
    type: Boolean,
    required: false,
    default: true,
  },
});

let flexStyle = "flex flex-col mx-auto";
let textStyle = "text-xl pt-10 " + props.additionalTextClasses;
let buttonStyle = "";
if (props.divCentered) {
  flexStyle = "flex flex-col items-center justify-center p-10";
  buttonStyle = "w-full";
}
if (props.centered) {
  flexStyle = "flex flex-col items-center justify-center text-center";
  textStyle += " text-center";
}
if (props.width) {
  flexStyle += " " + props.width;
}
</script>

<template>
  <div :class="flexStyle">
    <h1
      class="text-4xl font-bold w-full text-primary"
      :class="additionalTitleClasses"
    >
      {{ props.title }}
    </h1>
    <slot name="before"></slot>
    <p class="w-full" :class="textStyle">{{ props.text }}</p>
    <slot name="after"></slot>
    <div :class="buttonStyle">
      <FilledButton
        v-if="buttonText && buttonFilled"
        :link="props.buttonUrl"
        v-bind:classes="topMargin ? 'w-44 mt-10' : 'w-44 mt-2'"
      >
        <template v-slot:content>
          {{ props.buttonText }}
        </template>
      </FilledButton>
      <OutlineButton
        v-if="buttonText && !buttonFilled"
        :link="props.buttonUrl"
        v-bind:classes="topMargin ? 'w-44 mt-10' : 'w-44 mt-2'"
      >
        <template v-slot:content>
          {{ props.buttonText }}
        </template>
      </OutlineButton>
    </div>
  </div>
</template>
