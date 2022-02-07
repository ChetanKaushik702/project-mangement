const express = require('express');
const { isAuthenticatedUser } = require('../middleware/auth');
const { registerUser, loginUser, logoutUser, getUserDetails } = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/details').get(isAuthenticatedUser, getUserDetails);

module.exports = router;