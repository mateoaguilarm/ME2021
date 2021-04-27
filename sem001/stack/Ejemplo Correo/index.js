const btnAdd = document.querySelector('#btn-add');
const btnRead = document.querySelector('#btn-read');
const clientList = document.querySelector('#list-client');
const mailLists = document.querySelector('.main__ul');

const emailArray = [];

class Item {
    constructor(emailTitle){
        this.emailTitle = emailTitle
    }
}

btnAdd.addEventListener('click', function(){
    const newClient = new Item('Correo')
    emailArray.push(newClient)

    
});

function renderMails() {
    for (let i = 0; i < emailArray.length; i++) {
        
        
    }
}
