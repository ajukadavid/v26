<template>
    <div class="bg-black min-h-screen">


        <!-- Header spacing -->
        <div class="pt-32"></div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-bright"></div>
            <p class="text-white mt-4 text-lg">Loading product...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-20 px-4">
            <p class="text-red-400 text-lg">{{ error }}</p>
            <NuxtLink to="/vault" class="text-green-bright mt-4 inline-block hover:underline">
                ← Back to Vault
            </NuxtLink>
        </div>

        <!-- Product Detail -->
        <div v-else class="px-4 md:px-8 lg:px-12 pb-20 max-w-7xl mx-auto">
            <!-- Global Back Button -->
            <div class="mb-8">
                <NuxtLink to="/vault"
                    class="text-green-bright flex items-center gap-2 hover:underline font-bold uppercase tracking-wider text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Vault
                </NuxtLink>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden lg:grid lg:grid-cols-12 lg:gap-8">
                <!-- Left Column - Product Info -->
                <div class="lg:col-span-3">
                    <h1 class="text-white text-3xl xl:text-4xl font-bold uppercase tracking-tight mb-4">
                        {{ product.name }}
                    </h1>
                    <p class="text-white text-2xl font-bold mb-8">
                        {{ product.priceFormatted }}
                    </p>

                    <!-- Color Selector -->
                    <div v-if="colorOption" class="mb-6">
                        <label class="text-white text-sm font-bold uppercase mb-3 block">
                            Colour:
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="(choice, index) in colorOption.choices" :key="index"
                                @click="selectedColor = choice.text" :class="[
                                    'px-4 py-2 text-sm font-bold uppercase border-2 transition-all',
                                    selectedColor === choice.text
                                        ? 'bg-green-bright text-black border-green-bright'
                                        : 'bg-transparent text-white border-white hover:border-green-bright'
                                ]">
                                {{ choice.text }}
                            </button>
                        </div>
                    </div>

                    <!-- Size Selector -->
                    <div v-if="sizeOption" class="mb-8">
                        <label class="text-white text-sm font-bold uppercase mb-3 block">
                            Size:
                        </label>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="(choice, index) in sizeOption.choices" :key="index"
                                @click="selectedSize = choice.text" :class="[
                                    'px-4 py-2 text-sm font-bold uppercase border-2 transition-all',
                                    selectedSize === choice.text
                                        ? 'bg-green-bright text-black border-green-bright'
                                        : 'bg-transparent text-white border-white hover:border-green-bright'
                                ]">
                                {{ choice.text }}
                            </button>
                        </div>
                    </div>

                    <!-- Add to Cart Button -->
                    <button @click="addToCart" :disabled="!product.inStock || isAddingToCart"
                        class="w-full py-4 text-sm font-bold uppercase transition-all flex items-center justify-center gap-2"
                        :class="[
                            product.inStock && !isAddingToCart
                                ? 'bg-green-bright text-black hover:opacity-90'
                                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        ]">
                        <div v-if="isAddingToCart"
                            class="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        {{ isAddingToCart ? 'ADDING...' : (product.inStock ? 'Add to cart' : 'Out of Stock') }}
                    </button>
                </div>

                <!-- Center Column - Main Image -->
                <div class="lg:col-span-6">
                    <div class="space-y-4">
                        <div class="relative aspect-[4/5] bg-white overflow-hidden">
                            <img :src="selectedImage" :alt="product.name" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <!-- Right Column - Thumbnails -->
                <div class="lg:col-span-3">
                    <div class="space-y-4">
                        <button v-for="(image, index) in allImages" :key="index" @click="selectedImage = image.url"
                            :class="[
                                'w-full aspect-[4/5] bg-white overflow-hidden border-4 transition-all',
                                selectedImage === image.url ? 'border-green-bright' : 'border-transparent hover:border-gray-700'
                            ]">
                            <img :src="image.url" :alt="`${product.name} - View ${index + 1}`"
                                class="w-full h-full object-cover" loading="lazy" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile/Tablet Layout -->
            <div class="lg:hidden max-w-2xl mx-auto">
                <h1 class="text-white text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">
                    {{ product.name }}
                </h1>
                <p class="text-white text-2xl font-bold mb-6">
                    {{ product.priceFormatted }}
                </p>

                <!-- Main Image -->
                <div class="relative aspect-[4/5] bg-white overflow-hidden mb-4">
                    <img :src="selectedImage" :alt="product.name" class="w-full h-full object-cover" />
                </div>

                <!-- Image Thumbnails -->
                <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
                    <button v-for="(image, index) in allImages" :key="index" @click="selectedImage = image.url" :class="[
                        'flex-shrink-0 w-24 h-32 bg-white overflow-hidden border-4 transition-all',
                        selectedImage === image.url ? 'border-green-bright' : 'border-transparent'
                    ]">
                        <img :src="image.url" :alt="`View ${index + 1}`" class="w-full h-full object-cover"
                            loading="lazy" />
                    </button>
                </div>

                <!-- Color Selector -->
                <div v-if="colorOption" class="mb-6">
                    <label class="text-white text-sm font-bold uppercase mb-3 block">
                        Colour:
                    </label>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="(choice, index) in colorOption.choices" :key="index"
                            @click="selectedColor = choice.text" :class="[
                                'px-4 py-2 text-sm font-bold uppercase border-2 transition-all',
                                selectedColor === choice.text
                                    ? 'bg-green-bright text-black border-green-bright'
                                    : 'bg-transparent text-white border-white hover:border-green-bright'
                            ]">
                            {{ choice.text }}
                        </button>
                    </div>
                </div>

                <!-- Size Selector -->
                <div v-if="sizeOption" class="mb-6">
                    <label class="text-white text-sm font-bold uppercase mb-3 block">
                        Size:
                    </label>
                    <div class="flex flex-wrap gap-2">
                        <button v-for="(choice, index) in sizeOption.choices" :key="index"
                            @click="selectedSize = choice.text" :class="[
                                'px-4 py-2 text-sm font-bold uppercase border-2 transition-all',
                                selectedSize === choice.text
                                    ? 'bg-green-bright text-black border-green-bright'
                                    : 'bg-transparent text-white border-white hover:border-green-bright'
                            ]">
                            {{ choice.text }}
                        </button>
                    </div>
                </div>

                <!-- Add to Cart Button -->
                <button @click="addToCart" :disabled="!product.inStock || isAddingToCart"
                    class="w-full py-4 text-sm font-bold uppercase transition-all flex items-center justify-center gap-2"
                    :class="[
                        product.inStock && !isAddingToCart
                            ? 'bg-green-bright text-black hover:opacity-90'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    ]">
                    <div v-if="isAddingToCart"
                        class="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    {{ isAddingToCart ? 'ADDING...' : (product.inStock ? 'Add to cart' : 'Out of Stock') }}
                </button>
            </div>
        </div>

        <Newsletter />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

// State
const product = ref({})
const loading = ref(true)
const error = ref(null)
const selectedImage = ref('')
const selectedColor = ref('')
const selectedSize = ref('')
const isAddingToCart = ref(false)

// Computed
const allImages = computed(() => {
    const images = []

    // Add main image
    if (product.value.imageUrl) {
        images.push({
            url: product.value.imageUrl,
            thumbnail: product.value.thumbnailUrl || product.value.imageUrl
        })
    }

    // Add gallery images
    if (product.value.galleryImages?.length) {
        images.push(...product.value.galleryImages)
    }

    return images
})

const colorOption = computed(() => {
    // Try to get from Ecwid options first
    const ecwidColor = product.value.options?.find(opt =>
        opt.name.toLowerCase().includes('color') ||
        opt.name.toLowerCase().includes('colour')
    )

    // If Ecwid provides colors, use them, otherwise use defaults
    if (ecwidColor && ecwidColor.choices?.length > 0) {
        return ecwidColor
    }

    // No colors - hide selector
    return null
})

const sizeOption = computed(() => {
    // Try to get from Ecwid options first
    const ecwidSize = product.value.options?.find(opt =>
        opt.name.toLowerCase().includes('size')
    )

    // If Ecwid provides sizes, use them, otherwise use defaults
    if (ecwidSize && ecwidSize.choices?.length > 0) {
        return ecwidSize
    }

    // Default sizes if none provided
    return {
        name: 'Size',
        choices: [
            { text: 'S' },
            { text: 'M' },
            { text: 'L' },
            { text: 'XL' },
            { text: '2XL' },
            { text: '3XL' }
        ]
    }
})

// Methods
const addToCart = async () => {
    if (!product.value.inStock || isAddingToCart.value) return

    // Basic validation
    if (sizeOption.value && !selectedSize.value) {
        alert('Please select a size')
        return
    }

    if (colorOption.value && !selectedColor.value) {
        alert('Please select a color')
        return
    }

    try {
        isAddingToCart.value = true
        // Check if Ecwid Cart API is available
        if (!window.Ecwid || !window.Ecwid.Cart) {
            alert('Cart is not ready yet. Please refresh the page and try again.')
            return
        }

        // Build product options for Ecwid
        const options = {}
        if (selectedSize.value) {
            options[sizeOption.value.name] = selectedSize.value
        }
        if (selectedColor.value) {
            options[colorOption.value.name] = selectedColor.value
        }

        // Add product to Ecwid cart
        await window.Ecwid.Cart.addProduct({
            id: product.value.id,
            quantity: 1,
            options: options
        })

        // Open cart after adding
        if (window.Ecwid && window.Ecwid.openPage) {
            window.Ecwid.openPage('cart')
        }


    } catch (error) {
        alert('Failed to add product to cart. Please try again.')
    } finally {
        isAddingToCart.value = false
    }
}

// Fetch product
onMounted(async () => {
    try {
        loading.value = true
        const productId = route.params.id

        const response = await fetch(`/api/ecwid/products/${productId}`)

        if (!response.ok) {
            throw new Error('Failed to fetch product details')
        }

        const data = await response.json()
        product.value = data.product

        // Set initial selected image
        selectedImage.value = product.value.imageUrl || '/v26mark.png'

        // Set default selections (first option selected)
        if (colorOption.value?.choices?.[0]) {
            selectedColor.value = colorOption.value.choices[0].text
        }

        if (sizeOption.value?.choices?.[0]) {
            selectedSize.value = sizeOption.value.choices[0].text
        }
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
})
</script>

<style scoped>
/* Custom scrollbar for mobile thumbnail gallery */
.overflow-x-auto::-webkit-scrollbar {
    height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #333;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
