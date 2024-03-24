const express = require("express");
const { addCertifications, fetchCertifications, deleteCertification, updateCertification } = require("../controllers/Certifications");
const certificationsRouter = express.Router();

certificationsRouter.route("/admin/certifications").post(addCertifications).patch(updateCertification);
certificationsRouter.route("/admin/certification/:id").delete(deleteCertification);
certificationsRouter.route("/certifications").get(fetchCertifications);

module.exports = certificationsRouter;
