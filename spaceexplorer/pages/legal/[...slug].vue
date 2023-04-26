<template>
    <main>
        <article class="p-5 w-screen h-auto text-white bg-gray-800">
            <ContentDoc />
        </article>
    </main>
</template>

<script setup>
useHead({
    title: 'Terms of Service',
    meta: [
        { name: 'description', content: 'Please read' }
    ]
})
</script>
<style scoped>
:deep(h3) {
    font-size: 22px;
}

:deep(ul) {
    font-size: 12px;
    padding: 5px;
}

:deep(h1) {
    font-size: 28px;
}

:deep(h6) {
    font-size: 0.10 rem;
    line-height: 0.2 rem;
}

:deep(p) {
    font-size: 12px;
}
</style>