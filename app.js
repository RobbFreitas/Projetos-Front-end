const sign_in_password = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

// lista de elementos para validação
const li_lower_upper = document.querySelector('#lower-upper')
const li_numbers = document.querySelector('#numbers')
const li_special_characters = document.querySelector('#special-characters')
const li_digits = document.querySelector('#digits')

sign_in_password.addEventListener('keyup', (event) => {
    const {value} = sign_in_password;

    //regex
    var regexNumbers = /\d/g;

    const upperRegex = RegExp("[A-Z]");
    const lowerRegex = RegExp("[a-z]");

    var regexSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;   


    //variaveis de validação
    const isNumberValidated = value.match(regexNumbers);
    const isSpecialCharacters = value.match(value.match(regexSpecialCharacters));
    const isPasswordLength = value.length >= 8;
    const isLowerUpper = value.match(upperRegex) && value.match(lowerRegex);


    // validação de numeros de caracteres   
    if (isPasswordLength){
        li_digits.classList.add('active');
        const icon = li_digits.getElementsByTagName('i') [0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_digits.classList.remove('active');
        const icon = li_digits.getElementsByTagName('i') [0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    

     // validação de numeros na senha 
     if (isNumberValidated){
        li_numbers.classList.add('active');
        const icon = li_numbers.getElementsByTagName('i') [0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_numbers.classList.remove('active');
        const icon = li_numbers.getElementsByTagName('i') [0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

     // validação de caracteres especiais
     if (isSpecialCharacters){
        li_special_characters.classList.add('active');
        const icon = li_special_characters.getElementsByTagName('i') [0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_special_characters.classList.remove('active');
        const icon = li_special_characters.getElementsByTagName('i') [0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

     // validação de minusculo e maiusculo
     if (isLowerUpper){
        li_lower_upper.classList.add('active');
        const icon = li_lower_upper.getElementsByTagName('i') [0];
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-check');
    } else {
        li_lower_upper.classList.remove('active');
        const icon = li_lower_upper.getElementsByTagName('i') [0];
        icon.classList.remove('fa-check');
        icon.classList.add('fa-circle');
    }

    if (
        isNumberValidated &&
        isSpecialCharacters &&
        isPasswordLength &&
        isLowerUpper
     ) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', '');
    }

});