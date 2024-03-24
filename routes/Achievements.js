const express = require("express");
const {
  addAchievements,
  fetchAchievements,
  deleteAchievement,
  updateAchievement,
} = require("../controllers/Achievements");
const { upload } = require("../middlewares/Multer");
const achievementsRouter = express.Router();

achievementsRouter
  .route("/admin/achievements")
  .post(upload.single("image"), addAchievements)
  .patch(upload.single("image"), updateAchievement);
achievementsRouter.route("/admin/achievement/:id").delete(deleteAchievement);
achievementsRouter.route("/achievements").get(fetchAchievements);

module.exports = achievementsRouter;
