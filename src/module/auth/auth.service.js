import { generateToken, verfiyToken } from "../../common/token/token.js"
import UserModel from "../../model/user.model.js"
// SIGN UP API
export const signupService = async (data) => {
    // CHECK EMAIL 
    const isEmailExist = await UserModel.find().where({
        email: data.email
    })
    if (!isEmailExist) {
        throw new Error("❌ INVALID EMAIL !")
    }
    // TAKE USER DATA 
    const userData = await UserModel.create(data)
    return userData
}
// LOGIN 
export const loginService = async (data) => {
    // CHECK EMAIL 
    const user = await UserModel.findOne().where({
        email: data.email
    })
    if (!user) {
        throw new Error("❌ INVALID EMAIL !")
    }
    const accessToken = generateToken({
        payload: {
            _id: user._id,
            role: user.role
        },
        secretKey: process.env.ACCESS_TOKEN,
        options: {
            expiresIn: "2h",
            audience: [],
            issuer: "sarah-app"
        }
    })
    // console.log(accessToken);
    // const decoded = verfiyToken({
    //     token: accessToken,
    //     secretKey: process.env.ACCESS_TOKEN
    // })
    // console.log(decoded)
    const refreshToken = generateToken({
        payload: {
            _id: user._id,
            role: user.role
        },
        secretKey: process.env.REFRESH_SECERT,
        options: {
            expiresIn: "7d",
            audience: [],
            issuer: "sarah-app"
        }
    })
    return { accessToken, refreshToken }
}
// GET PROFILE 
export const getProfileService = async (userId) => {
    const user = await UserModel.findById(userId)
    if (!user) {
        throw new Error("USER ID NOT FOUND !")
    }
    return user
}
// UPDATE PROFILE 
export const updateProfileService = async (userId, data) => {
    const userExist = await UserModel.findById(userId)
    if (!userExist) {
        throw new Error("USER NOT FOUND !")
    }
    const user = await UserModel.findByIdAndUpdate(userId, {
        $set: data,
    },

        {
            new: true
        })
    return user
}
// GET ALL PROFILES 
export const getAllProfilesService = async()=>{
    return await UserModel.find()
}
