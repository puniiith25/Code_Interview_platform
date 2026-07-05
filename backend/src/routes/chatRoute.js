import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import { getStreamToken } from '../controllers/chatController.js'

const chatrouter = express.Router()
chatrouter.get('/token', protectRoute, getStreamToken);

export default chatrouter