import { loginService, signupService , getProfileService } from "./auth.service.js"
// SIGN UP 
export const signupController = async(request, response) => {
    try {
        const userData = await signupService(request.body)
        return response.status(201).json({
            message : "User Data is created !",
            userData
        })
    } catch (error) {
        return response.status(500).json({
            message : "Internal Server",
            error : error.message
        })
    }
}
// LOGIN
export const loginController = async(request, response) => {
    try {
        const userData = await loginService(request.body)
        return response.status(201).json({
            message : "login scuessfully !",
            userData
        })
    } catch (error) {
        return response.status(500).json({
            message : "Internal Server",
            error : error.message
        })
    }
}
// GET PROFILE
export const getProfileController = async(request, response) => {
    try {
        const userData = await getProfileService(request.user._id)
        return response.status(200).json({
            message : "User Found !",
            userData
        })
    } catch (error) {
        return response.status(500).json({
            message : "Internal Server",
            error : error.message
        })
    }
}
