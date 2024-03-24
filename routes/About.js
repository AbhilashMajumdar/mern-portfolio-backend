const express = require('express');
const { addAbout, fetchAbout, updateAbout } = require('../controllers/About');
const { upload } = require('../middlewares/Multer');
const aboutRouter = express.Router();

aboutRouter.route('/admin/about').post(upload.single("image"), addAbout).patch(upload.single("image") , updateAbout);
aboutRouter.route('/about').get(fetchAbout);

module.exports = aboutRouter