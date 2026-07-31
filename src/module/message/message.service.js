import MessageModel from "../../model/message.model.js"
// CREATE MESSAGE 
export const sendMessageService = async (data) => {
    return await MessageModel.create({
        body: data.message,
        reciverId: data.reciverId,
        senderId: data.senderId || undefined
    })
}
// GET MY MESSAGE
export const getMyMessageService = async (reciverId) => {
    const message = await MessageModel.findOne({
        reciverId: reciverId
    })
    if (!message) {
        throw new Error("RECIVER ID NOT FOUND !")
    }
    return message
}
// DELETE MESSAGE 
export const deleteMessageService = async (data) => {
    const message = await MessageModel.findOneAndDelete({
        _id: data.messageId,
        reciverId: data.reciverId
    })
    if (!message) {
        throw new Error("MESSAGE NOT FOUND !")
    }
    return message
}