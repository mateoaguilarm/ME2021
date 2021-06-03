// For the connection

const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://user-test:1234@backend.65lwy.mongodb.net/bcknd?retryWrites=true&w=majority';

const User = require('./User')

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    error ? console.log(error) : console.log('Database Connected');
});

module.exports = {
    User,
}