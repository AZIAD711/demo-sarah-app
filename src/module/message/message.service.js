import MessageModel from "../../model/message.model.js"
// CREATE MESSAGE 
export const sendMessageService = async(data)=>{
    return await MessageModel.create({
        body : data.message,
        reciverId : data.reciverId,
        senderId: data.senderId || undefined
    }) 
}