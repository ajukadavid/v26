<template>
    <!-- Black background wrapper -->
    <div class="bg-black px-4 md:px-8 lg:px-12 pb-8">
        <div class="relative h-auto md:h-screen overflow-hidden">
            <!-- Desktop Background -->
            <div class="hidden md:block absolute inset-0 bg-cover bg-center"
                style="background-image: url('/IMG_8394.JPG');"></div>
            <!-- Mobile Image -->
            <img src="/IMG_8394.JPG" alt="V26 Culture" class="block md:hidden w-full h-auto" />

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

            <!-- Content -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center">
                <h3 class="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 max-w-xl leading-tight">
                    Modern streetwear for everyday movement.
                </h3>
                <button
                    class="bg-green-bright text-black font-bold text-sm md:text-base px-8 py-3 hover:opacity-90 transition-opacity uppercase">
                    THE VAULT
                </button>
            </div>
        </div>
    </div>
</template>
