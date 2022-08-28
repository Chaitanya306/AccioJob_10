var passwordStored="";

var signupInputPasswordField = document.getElementById('sign-up-input');
var passwordStrength = document.getElementById('password-strength');
var signUpValid = document.getElementById('sign-up-valid');
var loginInputPasswordField = document.getElementById('login-input');
var loginValid = document.getElementById('login-valid');
var loginInvalid = document.getElementById('login-invalid');

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M', 'a': 'n', 'b': 'o', 
    'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 
    'g': 't', 'h': 'u', 'i': 'v', 'j': 'w', 
    'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a',
    'o': 'b', 'p': 'c', 'q': 'd', 'r': 'e',
    's': 'f', 't': 'g', 'u': 'h', 'v': 'i',
    'w': 'j', 'x': 'k', 'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4', '!': '#', '$': '%', 
    '&': '+', '-': '@', '_': '~', '#': '!',
    '%': '$', '+': '&', '@': '-', '~': '_'
  };

  function encode(input){
      let arr=input.split("");
      let resultArr=arr.map(function(e){
            if(lookup[e]!=undefined){ return lookup[e];}
            else{ return e; }
      });
      return resultArr.join("");
  }
  function checkPasswordStrength(){
    if(signupInputPasswordField.value.length < 5){
      passwordStrength.style.display = 'block';
      passwordStrength.innerText = 'Weak';
      passwordStrength.style.color = 'red';
    } else if (signupInputPasswordField.value.length < 8) {
      passwordStrength.style.display = 'block';
      passwordStrength.innerText = 'Moderate';
      passwordStrength.style.color = 'orange';
    } else {
      passwordStrength.style.display = 'block';
      passwordStrength.innerText = 'Strong';
      passwordStrength.style.color = 'green';
    }
  }

  function signUp(){
    var inputPassword= signupInputPasswordField.value;
    passwordStrength.style.display = 'none';
    passwordStored=encode(inputPassword);
    signUpValid.style.display='block';
    setTimeout(function(){signUpValid.style.display='none';},5000);
  }

  function logIn(){
    let inputPassword = loginInputPasswordField.value;
    if(inputPassword === encode(passwordStored)){
      loginValid.style.display = 'block';
      loginInvalid.style.display = 'none';
    } else {
      loginInvalid.style.display = 'block';
      loginValid.style.display = 'none';
    }
    setTimeout(function(){
        loginValid.style.display = 'none';
        loginInvalid.style.display = 'none';
    },5000);
  }