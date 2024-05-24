const express = require("express")
const upload = require("../middlewares/multer.middleware.js")

const { allProducts, addProduct, getProduct, updateProduct, deleteProduct } = require("../controller/product.controller");

const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").get(allProducts).post(verifyJWT, upload.array('images', 4), addProduct);
router.route("/:productId")
    .get(getProduct)
    .patch(verifyJWT, updateProduct)
    .delete(verifyJWT, deleteProduct);


module.exports = router