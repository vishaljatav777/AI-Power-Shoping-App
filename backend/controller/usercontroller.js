import User from "../model/usermodel.js"

export const getcorentuser = async (req,res) => {
    try{
        let user = await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        return res.status(200).json(user)
    }catch(error){
        console.log(error)
        return res.status(500).json({message:`getcorrentuser Error ${error}`})
    }
}


export const getAdmin = async (req,res) => {
    try{
        let adminEmail = req.adminEmail
        if(!adminEmail){
            return res.status(404).json({message:"Admin Not found"})
        }
        return res.status(201).json({
            email:adminEmail,
            role:"admin"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:`getAdmin Error ${error}`})
    }
}
