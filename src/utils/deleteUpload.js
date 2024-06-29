import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const deleteFileOnCloudinary = async (imageURL) => {
    if (!imageURL) return;

    // Extract the public ID from the imageUrl
    const parts = imageURL.split('/');
    const publicIdWithExtension = parts[parts.length - 1];
    const publicId = publicIdWithExtension.split('.')[0];

    try {
        const response = await cloudinary.uploader.destroy(publicId);
        console.log("File deleted Successfully")
        return response;
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
    }
}

export { deleteFileOnCloudinary }