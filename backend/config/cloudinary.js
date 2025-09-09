import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';

const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINRY_NAME,
        api_key: process.env.CLOUDINRY_APIKEY,
        api_secret: process.env.CLOUDINRY_API_SECRET, 
    });

    try{
        if(!filePath){
        return null
    }

    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
              filePath,
       )
       fs.unlinkSync(filePath) // to remove file from local storage
       return uploadResult.secure_url;
    }
    catch(error){
        fs.unlinkSync(filePath) // to remove file from local storage
           console.log(error);
       }
    
}

export default uploadOnCloudinary;