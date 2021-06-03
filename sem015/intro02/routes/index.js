
const express = require('express');
const router = express.Router();

const { User } = require('../models');
// Routes
router.get('/', (req, res) => {
    res.status(200).send('hello world');
});

// router.post('/register', (req, res) => {
//     let email = req.body.email
//     email = email + '--test'

//     res.status(201).send(email);
// });

router.post('/register', async (req, res) => {
    const newUser = new User(req.body)

    try {
        const user = await newUser.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(409).send(error)
    }
});

router.get('/users/:userid', (req, res) => {
    res.status(200).send(req.params.userid)
});

router.get('/users', (req, res) => {
    res.status(200).send(req.query)
});

module.exports = router