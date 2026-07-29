import { loginService, signupService , getProfileService, updateProfileService ,getAllProfilesService} from "./auth.service.js"
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
// GET ALL PROFILE
export const getAllProfileController = async(request, response) => {
    try {
        const userData = await getAllProfilesService()
        return response.status(200).json({
            message : "Users Found !",
            userData
        })
    } catch (error) {
        return response.status(500).json({
            message : "Internal Server",
            error : error.message
        })
    }
}
// UPDATE PROFILE
export const updateProfileController = async(request, response) => {
    try {
        const userData = await updateProfileService(request.user._id,request.body)
        return response.status(200).json({
            message : "User Profile Updated !",
            userData
        })
    } catch (error) {
        return response.status(500).json({
            message : "Internal Server",
            error : error.message
        })
    }
}
