<template>
    <div class="w-screen flex flex-col md:flex-row h-max pt-40 pl-20 pr-40">
        <div v-for="box in boxes" :key="box.head" class="text-white text-sm flex w-96 pl-0 p-10">
            <div @click="wasClicked(box)">
                <nuxt-icon v-if="box.clicked" name="rocket_launch" class="text-5xl w-12 h-12" filled />
                <nuxt-icon v-else name="rocket_launch_def" class="text-5xl w-12 h-12" filled />
                <div :style="{ color: box.clicked ? 'white' : 'gray' }"
                    class="w-[63vh] md:w-[30vh] lg:w-[48vh] flex flex-col md:h-48 xl:h-32 hover:font-semibold">
                    <div>{{ box.head }}</div>
                    <div :class="{ 'hidden': !box.expand, 'visible': box.expand }">{{ box.info }}</div>
                    <button @click="wasExpanded(box)"
                        class="h-16 lg:h-20 text-xl hover:font-bold font-semibold uppercase flex items-center justify-center">
                        More detailed
                        <nuxt-icon v-if="box.clicked" name="arrow_right_alt" class="text-5xl w-12 h-12" filled />
                        <nuxt-icon v-else name="arrow_right_def" class="text-5xl w-12 h-12" filled />
                    </button>
                    <div :style="{ backgroundColor: box.clicked ? 'red' : 'gray' }"
                        class="visible md:hidden w-[30vw] h-1 pt-0.5"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="hidden md:flex flex-row w-screen h-fit pl-10">
        <div v-for="box in boxes" :key="box.head" :style="{ backgroundColor: box.clicked ? 'red' : 'gray' }"
        class="w-[30vw] h-1/2 pt-0.5 flex"></div>
</div>
</template>

<script setup>
import {ref} from 'vue'
const boxes = ref([{ expand: false, clicked: true, head: "The vast cosmos awaits, a grand expanse to explore.", info: "Mankind's curiosity for the universe is infinite, as is the expanse of the cosmos itself.", expanded:false },
{ expand: false, clicked: false, head: "Exploring space has been humanity's greatest achievement.", info: "Astronauts orbiting Earth can witness breathtaking views of our planet's colorful exosphere.", expanded: false },
{ expand: false, clicked: false, head: "Exploring the vast space abyss is an incredible adventure.", info: "Stargazing at night is an awe-inspiring experience that fills me with wonder and amazement.", expanded: false },])
let expand = ref(false)
function wasClicked (box) {
    boxes.value.forEach(b => b.clicked = false)
    box.clicked = true
}
function wasExpanded (box) {
    boxes.value.forEach(b => b.expand = false)
    box.expand = true
}
</script>
