const cloudinary = require("cloudinary");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config({ path: "../config/config.env" });

cloudinary.v2.config({
  cloud_name: "abhilash-portfolio",
  api_key: "796125946562365",
  api_secret: "t5Yf1QPGLd0xAiIkXPAgkOoZlyg",
});

exports.uploadOnCloud = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    const response = await cloudinary.v2.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return error;
  }
};