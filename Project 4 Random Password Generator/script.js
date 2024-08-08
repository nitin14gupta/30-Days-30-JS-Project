const passwordBox = document.getElementById('password');
const length = 20; // Fixed typo
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!@#$%^&*/-+()_={}[]<>?.,";
const allChars = upperCase + lowerCase + numbers + specialCharacter;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];

    while(password.length < length) { // Fixed typo
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
