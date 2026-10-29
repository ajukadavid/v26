<template>
    <div>
        <div class="bg-black min-h-screen pt-32 px-4 md:px-8 lg:px-12 pb-20">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-white text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-12 text-center">
                    VAULT
                </h1>

                <!-- Loading State -->
                <div v-if="loading" class="flex items-center justify-center py-20">
                    <img src="/logo.gif" alt="Loading..." class="w-48 h-48 object-contain" />
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="text-center py-20">
                    <p class="text-red-400 text-lg">{{ error }}</p>
                    <p class="text-white mt-2">Showing fallback products</p>
                </div>

                <!-- Product Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div v-for="(product, index) in paginatedProducts" :key="index"
                        @click="navigateToProduct(product.id)" class="product-card group cursor-pointer relative block">
                        <!-- Out of Stock Badge -->
                        <div v-if="product.outOfStock"
                            class="absolute top-4 right-4 z-20 bg-[#ffb6b6] px-2 py-1 pointer-events-none">
                            <span class="text-black text-xs font-bold uppercase">OUT OF STOCK</span>
                        </div>

                        <div class="relative bg-transparent aspect-[4/5] overflow-hidden bg-black">
                            <!-- Default Image -->
                            <img :src="product.image" :alt="product.name"
                                class="w-full h-full object-cover zoom-image absolute inset-0 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0 pointer-events-none" />
                            <!-- Hover Image -->
                            <img :src="product.hoverImage" :alt="product.name + ' Alternate'"
                                class="w-full h-full object-cover zoom-image absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none" />
                        </div>

                        <!-- Info Bar (Matching Reference) -->
                        <div class="bg-white p-3 flex justify-between items-center w-full">
                            <h3 class="text-black text-sm font-bold uppercase tracking-wider">{{ product.name }}</h3>
                            <span class="text-black text-sm font-bold">{{ product.price }}</span>
                        </div>
                    </div>
                </div>

                <!-- Pagination Controls -->
                <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
                    <!-- Previous Button -->
                    <button @click="previousPage" :disabled="currentPage === 1"
                        class="w-10 h-10 border border-white/20 flex items-center justify-center transition-colors"
                        :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <!-- Page Info -->
                    <span class="text-white text-sm font-bold px-4">
                        Page {{ currentPage }} of {{ totalPages }}
                    </span>

                    <!-- Next Button -->
                    <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="w-10 h-10 border border-white/20 flex items-center justify-center transition-colors"
                        :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <Newsletter />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive state
const products = ref([])
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const productsPerPage = 10

// Computed properties for pagination
const totalPages = computed(() => {
    return Math.ceil(products.value.length / productsPerPage)
})

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage
    const end = start + productsPerPage
    return products.value.slice(start, end)
})

// Pagination functions
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

// Fetch products from Ecwid API
onMounted(async () => {
    try {
        loading.value = true
        const response = await fetch('/api/ecwid/products')

        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        products.value = data.items
    } catch (err) {
        error.value = err.message

        // Fallback to placeholder products if API fails
        products.value = [
            {
                id: 'fallback-1',
                name: 'Unable to load products',
                price: 'Please check configuration',
                image: '/v26mark.png',
                hoverImage: '/v26mark.png',
                outOfStock: true
            }
        ]
    } finally {
        loading.value = false
    }
})

// Navigate to product detail page
const navigateToProduct = (productId) => {
    navigateTo(`/vault/${productId}`)
}
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
</style>
