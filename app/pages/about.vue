<template>
    <div class="bg-black min-h-screen text-white font-sans flex flex-col pt-32 pb-20 overflow-x-hidden">

        <!-- Header -->
        <div class="container mx-auto px-6 md:px-12 text-center mb-16">
            <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                ABOUT V26
            </h1>
            <p class="text-green-bright text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                Culture belongs to those who shape it.
            </p>
        </div>

        <!-- Brand Copy -->
        <div class="max-w-5xl w-full mx-auto px-6 md:px-12 mb-16">
            <div class="space-y-6 text-sm md:text-base leading-relaxed text-white mx-auto text-left font-inter">
                <p>
                    V26 is a streetwear movement built on defiance, identity, and the will to shape what comes next.
                </p>
                <p>
                    Unbound by gatekeepers. Unmoved by permission. We challenge convention through distinctive design
                    and limited collections that reflect a refusal to conform. Every piece carries intent, created not
                    simply to be worn, but to represent something beyond itself.
                </p>
                <p>
                    We are building more than a label. We are building a movement of individuals who move with
                    conviction, define their own identities, and contribute to the culture around them. A community
                    driven not by conformity, but by the freedom to influence what comes next.
                </p>
                <p>
                    We don’t exist to follow culture. We exist to shape it.
                </p>
                <p class="font-bold uppercase tracking-wider pt-2">
                    V26. Possess the Culture.
                </p>
            </div>
        </div>

        <!-- Image Grid -->
        <div class="max-w-5xl w-full mx-auto px-6 md:px-12 mb-12">
            <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
                <div class="hidden md:block w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about.jpg" alt="V26 Lifestyle 1"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div class="w-full md:w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about1.jpg" alt="V26 Lifestyle 2"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div class="hidden md:block w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about2.jpg" alt="V26 Lifestyle 3"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center gap-4">
                <div class="hidden md:block w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about3.jpg" alt="V26 Lifestyle 4"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div class="w-full md:w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about4.jpg" alt="V26 Lifestyle 5"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div class="hidden md:block w-[299px] h-[326px] overflow-hidden shrink-0">
                    <img src="/about5.JPG" alt="V26 Lifestyle 6"
                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
useHead({
    title: 'About V26 - Possess The Culture',
    meta: [
        { name: 'description', content: 'V26 is a streetwear movement built on defiance, identity, and the will to shape what comes next. Possess the Culture.' }
    ]
})
</script>
