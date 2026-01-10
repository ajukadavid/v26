<template>
    <footer class="w-full">


        <!-- Links Section -->
        <div class="bg-black text-white px-8 md:px-16 py-12">
            <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
                <!-- Left Column -->
                <div class="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
                    <div>
                        <NuxtLink to="/">
                            <img src="/logo.png" alt="V26" class="h-8 w-auto" />
                        </NuxtLink>
                    </div>
                    <nav class="flex flex-col gap-4">
                        <NuxtLink to="/vault"
                            class="text-sm font-bold uppercase tracking-widest  hover:text-green-bright transition-all duration-300 hover:pl-2">
                            SHOP
                        </NuxtLink>
                        <NuxtLink to="/about"
                            class="text-sm font-bold uppercase tracking-widest  hover:text-green-bright transition-all duration-300 hover:pl-2">
                            ABOUT
                        </NuxtLink>
                    </nav>
                </div>

                <!-- Right Column -->
                <div class="flex flex-col gap-4 text-center md:text-right">
                    <a href="https://www.instagram.com/vlt26hq?igsh=aThtdWdjbnRtMHZ4&utm_source=qr" target="_blank"
                        class="text-sm font-bold uppercase tracking-widest hover:text-green-bright transition-colors duration-300">
                        INSTAGRAM
                    </a>
                    <a href="https://x.com/26vault?s=21" target="_blank"
                        class="text-sm font-bold uppercase tracking-widest hover:text-green-bright transition-colors duration-300">
                        X
                    </a>
                    <a href="https://www.tiktok.com/@26vault?_r=1&_t=ZS-92uLtDheEz7" target="_blank"
                        class="text-sm font-bold uppercase tracking-widest hover:text-green-bright transition-colors duration-300">
                        TIKTOK
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <div
                class="mt-16 pt-8 border-t border-white/10 flex flex-col justify-center items-center gap-4 text-center">
                <p class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    &copy; {{ currentYear }} V26. ALL RIGHTS RESERVED.
                </p>
                <p class="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    BUILD BY <a href="https://www.afrikoode.com/" target="_blank" rel="noopener noreferrer"
                        class="text-green-bright hover:text-green-400 transition-colors duration-300">AFRIKOODE</a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>


const currentYear = new Date().getFullYear()

</script>
