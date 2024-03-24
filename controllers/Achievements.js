const Achievements = require("../models/Achievements");
const { uploadOnCloud } = require("../utils/Cloudinary");

exports.addAchievements = async (req, res, next) => {
  try {
    const { title, description, link, company_link, date } = req.body;
    const localFilePath = req.file.path;
    const file = await uploadOnCloud(localFilePath);
    const achievementsContent = await Achievements.create({
      title,
      description,
      link,
      company_link,
      date,
      image: file.secure_url,
    });
    await achievementsContent.save();
    return res.status(201).json(achievementsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchAchievements = async (req, res, next) => {
  try {
    const achievementsContent = await Achievements.find();
    if (!achievementsContent) {
      return res.status(404).json({
        message: "Achievements Content not found",
      });
    }
    return res.status(200).json(achievementsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateAchievement = async (req, res, next) => {
  try {
    const { title, description, link, company_link, date, id } = req.body;
    if (!req.file) {
      const achievement = await Achievements.findByIdAndUpdate(
        id,
        {
          title,
          description,
          link,
          company_link,
          date,
        },
        {
          new: true,
        }
      );
      if (!achievement) {
        return res.status(404).json({
          message: "Achievements Content not found",
        });
      }
      const updatedAchievement = await achievement.save();
      return res.status(200).json(updatedAchievement);
    } else {
      const fileLocalPath = req.file.path;
      const file = await uploadOnCloud(fileLocalPath);
      const achievement = await Achievements.findByIdAndUpdate(
        id,
        {
          title,
          description,
          link,
          company_link,
          date,
          image: file.secure_url,
        },
        {
          new: true,
        }
      );
      if (!achievement) {
        return res.status(404).json({
          message: "Achievements Content not found",
        });
      }
      const updatedAchievement = await achievement.save();
      return res.status(200).json(updatedAchievement);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteAchievement = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedAchievement = await Achievements.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedAchievement,
      message: "Achievement deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
