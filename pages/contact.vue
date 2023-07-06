<script setup lang="ts">
let messageSent = ref(false);
function sendMessage() {
  console.log("inviato messaggio");
  messageSent.value = true;
}
</script>
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
            >info@LVenture.com
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
        <form
          method="POST"
          target="_self"
          @submit.prevent="onSubmit"
          @submit="sendMessage()"
          class="flex flex-col gap-10 bg-primary rounded-3xl min-w-[14rem] w-5/6 xl:w-2/3 p-8"
        >
          <fieldset :class="messageSent ? 'hidden' : ''">
            <div class="text-center text-secondarytext font-medium">
              Send us a message!
            </div>
            <div class="flex flex-col gap-10 text-sm">
              <label class="sr-only text-white bold" for="name"
                >Your Name</label
              >
              <InputField id="name" value="Your name" />

              <label class="sr-only text-white bold" for="email"
                >Your Email</label
              >
              <InputField
                type="email"
                id="email"
                value="Your email"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />

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
              <input
                type="submit"
                value="Send message"
                class="border-2 text-white bg-secondary border-secondary hover:bg-[rgb(161,57,247)] hover:border-[rgb(161,57,247)] font-medium rounded-lg text-sm px-5 py-2.5"
              /><br /><br />
            </div>
          </fieldset>
          <div :class="messageSent ? 'h1 m-auto text-white' : 'hidden'">
            Message Sent!
          </div>
        </form>
      </div>
    </template>
  </StandardSlotted>
</template>
