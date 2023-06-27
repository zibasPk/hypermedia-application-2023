<script setup lang="ts">
import { TeamMember } from "~/utils/DatabaseTypes";
import { ContentItem } from "~/utils/Types";

const backgroundImageHeader = {
  src: "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/WF Hero_5.jpg",
  alt: "hero",
};

const { data } = await useFetch<TeamMember[]>("/api/people");

let adaptedData = data.value?.map((member) => {
  return {
    buttontext: "Profile",
    buttonlink: "/people/" + member.slug,
    maintext: member.name + " " + member.surname,
    maindesc: member.role ?? "",
    rendermaindesc: false,
    image: {
      src: member.image,
      alt: member.name,
    },
  };
});

console.log(adaptedData);

let board: ContentItem[] = [];
let assembly: ContentItem[] = [];
let members: ContentItem[] = [];

if (adaptedData != null) {
  board = adaptedData.filter((member) => member.maindesc === "Board");
  assembly = adaptedData.filter((member) => member.maindesc === "Assembly");
  members = adaptedData.filter((member) => member.maindesc === "Supervisor");
}
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

  <StandardSlotted separator class="py-40">
    <template v-slot:first>
      <TitleTextItem
        title="Board"
        text="Our esteemed board members are the driving force behind our vision for innovation and investment. With their vast expertise and unwavering commitment, they play a pivotal role in shaping the future of our industry."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
    <template v-slot:second>
      <GridContainer :content="board" />
    </template>
  </StandardSlotted>

  <StandardSlotted separator class="py-40">
    <template v-slot:first>
      <GridContainer :content="assembly" />
    </template>
    <template v-slot:second>
      <TitleTextItem
        title="Assembly"
        text="At CG venture, our Venture Capital Assembly forms the backbone of our collaborative and growth-oriented approach to investing. Comprised of exceptional professionals from diverse backgrounds, the Assembly represents a dynamic and synergistic force that drives our success."
        additionalTitleClasses="text-primary"
        divCentered
      />
    </template>
  </StandardSlotted>

  <StandardSlotted class="py-40">
    <template v-slot:first>
      <div class="p-10">
        <TitleTextItem
          title="Other Project Supervisors"
          text="Our Project Supervisors bring a wealth of experience and industry knowledge to the table. They have a proven track record of identifying and nurturing promising startups, helping them scale and reach their full potential. With their sharp business acumen, they provide invaluable insights into market trends, competitive landscapes, and emerging technologies."
          additionalTitleClasses="text-primary"
        />
      </div>
    </template>
    <template v-slot:second>
      <GridContainer :content="members" />
    </template>
  </StandardSlotted>
</template>
