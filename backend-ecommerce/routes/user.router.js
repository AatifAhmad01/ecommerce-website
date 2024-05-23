const { Router } = require("express")
const { loginUser } = require('../controller/user.controller.js')

const router = Router();


router.route("/login").post(loginUser)


module.exports = router