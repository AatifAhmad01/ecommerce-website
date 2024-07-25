const asyncHandler = require("../utils/asyncHandler");
const db = require("../db/db.js");
const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const fs = require('fs/promises');
const { ConvertProductsToArray, RandomizeArray } = require("../utils/ManageProjects.js");


const allProducts = asyncHandler(async (req, res) => {

    const { random, page = 1, pageSize = 20 } = req.query

    const offset = (page - 1) * pageSize;

    const query = `
        SELECT *
        FROM (  SELECT * 
                FROM products 
                LIMIT ? 
                OFFSET ?) p

        LEFT JOIN product_images pi ON p.id = pi.product_id
    `;

    try {
        const [productsResult] = await db.execute(query, [pageSize, offset])

        let products = ConvertProductsToArray(productsResult)

        if (random == "true") {

            products = RandomizeArray(products);
        }
        res.status(200).json(new ApiResponse(200, products, "Products fetched successfully!"))
    }
    catch (error) {
        throw new ApiError(500, error.message || "Something went wronge!")
    }
});

const getProductsFromAllCategores = asyncHandler(async (req, res,) => {

    const { random, size = 1 } = req.query // size is max items per category

    const query = `
        WITH RankedProducts AS (
            SELECT 
                *,
                ROW_NUMBER() OVER (PARTITION BY category) as rn
            FROM 
                products
            WHERE 
                category != 'None'
        )
        SELECT 
            *
        FROM 
            RankedProducts p
        LEFT JOIN 
            product_images pi ON p.id = pi.product_id
        WHERE 
            rn <= ?;
    `;

    try {

        const [productResult] = await db.execute(query, [size])

        let products = ConvertProductsToArray(productResult)

        if (random == "true") {
            products = RandomizeArray(products);
        }

        res.status(200).json(new ApiResponse(200, products, "Products fetched successfully"))
    }
    catch (error) {
        throw new ApiError(500, error.message || "Something went wronge!")
    }
})

const getProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;

    if (!productId) throw new ApiError(400, "Invalid product id");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = ?
    `;

    try {

        const [productResult] = await db.execute(query, [productId])

        const products = ConvertProductsToArray(productResult)

        if (products.length == 0) throw new ApiError(204, "No product found");

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
    const { random } = req.query // size is max items per category

    if (!catergory) throw new ApiError(401, "Invalid product cetegory");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.category = ?
    `;

    try {

        const [productResult] = await db.execute(query, [catergory])

        let products = ConvertProductsToArray(productResult)

        if (random == "true") {

            products = RandomizeArray(products);
        }

        res.status(200).json(new ApiResponse(200, products, "Product fetched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})

const getProductByBrand = asyncHandler(async (req, res) => {

    const brand = req.params.brand
    const { random } = req.query

    if (!brand) throw new ApiError(401, "Invalid product brand");

    const query = `
        SELECT *
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.brand = ?
    `;

    try {

        const [productResult] = await db.execute(query, [brand])

        let products = ConvertProductsToArray(productResult)

        if (random == "true") {

            let minProduct = 0;

            while (minProduct < products.length) {
                const randomI = Math.floor((Math.random() * products.length - minProduct) + minProduct)

                const tempProduct = products[minProduct]
                products[minProduct] = products[randomI]
                products[randomI] = tempProduct

                minProduct++;
            }
        }

        res.status(200).json(new ApiResponse(200, products, "Products fetched successfully"))
    }
    catch (error) {
        throw new ApiError(401, error.message || "Something went wronge!")
    }
})

const addProduct = asyncHandler(async (req, res) => {

    const { name, description, category, brand, price, colors } = req.body;
    const images = req.files

    console.log(images)

    if (!name || !description || !category || !price || !images.length) {
        throw new ApiError(400, "All Fields are required");
    }

    const productQuery = `INSERT INTO products (name, description, category, brand, price, colors) VALUES (?,?,?,?,?,?)`

    try {
        const conn = await db.getConnection();
        await conn.beginTransaction();

        const [productResult] = await conn.execute(productQuery, [name, description, category, brand, price, colors])

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
                colors
            },
            "Product Added Successfully"
        ))
    }
    catch (error) {
        images.forEach(image => {
            fs.unlink(image.path)
        });

        throw new ApiError(401, error?.message || "Something went wronge")
    }
})

const updateProduct = asyncHandler(async (req, res) => {

    const productId = req.params.productId;
    const { name, description, category, brand, colors, price, instock = true } = req.body;
    const images = req.files

    const productQuery = `UPDATE products SET name = ?, description = ?, category = ?, brand = ?, colors = ?, price = ?, instock = ? WHERE id = ?`

    try {
        // const conn = await db.getConnection();
        // await conn.beginTransaction();

        await db.execute(productQuery, [name, description, category, brand, colors, price, instock, productId])

        // let imagesQuery = `INSERT INTO product_images (product_id, image_url) VALUES `;

        // const imagesValues = []

        // images.forEach(image => {
        //     imagesValues.push(`("${addedProductId}", "${image.path}")`)
        // });

        // imagesValues.join(", ")

        // imagesQuery += imagesValues;

        // await conn.execute(imagesQuery)

        // await conn.commit();
        // conn.release();

        res.status(200).json(new ApiResponse(200, {}, "Product Updated Successfully"))
    }
    catch (error) {
        throw new ApiError(500, error?.message || "Something went wronge")
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
        throw new ApiError(500, error.message || "Something went wronge!")
    }
})



module.exports = {
    allProducts,
    getProductsFromAllCategores,
    addProduct,
    getProduct,
    getProductByName,
    getProductByCategory,
    getProductByBrand,
    updateProduct,
    deleteProduct
}