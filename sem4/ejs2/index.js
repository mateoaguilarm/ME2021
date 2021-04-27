const { default: axios } = require("axios");

const baseURL = 'https://mysterious-plateau-36285.herokuapp.com/';

function func1 (titulo, descripcion) {
    return axios.post(`${baseURL}/api/v1/crear/tarea`, titulo, descripcion)
}

func1 ('un titulo x', 'descripcion x')
    .get((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })