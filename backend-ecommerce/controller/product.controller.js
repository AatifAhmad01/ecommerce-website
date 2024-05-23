const asyncHandler = require("../utils/asyncHandler");

const db = require("../db/db.js")


const allProducts = asyncHandler(async (req, res) => {

    // Verify User
    // Get all products from db
    // Send all products in response
    // 

    const query = `SELECT * FROM users`;

    try {
        const [rows, fields] = await db.query(query)

        res.status(200).send(rows)
    }
    catch (error) {
        res.status(400).send({ "Error": error })
    }

});

const addProduct = asyncHandler(async (req, res) => {

    // Vefity User
    // Validate Product
    // Add Product to db
    // Send product in response

    res.status(200).send("Product Added")
})



const updateProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;

    console.log(productId)

    res.status(200).send({
        "Success": true,
        productId,
    })
})

const deleteProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;

    console.log(productId)

    res.status(200).send({
        "Success": true,
        productId,
    })
})



module.exports = { allProducts, addProduct, updateProduct, deleteProduct }