<template>
    <footer class="w-full">
        <!-- Newsletter Section -->
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
                        <button v-if="email"
                            class="absolute right-0 text-white hover:text-green-bright transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Transition>
                </div>
            </div>
        </div>

        <!-- Links Section -->
        <div class="bg-black text-white px-8 md:px-16 py-12">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
                <!-- Left Column -->
                <div class="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                    <!-- Logo -->
                    <img src="/logo.png" alt="V26" class="h-8 w-auto" />

                    <nav class="flex flex-col gap-4">
                        <a href="#"
                            class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-bright transition-all duration-300 hover:pl-2">
                            SHOP
                        </a>
                        <a href="#"
                            class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-bright transition-all duration-300 hover:pl-2">
                            ABOUT
                        </a>
                    </nav>
                </div>

                <!-- Right Column -->
                <div class="flex flex-col gap-4 text-center md:text-right">
                    <a href="#"
                        class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-bright transition-colors duration-300">
                        INSTAGRAM
                    </a>
                    <a href="#"
                        class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-bright transition-colors duration-300">
                        TWITTER
                    </a>
                    <a href="#"
                        class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-green-bright transition-colors duration-300">
                        FACEBOOK
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <div
                class="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                <p class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    &copy; {{ currentYear }} V26. ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
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
