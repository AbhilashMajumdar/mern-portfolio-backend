const express = require("express");
const { signup, login } = require("../controllers/User");
const userRouter = express.Router();

userRouter.route('/admin/signup').post(signup);
userRouter.route('/admin/login').post(login);

module.exports = userRouter;