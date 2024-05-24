const asyncHandler = require("../utils/asyncHandler");

const db = require("../db/db.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");


const allProducts = asyncHandler(async (req, res) => {

    // Verify User
    // Get all products from db
    // Send all products in response
    // 

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
    `;

    try {
        const [productsResult] = await db.query(query)

        res.status(200).send(productsResult)
    }
    catch (error) {
        res.status(400).send({ "Error": error })
    }
});

const addProduct = asyncHandler(async (req, res) => {

    const connection = await db.getConnection();
    await connection.beginTransaction()

    const { name, description, category, price } = req.body;
    const images = req.files

    if (!name || !description || !category || !price) {
        throw new ApiError(401, "All Fields are required");
    }

    const productQuery = `INSERT INTO products (name, description, category, price) VALUES (?,?,?,?)`

    try {
        const conn = await db.getConnection();
        await conn.beginTransaction();

        const [productResult] = await conn.execute(productQuery, [name, description, category, price])

        const addedProductId = productResult.insertId

        let imagesQuery = `INSERT INTO product_images (product_id, image_url) VALUES `;

        const imagesValues = []

        images.forEach(image => {
            imagesValues.push(`("${addedProductId}", "${image.path}")`)
        });

        imagesValues.join(", ")

        imagesQuery += imagesValues;

        const [imagesResult] = await conn.execute(imagesQuery)

        await conn.commit();
        conn.release();

        res.status(200).json(new ApiResponse(200,
            {
                name,
                description,
                category,
                price,
            },
            "Product Added Successfully"
        ))
    }
    catch (error) {
        throw new ApiError(401, error?.message || "Something went wronge")
    }
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