const { response } = require('express');
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.status(200).send('hello world');
});

router.post('/register', (req, res) => {
    let email = req.body.email
    email = email + '--test'

    res.status(201).send(email);
});

router.get('/users/:userid', (req, res) => {
    res.status(200).send(req.params.userid)
});

router.get('/users', (req, res) => {
    res.status(200).send(req.query)
});

module.exports = router