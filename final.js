const mainForm = document.querySelector('#main-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user')
// creating the constants from the html

mainForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
// once the submit button is pressed the values inputted will be displayed below the form box
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'PLEASE ENTER ALL FIELDS';
        // if one field is not filled out the error will appear
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : 
        ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = ''
        emailInput.value = ''
        // information empty until user fills out form
    }
}
// ^ works for "add user"
// const btn = document.querySelector('.btn');


