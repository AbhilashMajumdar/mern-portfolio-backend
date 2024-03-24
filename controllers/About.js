const About = require("../models/About");
const { uploadOnCloud } = require("../utils/Cloudinary");

exports.addAbout = async (req, res, next) => {
  try {
    const { description, name, email, address, dob, job, phone } = req.body;
    const fileLocalPath = req.file.path;
    const file = await uploadOnCloud(fileLocalPath);
    const aboutContent = await About.create({
      description,
      name,
      email,
      job,
      dob,
      phone,
      address,
      image: file.secure_url,
    });
    await aboutContent.save();
    return res.status(201).json(aboutContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchAbout = async (req, res, next) => {
  try {
    const aboutContent = await About.find();
    if (!aboutContent) {
      return res.status(404).json({
        message: "About Content not found",
      });
    }
    return res.status(200).json(aboutContent[0]);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateAbout = async (req, res, next) => {
  try {
    const { description, name, email, address, dob, job, phone, id } = req.body;
    if (!req.file) {
      const aboutContent = await About.findByIdAndUpdate(
        id,
        {
          description,
          name,
          email,
          job,
          dob,
          phone,
          address,
        },
        {
          new: true,
        }
      );
      if (!aboutContent) {
        return res.status(404).json({
          message: "About Content not found",
        });
      }
      const updatedAboutContent = await aboutContent.save();
      return res.status(200).json(updatedAboutContent);
    } else {
      const fileLocalPath = req.file.path;
      const file = await uploadOnCloud(fileLocalPath);

      const aboutContent = await About.findByIdAndUpdate(
        id,
        {
          description,
          name,
          email,
          job,
          dob,
          phone,
          address,
          image: file.secure_url,
        },
        {
          new: true,
        }
      );
      if (!aboutContent) {
        return res.status(404).json({
          message: "About Content not found",
        });
      }
      const updatedAboutContent = await aboutContent.save();
      return res.status(200).json(updatedAboutContent);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
