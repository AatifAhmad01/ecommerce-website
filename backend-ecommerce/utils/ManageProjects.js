const ConvertProductsToArray = (fetchedProducts) => {

    let products = []
    const productsMap = {}

    fetchedProducts.forEach(product => {

        if (product.product_id in productsMap) {
            productsMap[product.product_id].image_url.push(product.image_url)
        }
        else {
            productsMap[product.product_id] = {
                id: product.product_id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                created_at: product.created_at,
                image_url: [product.image_url]
            }
        }
    })

    for (var key in productsMap) {
        products.push(productsMap[key])
    }

    return products
}

module.exports = ConvertProductsToArray