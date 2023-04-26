<template>
    <div>
        <header class="w-screen h-auto pr-5 lg:pr-10 p-20 pb-52">
            <nav class="flex">
                <div class="border-b-2 border-gray-500 flex flex-col md:flex-row h-fit w-full items-center pt-0.5">
                    <div class="flex h-fit">
                        <li class="flex md:mb-0 mb-10 md:mr-10 lg:mr-48">
                            <div
                                class="rounded-full md:h-4 md:w-4 h-40 w-40 flex justify-center mr-2 bg-white-600 outline-1 outline">
                                <img src="img/SpaceExplorerLogo.png" class="rounded-full">
                            </div>
                            <div class="hidden md:block headTxt font-bold">
                                SpaceExplorer
                            </div>
                        </li>
                    </div>
                    <ul class="flex space-x-10">
                        <button @click="HandleClick(SearchInfo)" class="headTxt hover:font-bold">
                            <NuxtLink to="/" class="flex flex-col items-center">Main
                            </NuxtLink>
                        </button>
                        <button @click="HandleClick(SearchInfo)" class="headTxt hover:font-bold">
                            <NuxtLink to="/about" class="flex flex-col items-center">About
                            </NuxtLink>
                        </button>
                        <button @click="HandleClick(SearchInfo)" class="headTxt hover:font-bold">
                            <NuxtLink to="/blog" class="flex flex-col items-center">Blog
                            </NuxtLink>
                        </button>
                        <li class="lg:hidden block headTxt hover:font-bold">
                            <button @click="startSearch = !startSearch" class="flex flex-col items-center">Search
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="hidden lg:block">
                    <SearchComponent @searchResult="(msg) => SearchInfo = msg"></SearchComponent>
                </div>
            </nav>
            <div class="lg:hidden" :class="{ 'hidden': !startSearch, 'block': startSearch }">
                <SearchComponent @searchResult="(msg) => SearchInfo = msg"></SearchComponent>
            </div>
        </header>
        <div>
            <div v-if="SearchInfo.showSearch" class="mb-8 mr-8">
                <div class="text-white text-6xl uppercase font-bold pb-8 pl-20">Search results</div>
                <div class="min-h-min max-w-sm pl-20">
                    <div class="flex space-x-2 text-white">
                        <div v-if="!SearchInfo.searched && !SearchInfo.chosenTag" class="pb-8">
                            <p class="text-2xl pb-4 font-bold">No search results found.</p>
                            <p class="text-md">You need to enter something to search for.</p>
                            <p class="text-2xl pb-4 font-bold">Suggestions</p>
                            <li class="text-md">Type at least one word in the search box and search again</li>
                            <li class="text-md">Use a tag if you can't find a result</li>
                            <button @click="SearchInfo.showSearch = false"
                                class="text-white text-md flex items-center justify-center pt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="white" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                Go back to previous page
                            </button>
                        </div>
                        <div class="pb-8">
                            <p class="text-2xl pb-4 font-bold" v-if="SearchInfo.searched">You searched for {{
                                SearchInfo.searched }}</p>
                            <p class="text-md" v-if="SearchInfo.searched && SearchInfo.chosenTag"> Showing results using
                                input and tag. </p>
                            <p class="text-2xl pb-4 font-bold" v-if="SearchInfo.chosenTag">You used the tag {{
                                SearchInfo.chosenTag }}</p>
                            <li class="text-md"
                                v-if="SearchInfo.filteredEmit && SearchInfo.searched || SearchInfo.chosenTag">{{
                                    SearchInfo.filteredEmit.length }}
                                articles
                                were found </li>
                            <button v-if="SearchInfo.searched || SearchInfo.chosenTag" @click="SearchInfo.showSearch = false"
                                class="text-white text-md flex items-center justify-center pt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="white" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                Go back to previous page
                            </button>
                        </div>
                    </div>
                </div>
                <div class="h-20 bg-gradient-to-t from-gray-900 w-screen"></div>
                <div
                    class="bg-gray-900 w-screen min-h-[55vh] max-h-auto justify-center items-center text-white text-xl flex flex-col">
                    <div v-if="SearchInfo.filteredEmit.length > 0"
                        class="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-6 min-h-[45vh] max-h-auto">
                        <div v-for="(item, key) in SearchInfo.filteredEmit.slice(startIndex, startIndex + numberOfArticles)"
                            :key="key">
                            <NuxtLink :to="`/blog/${item.slug}`"
                                class="flex hover:bg-gray-800 flex-col justify-center items-center p-5">
                                <img :src="`${item.img}`" :alt="`${item.title}`" class="w-48 h-32 object-cover">
                                <div
                                    class="text-sm text-white duration-150 font-semibold flex items-center justify-center w-48">
                                    {{ item.title }}
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div v-if="SearchInfo.filteredEmit.length === 0"
                        class="h-[45vh] w-screen text-xl text-white flex justify-center items-center">No articles were
                        found!</div>
                    <div class="flex justify-center items-center">
                        <button :class="{ 'invisible': startIndex == 0, 'visible': startIndex > 0 }"
                            @click="decrement(SearchInfo)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        {{ number }}
                        <button
                            :class="{ 'invisible': startIndex + numberOfArticles >= SearchInfo.filteredEmit.length, 'visible': startIndex + 5 <= SearchInfo.filteredEmit.length }"
                            @click="increment(SearchInfo)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="h-20 bg-gradient-to-b from-gray-900 w-screen"></div>
            </div>
            <slot v-else-if="!SearchInfo.showSearch"></slot>
        </div>
        <footer>
            <FooterInfo></FooterInfo>
        </footer>
    </div>
</template>
<script setup>
import { ref } from 'vue'
let startSearch = ref(false)

const SearchInfo = ref({})
const number = ref(1)

let startIndex = ref(0)
let numberOfArticles = ref(4)
function increment (SearchInfo) {
    if (startIndex.value + numberOfArticles.value <= SearchInfo.filteredEmit.length) {
        startIndex.value++
        number.value++
    }
}
function decrement (SearchInfo) {
    if (startIndex.value + 3 <= SearchInfo.filteredEmit.length) {
        startIndex.value--
        number.value--
    } else {
        number.value = 1
        startIndex.value = 0
    }
}
function HandleClick (SearchInfo) {
    if (SearchInfo.showSearch) {
        SearchInfo.showSearch = false
        console.log(SearchInfo.showSearch)
    }
}
</script>
<style scoped>.router-link-exact-active {
    @apply border-b-2 border-red-600;

}</style>