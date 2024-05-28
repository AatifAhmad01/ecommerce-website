const { Router } = require("express")
const { getActiveOrders, postOrder, getDeliveredOrders, deliverOrder, deleteOrder } = require("../controller/order.controller.js")
const verifyJwt = require('../middlewares/auth.middleware.js')

const router = Router()

router.route("/").get(verifyJwt, getActiveOrders).post(postOrder)
router.route("/delivered").get(verifyJwt, getDeliveredOrders)
router.route("/:orderId").patch(verifyJwt, deliverOrder).delete(verifyJwt, deleteOrder)

module.exports = router;