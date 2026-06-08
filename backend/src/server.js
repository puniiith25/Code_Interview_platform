import express from "express";

import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT = 8000

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server is running on PORT: ${process.env.PORT || PORT} `)
})