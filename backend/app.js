const express = require('express');
const cookieParser = require('cookie-parser');

// error middleware
const errorMiddleware = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(cookieParser());

// routes
const user = require('./routes/userRoutes');
const project = require('./routes/projectRoutes');

app.use('/api/v1/user', user);
app.use('/api/v1/project', project);

app.use(errorMiddleware);

module.exports = app;