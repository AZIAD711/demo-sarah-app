import messageModel from "../../model/message.model.js";
import { deleteMessageByAdminService, deleteMessageService, getMyMessageService, listAllMessagesService, replyMessageService, sendMessageService } from "./message.service.js"
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
// DELETE MESSAGE BY ADMIN
export const deleteMessageByAdminController = async (request, response) => {
    try {
        const messageId = request.params.messageId
        const messageData = await deleteMessageByAdminService(messageId);
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
// REPLY MESSAGE
export const replyMessagesController = async (request, response) => {
    try {
        const messageId = request.params.messageId;
        const senderId = request.user._id;
        const content = request.body.message;

        const reply = await replyMessageService({
            messageId,
            senderId,
            content
        });

        return response.status(201).json({
            success: true,
            message: "Reply sent successfully!",
            data: reply
        });

    } catch (error) {
        console.error("❌ ERROR IN REPLY MESSAGE CONTROLLER:", error);

        return response.status(500).json({
            success: false,
            message: error.message
        });
    }
};

