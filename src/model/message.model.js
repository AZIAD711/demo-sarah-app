import { model, Schema, Types } from "mongoose";
import { Flag } from "../common/enum/flag.js"
const noData = "not Data Provided !"
// MESSAGE SCHMEA
const messageSchema = new Schema({
    // SENDER ID 
    senderId: {
        type: Types.ObjectId,
        require: true,
        ref: "User"
    },
    // RECIVER ID 
    reciverId: {
        type: Types.ObjectId,
        require: true,
        ref: "User"
    },
    // PARENT ID 
    parentId: {
        type: Types.ObjectId,
        require: true,
        ref: "User"
    },
    // BODY
    body: {
        type: String,
        maxlength: 1000,
        trim: true
    },
    // FLAG 
    flag: {
        type: String,
        enum: Object.values(Flag),
        default: Flag.SEND
    },
},
    {
        timestamps: true, // CREATED AT && UPDATED AT
        strict: true,
        strictQuery: true,
        versionKey: "version",   // version : 0 , v : 1
        toJSON: { virtuals: true, getters: true },
        toObject: { virtuals: true, getters: true },
        collection: "message_data"
    }
)
const messageModel = model("Message", messageSchema)
export default messageModel