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
                brand: product.brand,
                price: product.price,
                colors: product.colors,
                instock: product.instock,
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

const ConvertOrdersToArray = (fetchedOrders) => {

    let orders = []
    const ordersMap = {}

    fetchedOrders.forEach(order => {

        if (order.order_id in ordersMap) {
            ordersMap[order.order_id].orderedItems.push({
                product_id: order.product_id,
                quantity: order.quantity,
                color: order.color,
            })
        }
        else {
            ordersMap[order.order_id] = {
                id: order.order_id,
                delivered: order.delivered,
                orderedItems: [{
                    product_id: order.product_id,
                    quantity: order.quantity,
                    color: order.color,
                }],
                customer: {
                    firstname: order.firstname,
                    lastname: order.lastname,
                    address: order.address,
                    appartment: order.appartment,
                    city: order.city,
                    postalcode: order.postalcode,
                    phone: order.phone,
                    extraphone: order.extraphone,
                },
                created_at: order.created_at,
            }
        }
    })

    for (var key in ordersMap) {
        orders.push(ordersMap[key])
    }

    return orders
}

const RandomizeArray = (array) => {

    let minIndex = 0;

    while (minIndex < array.length) {
        const randomI = Math.floor((Math.random() * array.length - minIndex) + minIndex)

        const tempProduct = array[minIndex]
        array[minIndex] = array[randomI]
        array[randomI] = tempProduct

        minIndex++;
    }

    return array;
}


module.exports = { ConvertProductsToArray, ConvertOrdersToArray, RandomizeArray }

