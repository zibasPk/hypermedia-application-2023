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
  topMargin: {
    type: Boolean,
    required: false,
    default: true,
  },
  paddingBetweenText: {
    type: Boolean,
    required: false,
    default: true,
  },
});

let flexStyle = "flex flex-col mx-auto";
let textStyle = "text-xl " + props.additionalTextClasses;
if (props.paddingBetweenText) {
  textStyle += " pt-5 xl:pt-10";
}

let buttonStyle = "pb-10";
if (props.buttonText) {
  buttonStyle = buttonStyle + " md:pt-0";
}
if (props.divCentered) {
  flexStyle = "flex flex-col items-center justify-center xl:px-10 pb-10";
  buttonStyle += " w-full";
}
if (props.centered) {
  flexStyle = "flex flex-col items-center justify-center text-center";
  textStyle += " text-center";
}
if (props.width) {
  flexStyle += " " + props.width;
}

flexStyle +=
  "max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center";
textStyle += " max-md::text-center";
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
        v-if="buttonText"
        :link="props.buttonUrl"
        v-bind:classes="topMargin ? 'w-44 mt-10' : 'w-44 mt-2'"
      >
        <template v-slot:content>
          {{ props.buttonText }}
        </template>
      </FilledButton>
      <OutlineButton
        v-if="buttonText"
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
