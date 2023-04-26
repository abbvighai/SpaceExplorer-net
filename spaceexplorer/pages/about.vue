<template>
    <div>
        <div class="text-white text-6xl uppercase font-bold pl-20">About Us</div>
        <div class="flex flex-col lg:flex-row pt-5 pl-0 p-20 w-screen">
            <div class="pl-20 min-h-min max-w-sm">
                <p class="text-white">
                    As a team, we at SpaceExplorer are a group of passionate space enthusiasts who are dedicated to
                    exploring
                    the wonders of the universe. We created this blog forum to share our knowledge and insights about space
                    exploration with the world. Our team is made up of individuals with diverse backgrounds and areas of
                    expertise, ranging from science and engineering to writing and art. We believe that space exploration is
                    not
                    only fascinating but also essential to the advancement of human knowledge and understanding. Our mission
                    is
                    to educate and inspire people about the wonders of space and to create a community of like-minded
                    individuals who share our passion. We hope that our readers will engage with our content and join us on
                    this
                    exciting journey of discovery.
                </p>
            </div>
            <TeamVideo />
        </div>
        <TheTeam></TheTeam>
    </div>
</template>

<script setup>
useHead({
    title: 'SpaceExplorer | About',
    meta: [
        { name: 'description', content: 'Here you can learn more about us' }
    ]
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>