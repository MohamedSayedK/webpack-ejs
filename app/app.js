const realEmail = "mohamedsk18@gmail.com";
const realPassword = "password";

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');


loginButton.addEventListener('click',(e)=>{

    const emailValue = email.value.toLowerCase();
    const passwordValue = password.value.toLowerCase();

    if (email.value === realEmail && password.value === realPassword) {
        alert("Welcome")
    }else{
        alert("Wrong credentials")
    }

    email.value = "";
    password.value = "";
})