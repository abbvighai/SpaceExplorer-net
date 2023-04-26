<template>
    <div class="flex flex-col">
    </div>
    <div class="flex flex-col xl:flex-row gap-4 p-20 lg:pl-32 ">
        <div v-for="v in videos" :key="v.link"
            class="bg-cover flex w-64 h-40 items-center justify-center hover:outline hover:outline-gray-300">
            <iframe :src="v.link" class="w-full h-full"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const videos = ref([{ link: "https://www.youtube.com/embed/-1wcilQ58hI" }, { link: "https://www.youtube.com/embed/OHQ4iGb95NM" }])
</script>