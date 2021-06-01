const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/v1/suma', (req, res) => {
    console.log(req.body.num1);
})

app.listen(5500, function(){
    console.log('server is on');
})