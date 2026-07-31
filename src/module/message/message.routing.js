import {deleteMessageByAdminController, deleteMessageController, getMyMessageController, listAllMessagesController, replyMessagesController, sendMessageController} from "./message.controller.js"
import {authencation, authorization} from "../../common/middleware/auth.middelware.js"
import express from "express"
import { Role } from "../../common/enum/role.js"
import { listAllMessagesService } from "./message.service.js"
const messageRouter = express.Router()
messageRouter.post("/send/:reciverId",authencation(),authorization(Role.USER,Role.ADMIN),sendMessageController)
messageRouter.get("/get/my/message",authencation(),authorization(Role.USER,Role.ADMIN),getMyMessageController)
messageRouter.delete("/delete/:messageId",authencation(),authorization(Role.USER,Role.ADMIN),deleteMessageController)
messageRouter.get("/list/all/messages",authencation(),authorization(Role.ADMIN),listAllMessagesController)
messageRouter.post("/reply/:reciverId/:messageId",authencation(),authorization(Role.USER,Role.ADMIN),replyMessagesController)
messageRouter.delete("/kill/:messageId",authencation(),authorization(Role.ADMIN),deleteMessageByAdminController)
export default messageRouter