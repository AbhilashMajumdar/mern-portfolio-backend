const Projects = require("../models/Projects");

exports.addProjects = async (req, res, next) => {
  const projectsContent = new Projects(req.body);
  try {
    await projectsContent.save();
    return res.status(201).json(projectsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};
 
exports.fetchProjects = async (req, res, next) => {
  try {
    const projectsContent = await Projects.find();
    if (!projectsContent) {
      return res.status(404).json({
        message: "Projects Content not found",
      });
    }
    return res.status(200).json(projectsContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const project = await Projects.findByIdAndUpdate(
      req.body.id,
      req.body,
      {
        new: true,
      }
    );
    if (!project) {
      return res.status(404).json({
        message: "Project Content not found",
      });
    }
    const updatedProject = await project.save();
    return res.status(200).json(updatedProject);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteProject = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedProject = await Projects.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedProject,
      message: 'Project deleted successfully!'
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
