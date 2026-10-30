<template>
    <div class="vault-essentials bg-black overflow-hidden">
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

            <!-- Loading State -->
            <div v-if="loading" class="flex items-center justify-center py-20">
                <img src="/logo.gif" alt="Loading..." class="w-48 h-48 object-contain" />
            </div>

            <!-- Product Grid -->
            <div v-else class="grid grid-cols-2 gap-3 md:gap-8 max-w-6xl mx-auto">
                <div v-for="(product, index) in products" :key="index" :ref="(el) => { if (el) cardRefs[index] = el }"
                    class="scroll-wrapper" :class="index % 2 === 0 ? 'slide-left' : 'slide-right'">
                    <NuxtLink :to="`/vault/${product.id}`" class="product-card group cursor-pointer bg-zinc-950 block">
                        <div class="relative bg-zinc-950 aspect-[4/5] overflow-hidden">
                            <!-- Default Image -->
                            <img :src="product.image" :alt="product.name"
                                class="w-full h-full object-cover zoom-image absolute inset-0 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0" />
                            <!-- Hover Image -->
                            <img :src="product.hoverImage" :alt="product.name + ' Alternate'"
                                class="w-full h-full object-cover zoom-image absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
                        </div>
                        <div class="bg-white p-2 md:p-3 flex flex-col md:flex-row gap-1 md:justify-between md:items-center w-full">
                            <h3 class="text-black text-xs md:text-sm font-bold uppercase tracking-wider">{{ product.name }}</h3>
                            <span class="text-black text-xs md:text-sm font-bold">{{ product.price }}</span>
                        </div>
                    </NuxtLink>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cardRefs = ref([])
const products = ref([])
const loading = ref(true)
let observer = null

// Fetch latest 4 products from Ecwid
const fetchProducts = async () => {
    try {
        loading.value = true

        // Fetch products using your server API endpoint
        const response = await fetch('/api/ecwid/products')

        if (!response.ok) throw new Error('Failed to fetch products')

        const data = await response.json()

        console.log('Ecwid API Response:', data)

        if (data.success && data.items) {
            // Get only the latest 4 products
            products.value = data.items.slice(0, 4).map(item => {
                console.log('Product item:', item)
                return {
                    id: item.id,
                    name: item.name.toUpperCase(),
                    price: item.price,
                    image: item.image,
                    hoverImage: item.hoverImage
                }
            })
        }
    } catch (error) {
        console.error('Error fetching products from Ecwid:', error)

        // Fallback to default products on error
        products.value = [
            {
                id: 1,
                name: 'CAMO SKI MASK',
                price: '₦200.00',
                image: '/v26mark.png',
                hoverImage: '/v26mark1.png'
            },
            {
                id: 2,
                name: 'VAULT HOODIE',
                price: '₦280.00',
                image: '/v26shirt.png',
                hoverImage: '/v26shirt1.png'
            },
            {
                id: 3,
                name: 'CAMO SKI MASK',
                price: '₦200.00',
                image: '/v26mark.png',
                hoverImage: '/v26mark1.png'
            },
            {
                id: 4,
                name: 'VAULT HOODIE',
                price: '₦280.00',
                image: '/v26shirt.png',
                hoverImage: '/v26shirt1.png'
            }
        ]
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    // Fetch products first
    await fetchProducts()

    // Set up intersection observer after products are loaded
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
            } else {
                entry.target.classList.remove('is-visible')
            }
        })
    }, {
        threshold: 0.2,
        rootMargin: '-100px'
    })

    cardRefs.value.forEach((card) => {
        if (card) observer.observe(card)
    })
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
.scroll-wrapper {
    opacity: 0;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-left {
    transform: translateX(-100px);
}

.slide-right {
    transform: translateX(100px);
}

.scroll-wrapper.is-visible {
    opacity: 1;
    transform: translateX(0);
}

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
