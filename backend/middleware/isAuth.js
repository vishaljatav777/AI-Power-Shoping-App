import jwt from 'jsonwebtoken'


const isAuth = async (req,res,next) => {
    try{
        let token = req.cookies.token

        if(!token){
            return res.status(400).json({message:"user does not have token"})
        }
        let verifiedToken = jwt.verify(token,process.env.JWT_SECRET)

        if(!verifiedToken){
            return res.status(400).json({message:"user does not have velidToken"})
        }

        req.userId = verifiedToken.userId
        next()

    }catch(error){
        console.log("isAuth Error")
        return res.status(500).json({message:`isAuth Error ${error}`})
    }
}


export default isAuth