const express = require("express")
const upload = require("../middlewares/multer.middleware.js")

const {
    allProducts,
    addProduct,
    getProduct,
    getProductByName,
    getProductByCategory,
    getProductByBrand,
    getProductsFromAllCategores,
    updateProduct,
    deleteProduct
} = require("../controller/product.controller");

const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").get(allProducts).post(verifyJWT, upload.array('images', 4), addProduct);
router.route("/:productId")
    .get(getProduct)
    .patch(verifyJWT, updateProduct)
    .delete(verifyJWT, deleteProduct);

router.route("/getproducts/allcategories").get(getProductsFromAllCategores)
router.route("/name/:productName").get(verifyJWT, getProductByName)
router.route("/category/:category").get(getProductByCategory)
router.route("/brand/:brand").get(getProductByBrand)


module.exports = router