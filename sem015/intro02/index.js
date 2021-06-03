const express = require('express');
const app = express();
const router = require('./routes');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', router);

app.listen(5500, function(){
    console.log('sv is on');
});
