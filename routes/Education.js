const express = require("express");
const { addEducation, fetchEducation, deleteEducation, updateEducation } = require("../controllers/Education");
const educationRouter = express.Router();

educationRouter.route("/admin/education").post(addEducation).patch(updateEducation);
educationRouter.route("/admin/education/:id").delete(deleteEducation);
educationRouter.route("/education").get(fetchEducation);

module.exports = educationRouter;
