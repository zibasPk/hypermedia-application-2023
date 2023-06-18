<script setup lang="ts">
const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/temp",
  alt: "hero",
};

const tempEmployees = [
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
  {
    buttontext: "Profile",
    buttonlink: "#",
    maintext: "mario draghi",
    maindesc: "Board member",
    rendermaindesc: true,
    image: backgroundImageHeader,
  },
];
</script>
<template>
  <PageHeader :image="backgroundImageHeader">
    <div class="font-bold text-4xl text-secondarytext">
      <h1>Meet the exceptional individuals who power our organization.</h1>
      <h1>
        With diverse skills, unwavering dedication, and a shared passion for
        success,
      </h1>
      <h1>our team drives innovation and delivers outstanding results.</h1>
    </div>
  </PageHeader>

  <StandardSlotted>
    <TitleTextItem
      title="Board"
      text="Our esteemed board members are the driving force behind our vision for innovation and investment. With their vast expertise and unwavering commitment, they play a pivotal role in shaping the future of our industry."
    />
    <GridContainer :content="tempEmployees" />
  </StandardSlotted>

  <StandardSlotted>
    <GridContainer :content="tempEmployees" />
    <TitleTextItem
      title="Assembly"
      text="At CG venture, our Venture Capital Assembly forms the backbone of our collaborative and growth-oriented approach to investing. Comprised of exceptional professionals from diverse backgrounds, the Assembly represents a dynamic and synergistic force that drives our success."
    />
  </StandardSlotted>

  <StandardSlotted>
    <TitleTextItem
      title="Other People"
      text="Our esteemed board members are the driving force behind our vision for innovation and investment. With their vast expertise and unwavering commitment, they play a pivotal role in shaping the future of our industry."
    />
    <GridContainer :content="tempEmployees" />
  </StandardSlotted>
</template>
