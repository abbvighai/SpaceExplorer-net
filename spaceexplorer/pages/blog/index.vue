<template>
    <div>
        <div v-if="data" class="grid grid-cols-1 md:grid-cols-2 ml-20 mr-20 mb-10"
            style="grid-template-rows: repeat(auto-fit, minmax(20rem, 1fr))">
            <li v-for="(item, key) in data" :key="key"
                class="pt-1 p-10 m-2 text-white bg-gray-900 rounded-sm outline-2 outline outline-white">
                <NuxtLink :to="`/blog/${item.slug}`">
                    <div>
                        <header>
                            <div
                                class="outline outline-white w-auto min-h-[5vh] max-h-[15vh] rounded-r-full rounded-l-full text-xs flex items-center justify-center mt-5 mb-5">
                                <ul class="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4">
                                    <li v-for="(tag, n) in item.tags" :key="n">{{ tag }}
                                    </li>
                                </ul>
                            </div>
                            <div class="flex text-2xl font-semibold items-center flex-col-reverse lg:flex-row justify-center">
                                <div>
                                    {{ item.title }}
                                </div>
                                <div>
                                    <img :src="`/${item.img}`" :alt="item.title" class="ml-2 rounded-lg md:w-[30vw] w-[42vw]">
                                </div>
                            </div>
                            <div class="flex w-fit pl-0 p-5 text-white">
                                <div class="w-fit text-sm flex">Updated {{ item.updatedAt }}</div>
                                <div class="bg-cover rounded-full h-6 w-6 flex justify-center ml-8 mr-4 bg-gray-600"
                                    :style="{ backgroundImage: `url(${item.authorImg})` }"></div>
                                <p class="text-sm">{{ item.author }}</p>
                            </div>
                            <p>{{ item.description }}</p>
                            <div class="text-sm flex mt-2 justify-center items-center">Read more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="ml-4 w-5 h-5">
                                    <path fill-rule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="w-fit text-xs text-gray-400 mt-10">First published {{ item.createdAt }}
                            </div>
                        </header>
                    </div>
                </NuxtLink>
            </li>
        </div>
    </div>
</template>
<script setup>
const { data } = await useAsyncData(() => queryContent(`/blog`).find())
definePageMeta({
    layout: 'default',
    title: 'SpaceExplorer | Blogs',
    meta: [
        { name: 'description', content: 'read some blogs' }
    ]
})
</script>

<style scoped></style>