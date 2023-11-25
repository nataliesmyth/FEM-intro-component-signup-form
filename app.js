const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    let firstNameInput = firstName.value.trim();
    let lastNameInput = lastName.value.trim();
    let emailInput = email.value.trim();
    let passwordInput = password.value.trim();

    if (firstNameInput === '') {
        invalidInput(firstName, 'First Name cannot be empty')
    } else {
        validInput(firstName);
    }
    
    if (lastNameInput === '') {
        invalidInput(lastName, 'Last Name cannot be empty')
    } else {
        validInput(lastName);
        console.log(lastName)
    }
    if (emailInput === '') {
        invalidInput(email, 'email cannot be empty')
    } else {
        validInput(email);
    }
    if (passwordInput === '') {
        invalidInput(password, 'Password cannot be empty')
    } else {
        validInput(password);
    }

});

function invalidInput(req, message) {
    const formControl = req.parentElement;
    console.log(formControl)
    const span = formControl.querySelector('span');
    const errorBorder = formControl.querySelector('input');
    console.log(errorBorder)
    span.innerText = message;
    console.log(message)
    req.className += 'error';
    console.log(req)
    span.className += 'error-text';
    console.log(span)
};

function validInput(req) {
    req.className += 'success';
}