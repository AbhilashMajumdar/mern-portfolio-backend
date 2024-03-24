const express = require("express");
const { addExperience, fetchExperience, deleteExperience, updateExperience } = require("../controllers/Experience");
const experienceRouter = express.Router();

experienceRouter.route("/admin/experience").post(addExperience).patch(updateExperience);
experienceRouter.route("/admin/experience/:id").delete(deleteExperience);
experienceRouter.route("/experience").get(fetchExperience);

module.exports = experienceRouter;
