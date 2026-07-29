import jwt from "jsonwebtoken"
// GENERATE TOKEN
export const generateToken = ({
    payload,
    secretKey,
    options = {
        expiresIn: "1h",
        notBefore: 0,
        audience: [],
        issuer: "sarah-app",
    },
}) => {
    return jwt.sign(payload, secretKey, options);
};
// VERFIY TOKEN 
export const verfiyToken = ({
    token,
    secretKey
}) => {
    return jwt.verify(token, secretKey)
}
// DECODED TOKEN 
export const decodeToken = (token) => {
    return jwt.decode(token)
}
