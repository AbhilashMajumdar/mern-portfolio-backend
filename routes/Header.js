const express = require("express");
const {
  addHeader,
  fetchHeader,
  updateHeader,
} = require("../controllers/Header");
const { upload } = require("../middlewares/Multer");
const headerRouter = express.Router();

headerRouter
  .route("/admin/header")
  .post(upload.single("pdf"), addHeader)
  .patch(upload.single("pdf"), updateHeader);
headerRouter.route("/header").get(fetchHeader);

module.exports = headerRouter;
