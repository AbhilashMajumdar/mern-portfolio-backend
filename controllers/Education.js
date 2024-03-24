const Education = require("../models/Education");

exports.addEducation = async (req, res, next) => {
  const educationContent = new Education(req.body);
  try {
    await educationContent.save();
    return res.status(201).json(educationContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchEducation = async (req, res, next) => {
  try {
    const educationContent = await Education.find();
    if (!educationContent) {
      return res.status(404).json({
        message: "Education Content not found",
      });
    }
    return res.status(200).json(educationContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
    if (!education) {
      return res.status(404).json({
        message: "Education Content not found",
      });
    }
    const updatedEducation = await education.save();
    return res.status(200).json(updatedEducation);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteEducation = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedEducation = await Education.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedEducation,
      message: "Education deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
