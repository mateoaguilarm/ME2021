//para get es: fetch(las cosas)
//para post/put hay que crear un objeto tipo: const: config = {
//     method: 'POST',
//     body: las cosas,
//     headers: {}
// }

// const data = {
//     titulo: title,
//     descripcion: description
// }

const baseUrl = 'https://mysterious-plateau-36285.herokuapp.com';

function createTask(data) {
    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(`${baseUrl}/api/v1/crear/tarea`, config)
}

function allTask() {
    return fetch(`${baseUrl}/api/v1/obtener/todas/tareas`)
}

function aTask(id) {
    return fetch(`${baseUrl}/api/v1/obtener/tarea/${id}`)
}

function modifyTask(id, data) {
    return fetch.put(`${baseUrl}/api/v1/modificar/tarea/${id}`, data2)
}

function delTask(id) {
    return fetch.delete(`${baseUrl}/api/v1/borrar/tarea/${id}`)
}

//---