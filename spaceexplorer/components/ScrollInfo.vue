<template>
    <div class="flex flex-col md:flex-row justify-between">
        <div>
            <div class="text-white text-6xl uppercase font-bold pl-20">{{ active.title }}</div>
            <div class="container pl-20 min-h-min max-w-sm">
                <p class="text-white">
                    {{ active.info }}
                </p>
            </div>
        </div>
        <div class="w-fit flex flex-row md:flex-col m-5 md:space-x-0 space-x-5 ml-20">
            <div v-for="( infoBox, index) in infoBoxes">
                <button @click="selectInfo(infoBox)"
                    :class="{ 'default': !infoBox.selected, 'activeInfo': infoBox.selected }" class="default">{{ "0" +
                        (index + 1) }}
                    <div :class="{ 'hidden': !infoBox.selected, 'visible': infoBox.selected }" class="bg-white h-1 w-20 md:w-40">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const infoBoxes = ref([{ selected: true, title: 'space explorer', info: "Welcome to our space-oriented blog forum, where we bring the wonders of the universe right to your screen! Our team of passionate space enthusiasts brings you the latest news and insights from the world of spaceexploration, sharing their expertise and experiences to inspire and inform.From the mysteries of the cosmos to the latest technological breakthroughs, we cover it all. Join us on this thrilling journey of discovery and exploration as we aim for the stars!" },
{ selected: false, title: 'Cosmic Chronicles', info: "Join our cosmic journey of discovery and exploration, as we bring the latest space news and insights right to your screen! Our passionate team of space enthusiasts shares their expertise and experiences, covering everything from the mysteries of the cosmos to the latest technological breakthroughs. Come explore the universe with us and aim for the stars!" },
{ selected: false, title: 'Galactic Gaze', info: "We explore the vast expanse of galaxies and the mysteries of the cosmos. From the birth and evolution of stars to the formation of black holes and the search for extraterrestrial life, our experts share their insights and discoveries to inspire and inform. Join us on this journey of wonder and discovery as we gaze into the depths of the universe." },
{ selected: false, title: 'Galactic Launch Co.', info: "Galactic Launch Co. successfully launched its latest rocket, named Nova 9, into orbit earlier today. The rocket, carrying a payload of communication satellites, blasted off from the company's launch pad in Florida and reached its intended orbit without incident." },
{ selected: false, title: 'Blackstar', info: "In a stunning revelation that has rocked the world of space exploration, the secret organization known as Blackstar has been exposed. This clandestine group, long rumored to be involved in cutting-edge space technology and covert operations, has finally been brought to light by a leak from a former member." }])
let active = ref(infoBoxes.value[0])
function selectInfo (infoBox) {
    infoBoxes.value.forEach(b => b.selected = false)
    infoBox.selected = true
    active = infoBox
}
</script>

<style scoped>
.default {
    @apply text-white text-3xl md:text-5xl font-bold flex md:flex-row flex-col;
}

.activeInfo {
    @apply text-white text-5xl md:text-7xl font-bold flex items-center;
}
</style>