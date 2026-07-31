import messageModel from "../../model/message.model.js";
import { deleteMessageService, getMyMessageService, listAllMessagesService, sendMessageService } from "./message.service.js"
// SEND MESSAGE 
export const sendMessageController = async (request, response) => {
    try {
        const senderId = request.user._id
        const reciverId = request.params.reciverId;
        const message = request.body
        const messageData = await sendMessageService({
            message: request.body.message,
            senderId: request.user._id,
            reciverId: request.params.reciverId
        });
        return response.status(201).json({
            message: "Message Is Sent",
            messageData
        })
    } catch (error) {
        return response.status(500).json({
            message: "Internal Server",
            error: error.message
        })
    }
}
// GET MY MESSAGE 
export const getMyMessageController = async (request, response) => {
    try {
        const reciverId = request.user._id
        const messageData = await getMyMessageService(reciverId);
        return response.status(201).json({
            message: "Message Is Found",
            data: messageData
        })
    } catch (error) {
        return response.status(500).json({
            message: "Internal Server",
            error: error.message
        })
    }
}
// DELETE MESSAGE 
export const deleteMessageController = async (request, response) => {
    try {
        const reciverId = request.user._id
        const messageId = request.params.messageId
        const messageData = await deleteMessageService({
            reciverId,
            messageId
        });
        return response.status(200).json({
            message: "Message Is Deleted",
            data: messageData
        })
    } catch (error) {
        return response.status(500).json({
            message: "Internal Server",
            error: error.message
        })
    }
}
// LIST ALL MESSAGES 
export const listAllMessagesController = async (request, response) => {
    try {
        const messageData = await listAllMessagesService();
        return response.status(200).json({
            message: "All Messages",
            data: messageData
        })
    } catch (error) {
        return response.status(500).json({
            message: "Internal Server",
            error: error.message
        })
    }
}
