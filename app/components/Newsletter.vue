<template>
    <div
        class="bg-green-dark p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative overflow-hidden">
        <!-- Dot Pattern Overlay -->
        <div class="absolute inset-0 z-0 opacity-10"
            style="background-image: radial-gradient(circle, white 2px, transparent 2px); background-size: 30px 30px;">
        </div>

        <!-- Text Content -->
        <div class="max-w-3xl relative z-10">
            <h2 class="text-white text-4xl md:text-6xl font-black leading-none uppercase tracking-tight">
                STAY CLOSE BE THE<br />
                FIRST TO KNOW<br />
                ABOUT DROPS,<br />
                COMMUNITY EVENTS,<br />
                AND UPDATES.
            </h2>
        </div>

        <!-- Email Input -->
        <div class="w-full md:w-1/3 relative z-10">
            <div class="relative flex items-center">
                <input v-model="email" type="email" placeholder="Email Address"
                    class="w-full bg-transparent border-b border-white text-white placeholder-white/70 py-4 pr-10 focus:outline-none focus:border-white transition-colors" />

                <Transition name="fade">
                    <button v-if="email" class="absolute right-0 text-white hover:text-green-bright transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
