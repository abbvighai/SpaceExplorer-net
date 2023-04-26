<template>
    <div>
        <div
            class="md:pt-0 md:p-10 flex flex-col items-center md:flex-row w-screen h-auto bg-gray-900 text-white md:justify-between">
            <div class="flex flex-row">
                <nuxt-icon name="contact_support" class="text-5xl" filled />
                <div class="flex flex-col text-xs">
                    <div>
                        Company Name: SpaceExplorer
                    </div>
                    <div>
                        Email: info@spaceexplorer.com
                    </div>
                    <div>
                        Phone: 1-800-SPCE-EXP (1-800-772-3397)

                    </div>
                    <div>
                        Address: 1234 Galaxy Blvd, Suite 5678, Houston, TX 77058
                    </div>
                </div>
            </div>
            <NuxtLink to="/legal" class="flex mr-40 p-10 justify-start items-center text-xl">
                <nuxt-icon name="tos" class="text-5xl" filled />
                Terms Of Service
            </NuxtLink>
            <div class="text-white text-md">
                © 2023 SpaceExplorer, Inc. All rights reserved.
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped></style>