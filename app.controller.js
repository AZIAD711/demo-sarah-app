import userRouting from "./src/module/auth/auth.routing.js"
import express from "express"
import dotenv, { config } from "dotenv"
import {databaseConnection} from "./src/database/db-connection.js"
export const app =()=>{
    dotenv.config()
    databaseConnection()
    const router = express()
    router.use(express.json())
    // USER ROUTING 
    router.use("/auth", userRouting)
    return router
}
export default app