const express = require("express");
const {
  addSkills,
  fetchSkills,
  deleteSkill,
} = require("../controllers/Skills");
const { upload } = require("../middlewares/Multer");
const skillsRouter = express.Router();

skillsRouter.route("/admin/skills").post(upload.single("image"), addSkills);
skillsRouter.route("/admin/skill/:id").delete(deleteSkill);
skillsRouter.route("/skills").get(fetchSkills);

module.exports = skillsRouter;
