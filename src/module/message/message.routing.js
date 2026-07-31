import {deleteMessageController, getMyMessageController, sendMessageController} from "./message.controller.js"
import {authencation, authorization} from "../../common/middleware/auth.middelware.js"
import express from "express"
import { Role } from "../../common/enum/role.js"
const messageRouter = express.Router()
messageRouter.post("/send/:reciverId",authencation(),authorization(Role.USER,Role.ADMIN),sendMessageController)
messageRouter.get("/get/my/message",authencation(),authorization(Role.USER,Role.ADMIN),getMyMessageController)
messageRouter.delete("/delete/:messageId",authencation(),authorization(Role.USER,Role.ADMIN),deleteMessageController)
export default messageRouter