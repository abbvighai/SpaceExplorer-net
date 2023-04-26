<template>
    <div class="mt-7 max-w-2xl mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl font-bold">'Houston, we have a problem'</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Return to Base...</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>