import { verfiyToken } from "../token/token.js"
import UserModel from "../../model/user.model.js"
import { Role } from "../enum/role.js"

// AUTHENDCATION MIDDLEWARE FUNCTION 
export const authencation =() => {
    return async(request, response, next) => {
        try {
            const token = request.headers.authorization?.split(" ")[1]; 
            if (!token) {
                return response.status(400).json({
                    message: "Token Is required !"
                })
            }
            const decoded = verfiyToken({
                token: token,
                secretKey: process.env.ACCESS_TOKEN
            })// {_id : id , role : user } 
            if (!decoded) {
                return response.status(404).json({
                    message: "Unauthroized Access !"
                })
            }
            const userId =  await UserModel.findById(decoded._id)
            if (!userId) {
                return response.status(404).json({
                    message: "User Not Found !"
                })
            }
            console.log(decoded);
            request.user = userId // id 
            request.decoded = decoded
            next() // return give next function 

        }
        catch (error) {
            return response.status(500).json({
                messsage: "Internal Server !",
                error: error.message
            })
        }
    }
}
// AUTHURAZTION MIDDLEWARE FUNCTION 
export const authorization = (...roles) => {
    return (request, response, next) => {

        if (!request.user) {
               return response.status(404).json({
                    message: "Access Denied !"
                })
        }
        console.log(request.user)
        if (!roles.includes(request.user.role)) {
               return response.status(400).json({
                    message: "Role Not Supported !"
                })
        }
        

        next();
    };
};
