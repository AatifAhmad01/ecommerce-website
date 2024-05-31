const { Router } = require("express")
const { getActiveOrders, postOrder, getDeliveredOrders, getOrder, deliverOrder, deleteOrder, deleteAllDelivered } = require("../controller/order.controller.js")
const verifyJwt = require('../middlewares/auth.middleware.js')

const router = Router()

router.route("/").get(verifyJwt, getActiveOrders).post(postOrder)
router.route("/delivered").get(verifyJwt, getDeliveredOrders).delete(verifyJwt, deleteAllDelivered)
router.route("/:orderId").get(verifyJwt, getOrder).patch(verifyJwt, deliverOrder).delete(verifyJwt, deleteOrder)

module.exports = router;