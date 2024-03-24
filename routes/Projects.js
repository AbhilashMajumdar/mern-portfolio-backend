const express = require("express");
const {
  addProjects,
  fetchProjects,
  deleteProject,
  updateProject,
} = require("../controllers/Projects");
const projectsRouter = express.Router();

projectsRouter.route("/admin/projects").post(addProjects).patch(updateProject);
projectsRouter.route("/admin/project/:id").delete(deleteProject);
projectsRouter.route("/projects").get(fetchProjects);

module.exports = projectsRouter;
