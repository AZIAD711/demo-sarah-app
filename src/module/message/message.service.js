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
// LIST ALL MESSAGES 
export const listAllMessagesService = async()=>{
    return await MessageModel.find()
}
// REPLY MESSAGE 
export const replyMessageService = async({ messageId, senderId, content })=>{
    const message = await MessageModel.findById(messageId)
    if(!message){
        throw new Error("MESSAGE NOT FOUND !")
    }
    if(message.reciverId.toString() !== senderId.toString()){
        throw new Error("YOU DON'T HAVE ACCESS TO THIS MESSAGE !")
    }
    if(!senderId){
        throw new Error("CANNOT REPLY TO ANONYMOUS MESSAGE !")
    }
    const replyMessage = await MessageModel.create({
        body: content,
        senderId: senderId,          // Current user (the receiver) becomes the sender
        reciverId: message.senderId  // Send the reply back to the original sender
    });
    return replyMessage
}