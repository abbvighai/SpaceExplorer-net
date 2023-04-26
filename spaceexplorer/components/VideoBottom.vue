<template>
    <div class="flex flex-col md:flex-row">
        <div
            class="text-white text-3xl md:text-6xl uppercase font-bold pl-20 w-fit md:w-96 flex flex-col md:space-y-2 justify-start">
            Discover space in
            a new
            way
            <div
                class="text-white text-sm md:text-2xl uppercase font-bold w-max flex flex-row-reverse items-center gap-2 md:gap-5">
                <NuxtLink :to="ActiveVideo.link" class="flex flex-row-reverse items-center hover:font-extrabold">Watch The
                    Video
                    <nuxt-icon name="play_circle"
                        class="text-5xl w-12 h-12 rounded-full hover:outline hover:outline-2 hover:bg-gray-700 hover:outline-gray-900 hover:opacity-75"
                        filled />
                </NuxtLink>
            </div>
            <div class="text-sm md:text-md normal-case w-60">
                "{{ ActiveVideo.quote }}>>
            </div>
            <div class="text-sm md:text-md normal-case">© {{ ActiveVideo.quoted }}</div>
        </div>
        <div class="flex flex-col xl:flex-row gap-4 p-20 lg:pl-32 ">
          <div v-for="v in videos" :key="v.link" class="bg-cover flex w-64 h-40 items-center justify-center hover:outline hover:outline-gray-300">
            <iframe :src="v.link" class="w-full h-full"></iframe>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const ActiveVideo = ref({ quote: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.", link: "https://www.youtube.com/watch?v=oYJRwgHEFS0", quoted: "John F. Kennedy" })
const videos = ref([{ link: "https://www.youtube.com/embed/S9HdPi9Ikhk" }, { link: "https://www.youtube.com/embed/MdvoA-sjs0A" }])
</script>