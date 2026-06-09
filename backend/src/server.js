import express from "express";
import cors from 'cors'
import { connectDB } from "./lib/db.js";
import {serve }from 'inngest/express'
import dotenv from 'dotenv'
import { functions, inngest } from "./lib/inngest.js";
dotenv.config();

const app = express();
const PORT = 8000
app.use(express.json())
app.use(cors({ original: process.env.CLIENT_URL, credentials: true }))


app.use('/api/inngest',serve({client:inngest,functions}))


connectDB()
app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server is running on PORT: ${process.env.PORT || PORT} `)
})