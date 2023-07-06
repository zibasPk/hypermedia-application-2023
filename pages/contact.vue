<script setup lang="ts"></script>
<template>
  <StandardSlotted class="pt-10">
    <template v-slot:first>
      <div class="flex flex-col gap-10 xl:float-left xl:min-w-[15rem]">
        <div class="flex flex-col gap-10 m-auto w-5/6 xl:w-auto xl:m-0">
          <h1
            class="font-bold text-4xl text-primary pb-10 text-center xl:text-left xl:max-w-sm"
          >
            Let's discuss something cool together
          </h1>

          <div class="pl-3 max-w-sm">
            <i class="fa-solid fa-envelope text-secondary pr-3"></i
            >info@DCventure.com
          </div>
          <div
            class="rounded-lg bg-gray-600 border-gray-700 border-2 text-secondarytext p-3 max-w-sm"
          >
            <i class="fa-solid fa-phone pr-3"></i>+123 456 789
          </div>

          <div class="pl-3 max-w-md">
            <i class="fa-solid fa-location-dot pr-3 text-secondary"></i>22nd
            street Seaboard, North Carolina(NC), 27876
          </div>
        </div>
      </div>
    </template>

    <template v-slot:second>
      <div class="flex justify-center mt-10 xl:mt-0 xl:justify-end">
        <div
          class="flex flex-col gap-10 bg-primary rounded-3xl min-w-[14rem] w-5/6 xl:w-2/3 p-8"
        >
          <div class="text-center text-secondarytext font-medium">
            Send us a message!
          </div>
          <div class="flex flex-col gap-10 text-sm">
            <label class="sr-only text-white bold" for="name">Your Name</label>
            <InputField id="name" value="Your name" />

            <label class="sr-only text-white bold" for="email"
              >Your Email</label
            >
            <InputField id="email" value="Your email" />

            <label class="sr-only text-white bold" for="message"
              >Your Message</label
            >
            <TextField
              id="message"
              value="Your message"
              class="h-20 resize-none"
            />
          </div>
          <div class="flex w-full pt-28">
            <FilledButton link="#">
              <template v-slot:content>
                <div>
                  <i class="fa-solid fa-paper-plane pr-2"></i>
                  Send Message
                </div>
              </template>
            </FilledButton>
          </div>
        </div>
      </div>
    </template>
  </StandardSlotted>
</template>
