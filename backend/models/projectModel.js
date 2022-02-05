const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter project title']
    },
    description: {
        type: String,
        required: [true, 'Please enter project description']
    },
    authorFirstName: {
        type: String,
        trim: true,
        required: [true, 'Please enter your username']
    },
    authorLastName: {
        type: String,
        trim: true,
        required: [true, 'Please enter your username']
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('project', projectSchema);