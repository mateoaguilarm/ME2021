// 1.- Hacer una petición a la API de League of legends y mostrar en consola el body convertido en JSON.
//   http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json

const axios = require('axios');
// const theURL = 'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json';

// axios
//     .get(theURL)
//     .then((body => {
//         console.log(body.data);
//     }))
//     .catch((err) => {
//         console.log(err);
//     });

// 2.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
// https://pokeapi.co/

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/eevee';

axios
    .get(pokeURL)
    .then((body) => {
        console.log(body.data.types);
    })
    .catch((error) => {
        console.log(error);
    });

