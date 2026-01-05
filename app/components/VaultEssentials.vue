<template>
    <div class="vault-essentials bg-black">
        <!-- Product Grid Section -->
        <div class="px-4 md:px-8 lg:px-12 py-8">
            <!-- Header with Blue Border Frame -->
            <div class="p-4 md:p-6 mb-8 flex items-center justify-between">
                <h2 class="text-white text-4xl md:text-7xl font-bold leading-tight">
                    VAULT<br />ESSENTIALS
                </h2>
                <div class="flex gap-2">
                    <button
                        class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Product Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                <div v-for="(product, index) in products" :key="index"
                    class="product-card group cursor-pointer bg-zinc-950">
                    <div class="relative bg-zinc-950 aspect-[4/5] overflow-hidden">
                        <!-- Default Image -->
                        <img :src="product.image" :alt="product.name"
                            class="w-full h-full object-cover zoom-image absolute inset-0 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0" />
                        <!-- Hover Image -->
                        <img :src="product.hoverImage" :alt="product.name + ' Alternate'"
                            class="w-full h-full object-cover zoom-image absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
                    </div>
                    <div class="bg-green-bright p-3 flex justify-between items-center w-full">
                        <h3 class="text-black text-sm font-bold uppercase tracking-wider">{{ product.name }}</h3>
                        <span class="text-black text-sm font-bold">{{ product.price }}</span>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
const products = [
    {
        name: 'CAMO SKI MASK',
        price: '$200.00',
        image: '/v26mark.png',
        hoverImage: '/v26mark1.png'
    },
    {
        name: 'VAULT HOODIE',
        price: '$280.00',
        image: '/v26shirt.png',
        hoverImage: '/v26shirt1.png'
    },
    {
        name: 'CAMO SKI MASK',
        price: '$200.00',
        image: '/v26mark.png',
        hoverImage: '/v26mark1.png'
    },
    {
        name: 'VAULT HOODIE',
        price: '$280.00',
        image: '/v26shirt.png',
        hoverImage: '/v26shirt1.png'
    }
]
</script>

<style scoped>
.product-card {
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-4px);
}

/* Zoom effect from center */
.zoom-image {
    transform-origin: center center;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover .zoom-image {
    transform: scale(1.1);
}

/* Zoom effect for promotional card */
.zoom-image-card {
    transform-origin: left center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .zoom-image-card {
    transform: scale(1.1);
}
</style>
