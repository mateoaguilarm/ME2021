const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_active: {
        type: Boolean,
        default: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User