import { client } from "../../database/redis.connection.js"
// OTP TEMPLATE 
export const templateOtpWithEmail = (email)=>{
    return `OTP:${email}`
}
// SET FUNCTION 
export const setRecord = (key, value, time) => {
    return time ? client.set(key, JSON.stringify(value), {
        EX: time // EXPIRE 
    }) : client.set(key, JSON.stringify(value))
} 
// GET FUNCTION 
export const getRecord = (key) => {
    return JSON.parse(client.get(key))
}
// DELETE FUNCTION 
export const deleteRecord = (key) => {
    return client.del(key)
}