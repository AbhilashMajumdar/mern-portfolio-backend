const User = require("../models/User");

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({
      email,
      password,
    });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      return res.status(200).json(req.body.email);
    } else {
      return res.status(400).json('Invalid Email or Password');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
