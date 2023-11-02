const form = document.querySelector("#form");
const name = document.getElementsByName('name')
console.log()
form.addEventListener("submit", (event) => {
    let IsValidForm = true;
    event.preventDefault();
    const firstName = form.querySelector("#firstName");
    const firstNameFormGroup = firstName.parentElement.parentElement;
    const firstNameInvalidFeedback  = firstNameFormGroup.querySelector(".invalid-feedback");

    const lastName = form.querySelector("#lastName");
    const lastNameFormGroup = lastName.parentElement.parentElement;
    const lastNameInvalidFeedback  = lastNameFormGroup.querySelector(".invalid-feedback");

    const email = form.querySelector("#email");
    const emailFormGroup = email.parentElement.parentElement;
    const emailInvalidFeedback  = emailFormGroup.querySelector(".invalid-feedback");

    const password = form.querySelector("#password");
    const passwordFormGroup = password.parentElement.parentElement;
    const passwordInvalidFeedback  = passwordFormGroup.querySelector(".invalid-feedback");

    const input = form.querySelectorAll('.input')
    const test = document.getElementById('test')
    console.log(test)
    

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        firstNameFormGroup.classList.add("invalid");
        firstNameInvalidFeedback.innerHTML = "First Name cannot be empty";
        IsValidForm = false;
    }
    else {
        firstNameFormGroup.classList.remove("invalid");
        IsValidForm = true;
    }

    if(lastNameValue === ''){
        lastNameFormGroup.classList.add("invalid");
        lastNameInvalidFeedback.innerHTML = "Last Name cannot be empty";
        IsValidForm = false;
    }
    else {
        lastNameFormGroup.classList.remove("invalid");
        IsValidForm = true;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(emailValue);
    if(!isValidEmail){
        emailFormGroup.classList.add("invalid");
        emailInvalidFeedback.innerHTML = "Looks like this is not an email";
        IsValidForm = false;
    }
    else {
        emailFormGroup.classList.remove("invalid");
        IsValidForm = true;
    }

    if(passwordValue === ''){
        passwordFormGroup.classList.add("invalid");
        passwordInvalidFeedback.innerHTML = "Password cannot be empty";
        IsValidForm = false;
    }
    else {
        passwordFormGroup.classList.remove("invalid");
        IsValidForm = true;
    }

    if(!IsValidForm) {
        name[0].placeholder = ''
        name[1].placeholder = ''
        name[3].placeholder = ''
        firstName.style.outline = '2px solid hsl(0 100% 74%)';
        lastName.style.outline = '2px solid hsl(0 100% 74%)';
        email.style.outline = '2px solid hsl(0 100% 74%)';
        password.style.outline = '2px solid hsl(0 100% 74%)';
        return;
    }

    form.submit();  
});