const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const dotenv = require('dotenv')
const productRouter = require('./routes/products.router.js')
const userRouter = require('./routes/user.router.js')
const orderRouter = require('./routes/orders.router.js')
// const db = require('./db/db.js')

dotenv.config();

const app = express()

const PORT = process.env.PORT

app.use(cors(
    {
        origin: "*"
    }
))
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())
app.use("/public/images", express.static("public/images"))

//Routes
app.use("/api/v1/user", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/orders", orderRouter)

app.get("/healthcheck", (req, res) => {
    res.status(200).send("The Application Is Running Perfectly");
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})