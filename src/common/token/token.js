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