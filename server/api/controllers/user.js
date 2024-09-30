const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(404).json({ message: 'fill all the details' });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'user not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(403).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({
      success: true,
      message: 'Login Successful',
      t: token,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in user' });
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const alreadyExists = await User.findOne({ email });
    if (alreadyExists)
      return res.status(403).json({ message: 'Email already Registered' });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({
      username,
      email,
      password: hash,
    });

    return res.status(201).json({ message: 'Registration Successful' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error in user signup' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const id = req.user;

    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).json({ message: 'User not found' });

    return res
      .status(201)
      .json({
        message: 'successfully got user details',
        data: { username: user.username, email: user.email },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error in user signup' });
  }
};

module.exports = { login, signup, getUserDetails };
