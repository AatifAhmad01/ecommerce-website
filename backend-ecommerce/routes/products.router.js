const express = require("express")

const { allProducts, addProduct, updateProduct, deleteProduct } = require("../controller/product.controller");
const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").get(allProducts).post(verifyJWT, addProduct);
router.route("/:productId").patch(verifyJWT, updateProduct);
router.route("/:productId").delete(verifyJWT, deleteProduct);


module.exports = router