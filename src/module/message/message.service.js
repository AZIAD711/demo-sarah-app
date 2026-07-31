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