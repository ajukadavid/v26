export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const productId = getRouterParam(event, 'id')

    const storeId = config.ecwidStoreId
    const token = config.ecwidSecret

    if (!storeId || !token) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Ecwid credentials are not configured. Please set ECWID_STORE_ID and ECWID_SECRET in your .env file.'
        })
    }

    if (!productId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Product ID is required'
        })
    }

    try {
        const response = await fetch(
            `https://app.ecwid.com/api/v3/${storeId}/products/${productId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            const errorMessage = response.status === 404
                ? `Product not found with ID: ${productId}`
                : `Ecwid API error: ${response.statusText}`

            throw createError({
                statusCode: response.status,
                statusMessage: errorMessage
            })
        }

        const product = await response.json()

        // Transform product data for frontend
        const transformedProduct = {
            id: product.id,
            name: product.name,
            description: product.description || '',
            price: product.price || 0,
            priceFormatted: product.price ? `$${product.price.toFixed(2)}` : 'Price not available',
            sku: product.sku || '',
            quantity: product.quantity || 0,
            unlimited: product.unlimited || false,
            inStock: product.quantity > 0 || product.unlimited,
            enabled: product.enabled,

            // Images
            thumbnailUrl: product.thumbnailUrl || '/v26mark.png',
            imageUrl: product.imageUrl || product.thumbnailUrl || '/v26mark.png',
            galleryImages: product.galleryImages?.map((img: any) => ({
                url: img.url,
                thumbnail: img.thumbnail || img.url,
                alt: product.name
            })) || [],

            // Options (colors, sizes, etc.)
            options: product.options?.map((option: any) => ({
                name: option.name,
                type: option.type,
                choices: option.choices?.map((choice: any) => ({
                    text: choice.text,
                    priceModifier: choice.priceModifier || 0,
                    priceModifierType: choice.priceModifierType || 'ABSOLUTE'
                })) || []
            })) || [],

            // Dimensions and weight
            weight: product.weight || 0,
            dimensions: product.dimensions || null,

            // Categories
            categories: product.categories || [],
            categoryIds: product.categoryIds || []
        }

        return {
            success: true,
            product: transformedProduct
        }
    } catch (error: any) {
        console.error('Error fetching Ecwid product:', error)

        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to fetch product from Ecwid'
        })
    }
})
