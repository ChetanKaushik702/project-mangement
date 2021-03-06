const Project = require("../models/projectModel");
const AsyncErrorHandler = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

exports.createProject = AsyncErrorHandler(async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return next(
      new ErrorHandler("Please enter title and description both", 401)
    );
  }

  const project = await Project.create({
    title,
    description,
    authorFirstName: req.user.fname,
    authorLastName: req.user.lname,
    createdBy: req.user._id,
  });

  res.status(201).json({
    success: true,
    project,
  });
});

exports.getAllProjects = AsyncErrorHandler(async (req, res, next) => {
  const projects = await Project.find().sort({ createdOn : -1 });
  res.status(200).json({
    success: true,
    projects,
  });
});
