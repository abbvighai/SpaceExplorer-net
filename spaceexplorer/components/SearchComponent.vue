<template>
    <div class="flex items-center justify-center flex-col mr-10">
        <div
            class="flex border-b-2 border-gray-500 w-full items-center justify-center lg:justify-end">
            <button @click="handleSearch(data)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
                    <path fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd" />
                </svg>
            </button>
            <div :class="{ 'hidden': removed, 'visible': !removed }"
                class="bg-gray-500 min-w-[8vw] max-w-[32vw] h-fit pl-2 pr-2 rounded-lg text-gray-800 text-center text-sm mr-4 flex items-center justify-center bottom-1 right-48">
                {{ chosenTag }}
                <button class="text-lg font-semibold ml-2" @click="removeTag">
                    x
                </button>
            </div>
            <input v-model="searched" class="w-auto h-6 text-white text-sm bg-transparent focus:outline-none"
                :placeholder="inputName" @keydown.enter="handleSearch(data) , emitSearch(chosenTag, searched, data)"
                @focus="handleFocus" @blur="handleBlur(choosingTag)">
        </div>
        <div v-if="showResults || searched" class="flex flex-col justify-center items-center">
            <div class="flex pl-20 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="50" viewBox="0 96 960 960" width="50">
                <path d="M274.848 677.5 480 472.348 685.152 677.5H274.848Z" />
            </svg>
            </div>
            <div @mouseenter="choosingTag = true" @mouseleave="choosingTag = false" :class="{'block': showSearch, 'visible': !showSearch }"
                class="w-96 h-fit bg-gray-200 pb-5 overflow-auto flex flex-col items-center space-y-2">
                <p v-if="!searched || filteredSearch(data).length" class="text-xl">
                    Choose one tag
                </p>
                <div class="grid grid-cols-3 grid-flow-row-dense h-auto gap-0.5 m-5">
                    <button v-for="(result, index) in filteredSearch(data)" :key="result" @click="TaggedSearch(result)"
                        class="flex flex-col">
                        <div v-if="index < 9"
                            class="p-3 pl-2 w-auto h-fit text-white bg-gray-700 rounded-lg text-xs hover:bg-gray-800">
                            <p>{{ result }}</p>
                        </div>
                    </button>
                </div>
                <div class="p-3 w-fit h-fit flex items-center justify-center"
                    v-if="searched && !filteredSearch(data).length">
                    <p>No tags found!</p>
                </div>
                <div v-for="(item, key) in handleSearch(data)" :key="key" class="min-w-[20vw] max-w-[60vw] sm:max-w-sm">
                    <NuxtLink v-if="key < 3" :to="`/blog/${item.slug}`" class="flex hover:outline-gray-900 hover:outline">
                        <img :src="`${item.img}`" :alt="`${item.title}`" class="w-16 h-auto">
                        <div class="text-xs text-gray-800 duration-150 font-semibold">
                            {{ item.title }}
                        </div>
                    </NuxtLink>
                </div>
                <div class="p-3 w-fit h-fit flex items-center justify-center" v-if="searched && !handleSearch(data).length">
                    <p>No articles found!</p>
                </div>
                <button @click="emitSearch(chosenTag, searched, data)"
                    class="bg-gray-600 p-2 m-4 rounded-full text-white text-md font-bold">
                    Show all search results
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const { data } = await useAsyncData(() => queryContent(`/blog`).find())
let searched = ref("")

let showResults = ref(false)
let choosingTag = ref(false)
let removed = ref(true)
let chosenTag = ref("")
let inputName = ref("Search")
const emit = defineEmits(['searchResult'])

function handleFocus () {
    showResults.value = true
    inputName.value = 'Search for articles and tags'
}
function filteredSearch (data) {
    let activeTags = FilteredTags(data)
    if (chosenTag.value) {
        return activeTags.filter((result) => result.toLowerCase() === chosenTag.value.toLowerCase())
    }
    return activeTags.filter((result) =>
        result.toLowerCase().includes(searched.value.toLowerCase())
    )
}
function TaggedSearch (result) {
    removed.value = false
    chosenTag.value = result
}
function FilteredTags (data) {
    let tags = []
    data.forEach((item) => {
        item.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })
    return tags
}
function handleSearch (data) {
    showResults.value = true
    return data.filter((item) => {
        const tagMatch = chosenTag.value ? item.tags.includes(chosenTag.value) : true
        const searchMatch = !searched.value || item.title.toLowerCase().includes(searched.value.toLowerCase())
        return tagMatch && searchMatch
    })
}
function handleBlur (choosingTag) {
    if (choosingTag) {
        showResults.value = true
        choosingTag = !choosingTag
    } else {
        showResults.value = false
    }
    inputName.value = 'Search'
}
function removeTag () {
    chosenTag.value = ''
    removed.value = !removed.value
}
function emitSearch ( chosenTag, searched, data) {
    let filteredEmit = handleSearch(data)
    let showSearch = true
    showResults.value = false
    console.log(chosenTag)
    console.log(searched)
    emit('searchResult', { chosenTag, searched, filteredEmit, showSearch })
}
</script>
