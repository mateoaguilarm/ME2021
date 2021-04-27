// 1.- Hacer una petición a la API de League of legends y mostrar en consola el body convertido en JSON.
//   http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json

// const request = require('request');
// const theURL = 'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/es_MX/champion.json';

// request(theURL, (error, response, body) => {
//     let lolData = JSON.parse(body);
//     console.log(lolData);
// });

// 2.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
// https://pokeapi.co/

const requestTwo = require('request');
const contentUrl = 'https://pokeapi.co/api/v2/pokemon/eevee';

requestTwo(contentUrl, (error, response, body) => {
    let pokeData = JSON.parse(body);
    console.log(pokeData.types);
});