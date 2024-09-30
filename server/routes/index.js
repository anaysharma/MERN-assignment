const express = require('express');
const { login, signup, getUserDetails } = require('../controllers/user.js');
const auth = require('../middlewares/auth.js');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/who-am-i', auth, getUserDetails);

module.exports = router;
