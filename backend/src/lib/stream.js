
import dotenv from 'dotenv'
import { StreamChat } from 'stream-chat'
dotenv.config();

export const chatClient = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_API_SECRET)

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted Successfully")

    } catch (error) {
        console.error("Error upserting Stream user", error)
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId)
        console.log("Stream user Deleted Successfully", userId)
    } catch (error) {
        console.error("Error deleting the  Stream user", error)
    }
}