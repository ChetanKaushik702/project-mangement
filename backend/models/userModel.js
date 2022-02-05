const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        trim: true,
        required: [true, 'Please enter your username']
    },
    lname: {
        type: String,
        trim: true,
        required: [true, 'Please enter your username']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please enter your e-mail']
    },
    password: {
        type: String,
        select: false,
        minlength: 8,
        maxlength: 128,
        required: [true, 'Please enter your password']
    },
    joinedOn: {
        type: Date,
        default: Date.now()
    }
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

// generate JWT token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('user', userSchema);