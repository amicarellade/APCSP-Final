// outlining loops

// for loops
// for(let i = 0; i < 10; i++) {
//     console.log(`For loop number: ${i}`);
// }
// while loops
// let i = 0
// while(i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }
const mainForm = document.querySelector('#main-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user')

mainForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'PLEASE ENTER ALL FIELDS';
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : 
        ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = ''
        emailInput.value = ''
    }
}
// ^ works for "add user"
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     document.querySelectorAll('header').lastElementChild.innerHTML = '<h1>Welcome!</h1>';
// });