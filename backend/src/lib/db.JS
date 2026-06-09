import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL)
        console.log("DATABASE Connected Successfull")
    } catch (error) {
        console.error("Error While Connecting DATABASE", error)
    }
}