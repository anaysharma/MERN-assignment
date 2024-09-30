const User = require('../models/user');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];

    if (!token)
      return res
        .status(404)
        .json({ message: 'No token, authorization denied' });

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const exists = await User.findById(id);
    if (!exists) return res.status(403).json('User in not authorized');

    req.user = id;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json('error, request authorization failed');
  }
};

module.exports = auth;
