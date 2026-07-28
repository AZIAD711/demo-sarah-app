import {signupController} from "./auth.controller.js"
import express from "express"
const userRouter = express.Router()
userRouter.post("/add",signupController)
export default userRouter