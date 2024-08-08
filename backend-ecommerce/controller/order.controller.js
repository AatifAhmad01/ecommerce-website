const asyncHandler = require("../utils/asyncHandler.js")
const db = require("../db/db.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const { ConvertOrdersToArray, ConvertProductsToArray } = require("../utils/ManageProjects.js");
const connectedClients = require("../server.js")

const getActiveOrders = asyncHandler(async (req, res) => {

    console.log(connectedClients[0])

    try {
        const ordersQuery = `
        SELECT * 
        FROM orders o
        LEFT JOIN order_items pi ON o.id = pi.order_id
        LEFT JOIN customers c ON o.id = c.order_id
        WHERE o.delivered = false
        `;

        const [ordersResult] = await db.execute(ordersQuery)

        const orders = ConvertOrdersToArray(ordersResult);

        res.status(200).json(new ApiResponse(200, orders, "Active orders feteched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge")
    }
})

const getDeliveredOrders = asyncHandler(async (req, res) => {

    try {
        const ordersQuery = `
        SELECT * 
        FROM orders o
        LEFT JOIN order_items pi ON o.id = pi.order_id
        LEFT JOIN customers c ON o.id = c.order_id
        WHERE o.delivered = true
        `;

        const [ordersResult] = await db.execute(ordersQuery)

        const orders = ConvertOrdersToArray(ordersResult);

        res.status(200).json(new ApiResponse(200, orders, "Delivered orders feteched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge")
    }
})

const postOrder = asyncHandler(async (req, res) => {

    const { items, customerDetails } = req.body

    if (!items || !customerDetails) throw new ApiError(401, "All fields are required");

    try {
        const connection = await db.getConnection()
        await connection.beginTransaction();

        const [orderResult] = await connection.execute(`INSERT INTO orders VALUES ()`)

        const orderId = orderResult.insertId;

        let orderItemsQuery = `INSERT INTO order_items (product_id, quantity, order_id, color) VALUES `

        let itemValue = []

        items.forEach(item => {
            itemValue.push(`("${item.product_id}", "${item.quantity}", "${orderId}", "${item.color}")`)
        });

        itemValue.join(", ")

        orderItemsQuery += itemValue;

        await connection.execute(orderItemsQuery)

        const customerQuery = `INSERT INTO customers (order_id, firstname, lastname, address, appartment, city, postalcode, phone, extraphone) 
        VALUES (?,?,?,?,?,?,?,?,?)`

        await connection.execute(customerQuery, [orderId, customerDetails.firstName, customerDetails.lastName, customerDetails.address,
            customerDetails.appartment, customerDetails.city, customerDetails.postalCode, customerDetails.phone, customerDetails.extraPhone])

        await connection.commit()
        connection.release()

        //Send order notification

        res.status(200).json(new ApiResponse(200, {
            orderId
        }, "Order placed successfully!"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge")
    }
})

const deliverOrder = asyncHandler(async (req, res) => {

    const { orderId } = req.params

    if (!orderId) throw new ApiError(401, "All fields are required");

    try {
        const ordersQuery = `UPDATE orders SET delivered = true WHERE id = ?`

        const [updateResult] = await db.execute(ordersQuery, [orderId])

        res.status(200).json(new ApiResponse(200, {}, "Order updated successfuly"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge")
    }
})

const deleteOrder = asyncHandler(async (req, res) => {

    const { orderId } = req.params

    if (!orderId) throw new ApiError(401, "All fields are required");

    try {
        const deleteQuery = `DELETE FROM orders WHERE id = ?`

        await db.execute(deleteQuery, [orderId])

        res.status(200).json(new ApiResponse(200, {}, "Order deleted successfuly"))
    }
    catch (error) {
        throw new ApiError(500, error.message || "Something went wronge");
    }
})

const deleteAllDelivered = asyncHandler(async (req, res) => {

    try {
        const deleteQuery = `DELETE FROM orders WHERE delivered = ?`

        await db.execute(deleteQuery, [true])

        res.status(200).json(new ApiResponse(200, {}, "Order deleted successfuly"))
    }
    catch (error) {
        throw new ApiError(500, error.message || "Something went wronge");
    }
})

const getOrder = asyncHandler(async (req, res) => {

    const orderId = req.params.orderId

    try {
        const ordersQuery = `
        SELECT * 
        FROM orders o
        LEFT JOIN order_items pi ON o.id = pi.order_id
        LEFT JOIN customers c ON o.id = c.order_id
        WHERE o.id = ?
        `;

        const [ordersResult] = await db.execute(ordersQuery, [orderId])

        const orders = ConvertOrdersToArray(ordersResult);

        if (!orders.length) throw new ApiError(404, "No Order Found");

        let orderedProductIds = []

        orders[0].orderedItems.forEach(orderItem => {
            orderedProductIds.push(orderItem.product_id)
        })

        const orderProductsQuery = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id IN (${orderedProductIds.join(",")})
        `;

        const [productsResult] = await db.execute(orderProductsQuery)

        const orderProducts = ConvertProductsToArray(productsResult);

        console.log(orderProducts)

        for (let i = 0; i < orders[0].orderedItems.length; i++) {
            orderProducts[i] = { ...orderProducts[i], quantity: orders[0].orderedItems[i].quantity, selectedVariant: orders[0].orderedItems[i].color }
        }

        orders[0].orderedItems = orderProducts

        res.status(200).json(new ApiResponse(200, orders[0], "Order fetched successfully!"))
    }
    catch (error) {
        throw new ApiError(500, error.message || "Something went wronge")
    }
})


module.exports = { getActiveOrders, getDeliveredOrders, getOrder, postOrder, deliverOrder, deleteOrder, deleteAllDelivered }
