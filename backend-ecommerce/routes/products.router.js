const express = require("express")

const { allProducts, addProduct, updateProduct, deleteProduct } = require("../controller/product.controller")

const router = express.Router();


router.route("/").get(allProducts);
router.route("/").post(addProduct);
router.route("/:productId").patch(updateProduct);
router.route("/:productId").delete(deleteProduct);




module.exports = router