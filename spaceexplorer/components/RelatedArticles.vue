<template>
    <div class="bg-gray-900 flex-col-reverse flex justify-end">
        <NuxtLink to="/blog" class="flex items-center justify-center">
            <div class="text-white text-sm flex mt-2 justify-center items-center">Find more articles
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="ml-4 w-5 h-5">
                    <path fill-rule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </NuxtLink>
        <div class="bg-gray-900 lg:w-[35vw] pb-2 flex flex-col">
            <div class="text-white text-2xl flex items-center justify-center w-auto p-5">Recommended articles</div>
            <div class="grid lg:grid-rows-4 md:grid-rows-2 grid-rows-4 grid-flow-col w-auto justify-center">
                <template v-for="(item, i) in data" :key="i">
                    <div v-if="i < 4 && item.slug !== blogSlug"
                        class="text-white bg-gray-800 rounded-sm outline-1 outline outline-white p-4 m-5 mr-10 lg:w-80">
                        <NuxtLink :to="`/blog/${item.slug}`">
                            <div>
                                <div class="flex text-md lg:text-xl font-semibold items-center">
                                    {{ item.title }}
                                    <div class="shrink-0">
                                        <img :src="`/${item.img}`" :alt="item.title"
                                            class="ml-2 rounded-lg max-w-[12vw] max-h-[24vh]">
                                    </div>
                                </div>
                            </div>
                            <div
                                class="w-auto min-h-[5vh] max-h-[15vh] rounded-sm text-xs flex items-center justify-center mt-5 mb-5 text-gray-400">
                                <ul class="flex space-x-5">
                                    <li v-for="(tag, n) in item.tags" :key="n">{{ tag }}</li>
                                </ul>
                            </div>
                        </NuxtLink>
                        <div v-if="data.length === 0"
                            class="text-white bg-gray-800 rounded-sm outline-1 outline outline-white p-4 m-5 mr-10 lg:w-80">
                            No articles found.
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute()
const blogSlug = route.params.slug
const { data } = await useAsyncData(() => queryContent(`/blog`).find())
</script>

<style scoped></style>