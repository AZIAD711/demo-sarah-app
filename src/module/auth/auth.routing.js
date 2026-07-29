import {signupController,loginController,getProfileController} from "./auth.controller.js"
import {authencation, authorization} from "../../common/middleware/auth.middelware.js"
import express from "express"
import { Role } from "../../common/enum/role.js"
const userRouter = express.Router()
userRouter.post("/signup",signupController)
userRouter.post("/login",loginController)
userRouter.get("/profile",authencation(),authorization(Role.USER),getProfileController)
export default userRouter