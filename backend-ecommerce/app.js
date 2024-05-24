const upload = require('./middlewares/multer.middleware.js')

const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const dotenv = require('dotenv')
const productRouter = require('./routes/products.router.js')
const userRouter = require('./routes/user.router.js')
const asyncHandler = require("./utils/asyncHandler.js")

dotenv.config();

console.log(process.env.DB_HOST)

const db = require('./db/db.js')


const app = express()



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

app.use("/api/v1/products", productRouter)
app.use("/api/v1/user", userRouter)



const PORT = process.env.PORT

app.get("/healthcheck", (req, res) => {
    res.status(200).send("The Application Is Running Perfectly");
})

app.get("/user/signup", (req, res) => {

    const query = `INSERT INTO users (username, password, role) VALUES ("Atif", "com", "admin")`;

    db.query(query, (err, data) => {
        if (err) res.json(err)

        return res.json(data)
    })

})

app.get("/user/login", asyncHandler(async (req, res) => {

    const query = `SELECT * FROM users`;

    try {
        const [rows, fields] = await db.query(query)

        res.status(200).send(rows)
    }
    catch (error) {
        res.status(400).send({ "Error": error })
    }

}))


app.post("/upload", upload.single('file'), (req, res) => {

    const filePath = req.file?.path;

    console.log(filePath)

    res.status(200).send("File Uploaded");
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})