import mongoose from "mongoose"

export const databaseConnection = async () => {
    const databaseUrl = process.env.DATABASE_URL
    try {
        await mongoose.connect(databaseUrl, {
            maxPoolSize: process.env.MAX_POOL_SIZE,
            serverSelectionTimeoutMS: process.env.SERVER_TIME_OUT
        })
        console.log("✅ DATABASE IS CONNECTED WITH MONGOOSE ")
    } catch (databaseError) {
        console.log("❌ ERROR IN DATABASE CONNECTION : ", databaseError)
    }
}