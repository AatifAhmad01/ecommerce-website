

// const app = require('./appfile.js')
const connect = require('./db/db.js')
// const { upload } = require('./middlewares/multer.middleware.js')

const express = require("express")
const cors = require('cors')
const { corsOrigon } = require('./constants/constants.js')
const cookieParser = require("cookie-parser")
const dotenv = require('dotenv')

dotenv.config();

const app = express()

app.use(cors(
    {
        origin: corsOrigon
    }
))
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())
// app.use("/public/images", express.static("public/images"))




const db = connect();

const PORT = process.env.PORT


app.get("/", (req, res) => {
    res.status(200).json({
        states: 200,
        data: {
            name: "Atif",
            email: "m@gmail.com"
        },
        success: true
    });
})

app.get("/user/signup", (req, res) => {

    const query = `INSERT INTO users (username, password, role) VALUES ("Atif", "com", "admin")`;

    // var sql = "INSERT INTO users (username, password, role) VALUES ('Company Inc', 'Highway 37', 'admin')";
    db.query(query, (err, data) => {
        if (err) res.json(err)

        return res.json(data)
    })

})

app.get("/user/login", async (req, res) => {

    const query = `SELECT * FROM users`;
    const users = await db.query(query, (err, data) => {
        if (err) return res.json(err)

        return res.json(data)
    })

    console.log(users)

})

// app.post("/upload", upload.single('file'), (req, res) => {
//     res.status(200).send("File Uploaded");
// })

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})



// Connect to db

// Send Data to db



// Start Server