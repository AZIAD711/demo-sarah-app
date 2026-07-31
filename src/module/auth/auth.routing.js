import {signupController,loginController,getProfileController,updateProfileController, getAllProfileController,forgetPasswordController, resetPasswordController, setStatusAccountController, deleteAccountController} from "./auth.controller.js"
import {authencation, authorization} from "../../common/middleware/auth.middelware.js"
import express from "express"
import { Role } from "../../common/enum/role.js"
const userRouter = express.Router()
userRouter.post("/signup",signupController)
userRouter.post("/login",loginController)
userRouter.post("/forget/password",forgetPasswordController)
userRouter.put("/reset/password",resetPasswordController)
userRouter.get("/profile",authencation(),authorization(Role.USER,Role.ADMIN),getProfileController)
userRouter.get("/profile/all",authencation(),authorization(Role.ADMIN),getAllProfileController)
userRouter.put("/profile/update",authencation(),authorization(Role.USER,Role.ADMIN),updateProfileController)
userRouter.patch("/status/account/:userId",authencation(),authorization(Role.ADMIN),setStatusAccountController)
userRouter.delete("/kill/:userId",authencation(),authorization(Role.ADMIN),deleteAccountController)
export default userRouter