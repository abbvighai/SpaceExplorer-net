// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icons'],
    app: {
        head: {
            title: 'SpaceExplorer',
            meta: [
                { name: 'description', content: 'Everything about Space' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'icon', type: "image/x-icon", href: "./favicon.png" }
            ]
        }
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    }
})
