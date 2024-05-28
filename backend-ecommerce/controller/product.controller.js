const asyncHandler = require("../utils/asyncHandler");
const db = require("../db/db.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const fs = require('fs/promises');
const { ConvertProductsToArray } = require("../utils/ManageProjects.js");


const allProducts = asyncHandler(async (req, res) => {

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
    `;

    try {
        const [productsResult] = await db.query(query)

        const products = ConvertProductsToArray(productsResult)

        res.status(200).json(new ApiResponse(200, products, "Products fetched successfully!"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
});

const getProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;

    if (!productId) throw new ApiError(401, "Invalid product id");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = ?
    `;

    try {

        const [productResult] = await db.execute(query, [productId])

        const products = ConvertProductsToArray(productResult)

        if (products.length == 0) throw new ApiError(401, "No product found");

        res.status(200).json(new ApiResponse(200, products[0], "Product fetched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})

const getProductByName = asyncHandler(async (req, res) => {

    const productName = req.params.productName;

    if (!productName) throw new ApiError(401, "Invalid product id");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.name = ?
    `;

    try {

        const [productResult] = await db.execute(query, [productName])

        const products = ConvertProductsToArray(productResult)

        if (products.length == 0) throw new ApiError(401, "No product found");

        res.status(200).json(new ApiResponse(200, products[0], "Product fetched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})


const getProductByCategory = asyncHandler(async (req, res) => {

    const catergory = req.params.category

    if (!catergory) throw new ApiError(401, "Invalid product cetegory");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.category = ?
    `;

    try {

        const [productResult] = await db.execute(query, [catergory])

        const products = ConvertProductsToArray(productResult)

        res.status(200).json(new ApiResponse(200, products, "Product fetched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})

const addProduct = asyncHandler(async (req, res) => {

    const { name, description, category, price } = req.body;
    const images = req.files

    console.log(images)

    if (!name || !description || !category || !price || !images.length) {
        throw new ApiError(400, "All Fields are required");
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

        await conn.execute(imagesQuery)

        await conn.commit();
        conn.release();

        res.status(200).json(new ApiResponse(200,
            {
                id: addedProductId,
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
    const { name, description, category, price } = req.body;
    const images = req.files

    if (!name || !description || !category || !price) {
        throw new ApiError(401, "All Fields are required");
    }

    const productQuery = `UPDATE products SET name = ?, description = ?, category = ?, price = ? WHERE id = ?`

    try {
        const conn = await db.getConnection();
        await conn.beginTransaction();

        const [productResult] = await conn.execute(productQuery, [name, description, category, price, productId])

        const addedProductId = productResult.insertId

        // let imagesQuery = `INSERT INTO product_images (product_id, image_url) VALUES `;

        // const imagesValues = []

        // images.forEach(image => {
        //     imagesValues.push(`("${addedProductId}", "${image.path}")`)
        // });

        // imagesValues.join(", ")

        // imagesQuery += imagesValues;

        // await conn.execute(imagesQuery)

        await conn.commit();
        conn.release();

        res.status(200).json(new ApiResponse(200,
            {
                id: addedProductId,
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

const deleteProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;

    try {
        const conn = await db.getConnection();
        await conn.beginTransaction();

        const imagesQuery = `SELECT (image_url) FROM product_images WHERE product_Id = ?`

        const [imagesResult] = await conn.execute(imagesQuery, [productId])

        for (var image of imagesResult) {
            await fs.unlink(image.image_url)
        }

        const deleteQuery = `DELETE FROM products WHERE id = ?`

        const [deleteResult] = await conn.execute(deleteQuery, [productId])

        if (deleteResult.affectedRows == 0) throw new ApiError(401, "Error while deleting record");

        res.status(200).json(new ApiResponse(200, 2, "Product deleted successfully!"))

        await conn.commit();
        conn.release();
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})



module.exports = { allProducts, addProduct, getProduct, getProductByName, getProductByCategory, updateProduct, deleteProduct }