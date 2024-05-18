import { PORT } from './constants/constants.js'
import app from './app.js'
import connect from './db/db.js'
import { upload } from './middlewares/multer.middleware.js';

const db = connect();


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

app.post("/upload", upload.single('file'), (req, res) => {
    res.status(200).send("File Uploaded");
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})



// Connect to db

// Send Data to db



// Start Server