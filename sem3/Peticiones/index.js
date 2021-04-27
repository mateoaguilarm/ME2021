const request = require('request');
const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/13627/'

request(URL, (error, response, body) => {
    let dataJSON = JSON.parse(body);
    console.log(dataJSON);
});

// ---

