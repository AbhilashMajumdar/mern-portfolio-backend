const Header = require("../models/Header");
const { uploadOnCloud } = require("../utils/Cloudinary");

exports.addHeader = async (req, res, next) => {
  try {
    const {
      heading,
      text,
      role1,
      role2,
      role3,
      github_url,
      facebook_url,
      linkedin_url,
      twitter_url,
      mailto_url,
    } = req.body;
    const fileLocalPath = req.file.path;
    const file = await uploadOnCloud(fileLocalPath);
    const headerContent = await Header.create({
      heading,
      text,
      role1,
      role2,
      role3,
      facebook_url,
      linkedin_url,
      twitter_url,
      github_url,
      mailto_url,
      pdf: file.secure_url,
    });
    await headerContent.save();
    return res.status(201).json(headerContent);
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
};

exports.fetchHeader = async (req, res, next) => {
  try {
    const headerContent = await Header.find();
    if (!headerContent) {
      return res.status(404).json({
        message: "Header Content not found",
      });
    }
    return res.status(200).json(headerContent[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateHeader = async (req, res, next) => {
  try {
    const {
      heading,
      text,
      role1,
      role2,
      role3,
      facebook_url,
      linkedin_url,
      twitter_url,
      github_url,
      mailto_url,
      id,
    } = req.body;
    if (!req.file) {
      const headerContent = await Header.findByIdAndUpdate(
        id,
        {
          heading,
          text,
          role1,
          role2,
          role3,
          facebook_url,
          linkedin_url,
          twitter_url,
          github_url,
          mailto_url,
        },
        {
          new: true,
        }
      );
      if (!headerContent) {
        return res.status(404).json({
          message: "Header Content not found",
        });
      }
      const updatedHeaderContent = await headerContent.save();
      return res.status(200).json(updatedHeaderContent);
    } else {
      const fileLocalPath = req.file.path;
      const file = await uploadOnCloud(fileLocalPath);
      const headerContent = await Header.findByIdAndUpdate(
        id,
        {
          heading,
          text,
          role1,
          role2,
          role3,
          facebook_url,
          linkedin_url,
          twitter_url,
          github_url,
          mailto_url,
          pdf: file.secure_url
        },
        {
          new: true,
        }
      );
      if (!headerContent) {
        return res.status(404).json({
          message: "Header Content not found",
        });
      }
      const updatedHeaderContent = await headerContent.save();
      return res.status(200).json(updatedHeaderContent);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
