import express from "express";
import cors from 'cors'
import { connectDB } from "./lib/db.js";
import { serve } from 'inngest/express'
import { clerkMiddleware } from '@clerk/express'

import { functions, inngest } from "./lib/inngest.js";
import dotenv from 'dotenv'
import { protectRoute } from "./middleware/protectRoute.js";
import chatrouter from "./routes/chatRoute.js";
import sessionRoutes from "./routes/sessionRoute.js"
dotenv.config();

const app = express();
const PORT = 3000
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(clerkMiddleware());

app.use('/api/inngest', serve({ client: inngest, functions }))
app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is up and running" });
});
app.use("/api/chat", chatrouter);
app.use("/api/sessions", sessionRoutes);

connectDB()

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server is running on PORT: ${process.env.PORT || PORT} `)
})