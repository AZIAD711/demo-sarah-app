import { signupService } from "./auth.service.js"
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