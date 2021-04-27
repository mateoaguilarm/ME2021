const titleIN = document.querySelector('#exampleFormControlInput1');
const descriptionIN = document.querySelector('#exampleFormControlTextarea1');
const btnCreate = document.querySelector('#btn-add');
const secTasks = document.querySelector('.main__tasks');

btnCreate.addEventListener('click', addTask);

function addTask() {
    const data = {
        titulo: titleIN.value,
        descripcion: descriptionIN.value
    };

    createTask(data)
    .then((result) => {
        return result.json();
    })
    .then((result) => {
        console.log(result);
        titleIN.value = '';
        descriptionIN.value = '';
    })
    .catch((err) => {
        console.log(err);
    });
}

let arrayTest = [
    {titulo: '1', descripcion: 'dsa'},
    {titulo: '2', descripcion: 'dsa'},
    {titulo: '3', descripcion: 'dsa'}
]

function addCard(task) {
    task.forEach(element => {
        const createSecDiv = document.createElement('div');
        createSecDiv.classList.add('row');

        const template = `
            <div class="col cardWidth">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.titulo}</h5>
                    <p class="card-text">${element.descripcion}</p>
                    <a href="#" class="btn btn-light">Done</a>
                </div>
            </div>`;

            createSecDiv.innerHTML = template;
            secTasks.append(createSecDiv);
    });
}

addCard(arrayTest);


// allTask()
//     .then((result) => {
//         return result.json()
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//---

// aTask("602c7f98e117fe0017d2c76b")
//     .then((result) => {
//         return result.json()
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

