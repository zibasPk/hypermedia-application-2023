<script setup lang="ts">
import { TeamMember } from "~/utils/DatabaseTypes";
import { ContentItem } from "~/utils/Types";

const backgroundImageHeader = {
  src: Consts.base_image_url + "WF Hero_5.jpg",
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
    <div class="w-full flex">
      <div class="font-bold text-4xl text-secondarytext w-4/5 m-auto">
        <h1>
          Meet the exceptional individuals who power our organization. <br />
          With diverse skills, unwavering dedication, and a shared passion for
          success, our team drives innovation and delivers outstanding results.
        </h1>
      </div>
    </div>
  </PageHeader>

  <StandardSlotted separator class="xl:py-20">
    <template v-slot:first>
      <div>
        <TitleTextItem
          title="Board"
          text="Our esteemed board members are the driving force behind our vision for innovation and investment. With their vast expertise and unwavering commitment, they play a pivotal role in shaping the future of our industry."
          additionalTitleClasses="text-primary"
          divCentered
        />
      </div>
    </template>
    <template v-slot:second>
      <GridContainer
        :content="board"
        class="pt-10 md:pt-0 md:pb-10 xl:pt-0 xl:m-auto m-auto"
        variant="secondary"
      />
    </template>
  </StandardSlotted>

  <StandardSlotted separator class="xl:py-20 flex-col-reverse">
    <template v-slot:first>
      <GridContainer
        :content="assembly"
        class="pt-10 md:pt-0 md:pb-10 xl:pt-0 xl:m-auto m-auto"
        variant="secondary"
      />
    </template>
    <template v-slot:second>
      <div>
        <TitleTextItem
          title="Assembly"
          text="At CG venture, our Venture Capital Assembly forms the backbone of our collaborative and growth-oriented approach to investing. Comprised of exceptional professionals from diverse backgrounds, the Assembly represents a dynamic and synergistic force that drives our success."
          additionalTitleClasses="text-primary"
          divCentered
        />
      </div>
    </template>
  </StandardSlotted>

  <StandardSlotted class="xl:py-20">
    <template v-slot:first>
      <div>
        <TitleTextItem
          title="Other Project Supervisors"
          text="Our Project Supervisors bring a wealth of experience and industry knowledge to the table. They have a proven track record of identifying and nurturing promising startups, helping them scale and reach their full potential. With their sharp business acumen, they provide invaluable insights into market trends, competitive landscapes, and emerging technologies."
          additionalTitleClasses="text-primary"
          divCentered
        />
      </div>
    </template>
    <template v-slot:second>
      <GridContainer
        :content="members"
        class="pt-10 md:pt-0 xl:pt-0 xl:m-auto m-auto"
        variant="secondary"
      />
    </template>
  </StandardSlotted>
</template>
