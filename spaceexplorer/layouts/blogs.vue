<template>
    <div>
        <header class="shadow-sm bg-gray-900">
            <nav class="p-4">
                <NuxtLink to="/blog" class="text-white text-md font-bold">SpaceExplorer Blogs</NuxtLink>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
        <footer class="p-4 flex justify-between text-white shadow-sm bg-gray-900">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    @apply font-extrabold;
}
</style>