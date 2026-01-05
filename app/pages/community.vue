<template>
    <div class="bg-black min-h-screen text-white font-sans flex flex-col relative overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0 bg-dot-pattern animate-wave"></div>
        </div>

        <!-- Main Content -->
        <main
            class="flex-grow flex flex-col items-center justify-center px-6 md:px-12 py-20 max-w-4xl mx-auto text-center relative z-10">
            <h1 class="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-16">
                WELCOME TO THE VAULT
            </h1>

            <div
                class="space-y-8 text-sm md:text-base leading-relaxed text-gray-300 text-left max-w-3xl mx-auto font-inter">
                <p>
                    Sometimes, the idea of perfection is paralysing and overwhelming to the point that people would
                    rather do nothing than do something, not 100% "right". However, we believe that we don't need a
                    handful of people living a completely sustainable life, but we need millions of people doing it
                    imperfectly.
                </p>

                <p>
                    Today fashion consumption is at an all-time high and this contributes to a large percentage of
                    pollution and waste worldwide. In order to be entirely sustainable, brands should create and produce
                    nothing at all, as every product leaves a carbon footprint. However, this approach is unrealistic as
                    the apparel and textile sector is the 4th biggest in the world and millions of people rely on it to
                    survive. Therefore, we believe it's important to look for realistic long-term solutions that focus
                    on creating safe and ethical working conditions for people in every chain of production while
                    mitigating the negative impact on the environment.
                </p>

                <p>
                    However, sustainability is a complicated, constantly evolving journey, and every step forward must
                    be celebrated. Unfortunately, the topic of sustainability has become tainted as people often think
                    it is being forced upon them, take on an all-or-nothing mentality, or are turned off that
                    sustainable products, such as organic and fair trade, cost more. The truth is: everything comes with
                    a cost. Fast fashion has arisen with discounted clothing made so poorly that 60% of it is thrown out
                    within a year, only to be worn once or twice. By purchasing cheap and harmful fabrics, there is an
                    immense environmental and public health toll being paid.
                </p>

                <p>
                    Lately, sustainability has been used as a buzzword to guilt-trip and convince people to buy their
                    green products, but to us, sustainability is about creating a real impact instead of using it as a
                    marketing strategy. While our primary focus has been on our designs and making the best streetwear
                    possible, every single production-related decision since day one has been made with sustainability
                    in mind – hence how the name V26 was born.
                </p>
            </div>


        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Set page meta
useHead({
    title: 'Community - Welcome to The Vault',
    meta: [
        { name: 'description', content: 'Our commitment to sustainability and ethical fashion.' }
    ]
})
</script>

<style scoped>
/* Ensure legible text on small screens */
p {
    font-weight: 300;
}

.bg-dot-pattern {
    background-image: radial-gradient(circle, gray 2px, transparent 2px);
    background-size: 50px 50px;
}

@keyframes wave {
    0% {
        background-position: 0% 50%;
    }

    25% {
        background-position: 25% 45%;
    }

    50% {
        background-position: 50% 55%;
    }

    75% {
        background-position: 75% 45%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.animate-wave {
    animation: wave 20s ease-in-out infinite alternate;
}
</style>
