const asyncHandler = require("../utils/asyncHandler");

const db = require("../db/db.js")


const allProducts = asyncHandler(async (req, res) => {

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



    res.status(200).send("Product Added")
})



const updateProduct = asyncHandler(async (req, res) => {

    const { productId } = req.params;

    console.log(req.params)

    res.status(200).send({
        "Success": true,
        productId,
    })
})

const deleteProduct = asyncHandler(async (req, res) => {

    console.log(req.body)
    res.status(200).send("Product Deleted")
})


module.exports = { allProducts, addProduct, updateProduct, deleteProduct }