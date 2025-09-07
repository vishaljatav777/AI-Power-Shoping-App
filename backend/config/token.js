import jwt from 'jsonwebtoken';

export const gentoken = async (userId) =>{
    try{
        let token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"})
        return token
    }catch(error){
        console.log("token error")
    }
}
