import express from 'express'
import { PORT, corsOrigon } from './constants/constants.js'
import cors from 'cors'

const app = express()

app.use(cors(
    {
        origin: corsOrigon
    }
))

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})



// Connect to db

// Start Server