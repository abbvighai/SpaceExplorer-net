<template>
    <div>
        <div class="h-20 bg-gradient-to-t from-gray-900"></div>
        <div class="flex flex-col justify-center items-center bg-gray-900 p-10">
            <div class="text-white text-2xl uppercase font-bold pb-5">Daily themes</div>
            <div class="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4">
                <div v-for="theme in themes">
                    <button @click="ShowInfo(theme)" :style="{ backgroundImage: `url(${theme.image})` }"
                        class="bg-contain flex hover:outline hover:outline-gray-700 w-60 h-80 flex-col justify-end align-bottom drop-shadow-lg hover:font-extrabold">
                        <div v-if="theme.IsShowing"
                            class="text-white font-mono text-xs font-bold bg-gray-800 w-60 h-80 p-12 flex flex-col justify-between">
                            {{ theme.info }}
                            <div class="text-white font-mono text-sm">
                                Go back?
                            </div>
                        </div>
                        <div v-else>
                            <div class="h-20 bg-gradient-to-t from-gray-800"></div>
                            <div class="bg-gray-800 pb-10 items-center">
                                <div class="text-white font-mono text-3xl uppercase font-bold">
                                    {{ theme.title }}
                                </div>
                                <div class="text-white font-mono text-sm">
                                    Read more about {{ theme.title }}
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div></div>
        <div class="h-20 bg-gradient-to-b from-gray-900"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const themes = ref([{ IsShowing: false, title: "Planets", image: "/img/planet.jpg", info: "Planets are celestial bodies that orbit around a star and do not produce their own light. There are eight planets in our solar system, including Earth, that vary in size, composition, and atmospheric conditions." },
{ IsShowing: false, title: "Galaxies", image: "/img/galaxy.jpg", info: "Galaxies are massive collections of stars, dust, and gas bound together by gravity. There are billions of galaxies in the observable universe, each with its own unique characteristics and properties." },
{ IsShowing: false, title: "Rockets", image: "/img/rocket_launch.jpg", info: "Rockets are vehicles that are designed to travel through space by expelling exhaust gases from their engines. They have been used to launch satellites, explore space, and even send humans to the moon." },
{ IsShowing: false, title: "Astronauts", image: "/img/Astronaut.jpg", info: "Astronauts are individuals who have been trained to pilot and operate spacecraft, and to conduct scientific experiments in space. They face unique challenges such as microgravity, radiation exposure, and isolation." }])
function ShowInfo (theme) {
    theme.IsShowing = !theme.IsShowing
    return theme.IsShowing
}
</script>

<style scoped></style>