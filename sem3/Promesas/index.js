const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/eevee';

axios.get(URL).then((body) => {
    console.log(body.data);
}).catch((error) => {
    console.log(error);
});

// O tambien se usa este orden:

// axios
//     .get(URL)
//     .then((body) => {
//         console.log(body.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// --

