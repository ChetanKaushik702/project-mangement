const express = require('express');
const { createProject } = require('../controllers/projectController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route('/create').post(isAuthenticatedUser, createProject);

module.exports = router;