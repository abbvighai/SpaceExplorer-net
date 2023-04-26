<template>
    <div class="flex flex-col lg:flex-row bg-gray-900 bg-opacity-80 w-auto">
        <div class="flex flex-col">
            <NuxtLink to="/blog" class="text-sm text-white flex items-center pl-10 p-20 pb-0 pt-10 md:pl-24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                    class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back to Blogs
            </NuxtLink>
            <div class="text-white text-4xl font-semibold pb-10 pl-10 p-20 md:pl-24 pt-10 flex justify-center">{{ data.title
            }}</div>
            <div class="flex shrink-0 justify-center">
                <div :style="{ backgroundImage: `url(/${data.img})` }"
                    class="flex flex-col justify-between bg-no-repeat bg-center bg-cover md:w-[50vw] w-[80vw] h-[50vh]">
                    <div class="w-auto h-9 opacity-80 text-white flex flex-row-reverse underline">Photo by {{ data.imgCredit
                    }}
                    </div>
                    <div class="bg-gray-900 w-auto h-9 opacity-80 text-white">{{ data.imgDescription }}</div>
                </div>
                <Head>
                    <Title>SpaceExplorer | {{ data.title }}</Title>
                    <Meta name="description" content="Read some blogs" />
                </Head>
            </div>
            <div class="flex justify-center items-center p-5 pl-0 text-white">
                <div class="w-fit text-sm">Updated {{ data.updatedAt }}</div>
                <div class="bg-cover rounded-full h-6 w-6 ml-8 mr-4 bg-gray-600"
                    :style="{ backgroundImage: `url(/${data.authorImg})` }"></div>
                <p class="text-sm">{{ data.author }}</p>
            </div>
            <ContentRenderer :value="data" class="text-white p-10 md:p-24 lg:p-32 pt-5 md:pt-5 lg:pt-5" />
        </div>
        <RelatedArticles></RelatedArticles>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(`/blog/${route.params.slug}`).findOne())
definePageMeta({
    layout: 'blogs'
})
</script>'

<style scoped>
:deep(h1) {
    @apply text-4xl font-semibold pb-10;
}

:deep(h2) {
    @apply text-xl pt-10 pb-10 font-semibold;
}

:deep(h3) {
    @apply font-bold;
}

:deep(p) {
    @apply mt-5 mb-5;
}

:deep(li) {
    @apply mt-5 mb-5;
}
</style>