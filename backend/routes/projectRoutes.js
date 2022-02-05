const express = require('express');
const { createProject, getAllProjects } = require('../controllers/projectController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route('/create').post(isAuthenticatedUser, createProject);
router.route('/fetch').get(isAuthenticatedUser, getAllProjects);

module.exports = router;