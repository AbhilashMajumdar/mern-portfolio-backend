const Certifications = require("../models/Certifications");

exports.addCertifications = async (req, res, next) => {
  const certificationsContent = new Certifications(req.body);
  try {
    await certificationsContent.save();
    return res.status(201).json(certificationsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchCertifications = async (req, res, next) => {
  try {
    const certificationsContent = await Certifications.find();
    if (!certificationsContent) {
      return res.status(404).json({
        message: "Certifications Content not found",
      });
    }
    return res.status(200).json(certificationsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateCertification = async (req, res, next) => {
  try {
    const certification = await Certifications.findByIdAndUpdate(
      req.body.id,
      req.body,
      {
        new: true,
      }
    );
    if (!certification) {
      return res.status(404).json({
        message: "Certification Content not found",
      });
    }
    const updatedCertification = await certification.save();
    return res.status(200).json(updatedCertification);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteCertification = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedCertification = await Certifications.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedCertification,
      message: 'Certification deleted successfully!'
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};