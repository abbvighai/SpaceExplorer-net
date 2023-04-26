<template>
    <div>
        <div class="h-20 bg-gradient-to-t from-gray-900"></div>
        <div class="flex flex-col justify-center items-center bg-gray-900 p-10">
            <div class="text-white text-2xl uppercase font-bold pb-5">Meet our team</div>
            <div class="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-4">
                <div v-for="member in members" :style="{ backgroundImage: `url(${member.image})` }"
                    class="bg-contain flex w-60 md:w-fill h-80 md:h-fill flex-col justify-end align-bottom drop-shadow-lg hover:outline hover:outline-gray-700">
                    <button @click="ShowInfo(member)" :style="{ backgroundImage: `url(${member.image})` }"
                        class="bg-contain flex w-60 md:w-fill h-80 md:h-fill flex-col justify-end align-bottom drop-shadow-lg">
                        <div v-if="member.IsShowing"
                            class="text-white font-mono text-xs uppercase font-bold w-60 h-80 bg-gray-800 p-12 flex flex-col justify-between">
                            {{ member.info }}
                            <div class="text-white font-mono text-sm">
                                Go back?
                            </div>
                        </div>
                        <div v-else>
                            <div class="h-20 bg-gradient-to-t from-gray-800"></div>
                            <div class="bg-gray-800 pb-10 items-center">
                                <div class="text-white font-mono text-2xl uppercase font-bold">
                                    {{ member.title }}
                                </div>
                                <div class="text-white font-mono text-md">
                                    {{ member.role }}
                                </div>
                                <div class="text-white font-mono text-sm">
                                    Get to know {{ member.title }}
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div class="h-20 bg-gradient-to-b from-gray-900"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const members = ref([{ IsShowing: false, title: "Viggo Haimanas Bygdén", role: "Founder", image: "/img/Viggo_Commercial.png", info: "My name is Viggo Haimanas Bygdén, and I am the owner and founder of this blog forum. I created this forum as a platform for people like myself who share the same fascination with space and all its wonders." }, 
{ IsShowing: false, title: "Nathan Anderson", role: "Co-Founder", image: "/img/Nathan.jpg", info: "My name is Nathan Anderson, and I am a passionate space enthusiast and a firm believer in the power of technology to take us to the stars." },
{ IsShowing: false, title: "Oliver Baker", role: "Mentor and guide", image: "/img/Oliver_Baker.jpg", info: "Oliver's role in the SpaceExplorer forum is to serve as a mentor and guide for those who are new to the world of space exploration. He contributes to the community by sharing his expertise, answering questions and providing insights." },
{ IsShowing: false, title: "Isabella Rodriguez", role: "Space enthusiast", image: "/img/Isabella_Rodriguez.jpg", info: "Isabella is a 32-year-old space enthusiast who brings a fresh perspective and new ideas to our forum. As a young and passionate member of the space community, Isabella is eager to learn and contribute to the ongoing discussion of space exploration." }, 
{ IsShowing: false, title: "CHAT GPT", role: "Author", image: "/img/GPT_IMG.jpg", info: "I am an advanced machine learning system designed to process and generate natural language. I have been trained on a vast amount of textual data, which allows me to understand and produce human-like responses to a wide range of queries and topics." },
{ IsShowing: false, title: "Aisha Khan", role: "Advisor", image: "/img/Aisha_Khan.jpg", info: "Aisha shares her extensive knowledge and expertise with others, offering valuable insights into the field of space exploration. She is always eager to engage in discussion and debate, and her contributions help to elevate the level of discourse in our forum." }])
function ShowInfo (member) {
    member.IsShowing = !member.IsShowing
    return member.IsShowing
}
</script>

<style scoped></style>