import express from "express"
import cors from 'cors'
import { corsOrigon } from './constants/constants.js'



const app = express()

app.use(cors(
    {
        origin: corsOrigon
    }
))






export default app