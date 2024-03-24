const Experience = require("../models/Experience");

exports.addExperience = async (req, res, next) => {
  const experienceContent = new Experience(req.body);
  try {
    await experienceContent.save();
    return res.status(201).json(experienceContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchExperience = async (req, res, next) => {
  try {
    const experienceContent = await Experience.find();
    if (!experienceContent) {
      return res.status(404).json({
        message: "Experience Content not found",
      });
    }
    return res.status(200).json(experienceContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.body.id,
      req.body,
      {
        new: true,
      }
    );
    if (!experience) {
      return res.status(404).json({
        message: "Experience Content not found",
      });
    }
    const updatedExperience = await experience.save();
    return res.status(200).json(updatedExperience);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteExperience = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedExperience = await Experience.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedExperience,
      message: 'Experience deleted successfully!'
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
