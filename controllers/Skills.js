const Skills = require("../models/Skills");
const { uploadOnCloud } = require("../utils/Cloudinary");

exports.addSkills = async (req, res, next) => {
  try {
    const { text, bgColor } = req.body;
    const localFilePath = req.file.path;
    const file = await uploadOnCloud(localFilePath);
    const skillsContent = await Skills.create({
      text,
      bgColor,
      image: file.secure_url,
    });
    await skillsContent.save();
    return res.status(201).json(skillsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchSkills = async (req, res, next) => {
  try {
    const skillsContent = await Skills.find();
    if (!skillsContent) {
      return res.status(404).json({
        message: "Skills Content not found",
      });
    }
    return res.status(200).json(skillsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteSkill = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedSkill = await Skills.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedSkill,
      message: "Skill deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
