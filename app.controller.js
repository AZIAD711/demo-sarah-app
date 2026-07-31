import userRouting from "./src/module/auth/auth.routing.js"
import messageRouting from "./src/module/message/message.routing.js"
import express from "express"
import dotenv, { config } from "dotenv"
import {databaseConnection} from "./src/database/db-connection.js"
import {redisConnection} from  "./src/database/redis.connection.js"
export const app =()=>{
    dotenv.config()
    databaseConnection()
    redisConnection()
    const router = express()
    router.use(express.json())
    // USER ROUTING 
    router.use("/auth", userRouting)
    // MESSAGE ROUTING
    router.use("/message", messageRouting)
    return router
}
export default app