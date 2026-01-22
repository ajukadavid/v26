export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const storeId = config.ecwidStoreId
    const token = config.ecwidSecret

    if (!storeId || !token) {
        return {
            success: false,
            error: 'Missing credentials',
            storeId: storeId || 'NOT SET',
            hasToken: !!token
        }
    }

    try {
        const response = await fetch(
            `https://app.ecwid.com/api/v3/${storeId}/products?limit=5`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = await response.json()

        return {
            success: response.ok,
            status: response.status,
            storeId: storeId,
            productCount: data.total || 0,
            productsFound: data.items?.length || 0,
            firstProduct: data.items?.[0] ? {
                id: data.items[0].id,
                name: data.items[0].name,
                hasImages: !!data.items[0].imageUrl
            } : null,
            rawResponse: data
        }
    } catch (error) {
        return {
            success: false,
            error: error.message,
            storeId: storeId
        }
    }
})
