import { model, Schema } from "mongoose";
import {Gender} from "../common/enum/gender.js"
import {Role} from "../common/enum/role.js"
const noData = "not Data Provided !"
// USER SCHMEA
const userSchema = new Schema({
    // FIRST NAME 
    firstName : {
        type : String,
        trim : true,
        minlength : 3,
        maxlength : 80,
        require : true
    },
    // LAST NAME 
    lastName : {
        type : String,
        trim : true,
        minlength : 3,
        maxlength : 80,
        require : true
    },
    // USERNAME 
    username : {
        type : String,
        trim : true,
        minlength : 3,
        maxlength : 80,
        require : true,
        unique : true 
    },
    // EMAIL 
    email : {
        type : String,
        trim : true,
        require : true,
        unique : true 
    },
    // PASSWORD 
    password : {
        type : String,
        trim : true,
        minlength : 6,
        maxlength : 6,
        require : true,
    },
    // ADDRESS 
    address : {
        type : Text,
        trim : true,
        default : noData
    },
    // PHONE NUMBER 
    phoneNumber : {
        type : String,
        minlength : 11,
        maxlength : 11,
        require : true 
    },
    // AGE 
    age : {
        type : Number,
        min : 16,
        max : 120,
        default : noData
    },
    // PROFILE IMAGE 
    profileImage : {
        type : Text,
        default : noData
    },
    // CONFIRM EMAIL 
    confrimEmail : {
        type : Boolean,
        default : false
    },
    // GENDER 
    gender: {
        type : String ,
        enum : [Object.values(Gender)],
        default : Gender.MALE
    },
    // ROLE 
    role: {
        type : String ,
        enum : [Object.values(Role)],
        default : Role.USER
    },
})
const userModel = model("User",userSchema)
export default userModel