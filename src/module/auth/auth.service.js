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
