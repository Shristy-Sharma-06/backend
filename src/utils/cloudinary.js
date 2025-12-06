import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadCloudinary = async (LocalFilePath)=>{
try {
    if(!LocalFilePath) return null
    // uploade file on clpudinary
    const response = cloudinary.uploader.upload(LocalFilePath,{
        resource_type:"auto"
    })

    // file has been uploaded successfully
    console.log("file is uploaded cloudinary", response.url);
   return response
    
} catch (error) {
    fs.unlinkSync(LocalFilePath) // remove the locally saved temporary file as the uploade operation got failed
    return null
}
}

export {uploadCloudinary}