export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const storeId = config.ecwidStoreId
    const token = config.ecwidSecret

    if (!storeId || !token) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Ecwid credentials are not configured. Please set ECWID_STORE_ID and ECWID_SECRET in your .env file.'
        })
    }

    try {
        const response = await fetch(
            `https://app.ecwid.com/api/v3/${storeId}/products?limit=100`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            const errorMessage = response.status === 404
                ? `Store not found. Please verify ECWID_STORE_ID in your .env file. Current value: ${storeId}`
                : `Ecwid API error: ${response.statusText}`

            throw createError({
                statusCode: response.status,
                statusMessage: errorMessage
            })
        }

        const data = await response.json()

        // Transform Ecwid products to match frontend format
        const products = data.items.map((product: any) => ({
            id: product.id,
            name: product.name,
            price: product.price ? `$${product.price.toFixed(2)}` : 'Price not available',
            image: product.imageUrl || product.thumbnailUrl || '/v26mark.png',
            hoverImage: product.galleryImages?.[0]?.url || product.imageUrl || product.thumbnailUrl || '/v26mark.png',
            outOfStock: product.quantity === 0 || !product.enabled
        }))

        return {
            success: true,
            items: products,
            total: data.total
        }
    } catch (error: any) {
        console.error('Error fetching Ecwid products:', error)

        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Failed to fetch products from Ecwid'
        })
    }
})
