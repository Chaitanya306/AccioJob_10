let State = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	state: '',
	zip: '',
	agreedToTnC: false,
}

let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")
let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")
let passwordValid = document.getElementById("passwordValid")
let passwordInvalid = document.getElementById("passwordInvalid")
let zipCodeValid = document.getElementById("zipCodeValid")
let zipCodeInvalid = document.getElementById("zipCodeInvalid")
let tnCInvalid = document.getElementById("tnCInvalid")
let stateValid = document.getElementById("stateValid")
let stateInvalid = document.getElementById("stateInvalid")

function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let tNCCheckBox = document.getElementById("tNCCheckBox").checked;
  let valid=true;
  if (firstName === ''){
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
    valid=false
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if(lastName === ''){
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
    valid=false
  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }

  if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {
    emailInvalid.style.display = 'block'
    emailValid.style.display = 'none'
    valid=false
  } else {
    emailValid.style.display = 'block'
    emailInvalid.style.display = 'none'
  }

  if(password === ''){
    passwordInvalid.style.display = 'block'
    passwordValid.style.display = 'none'
    valid=false
  } else {
    passwordValid.style.display = 'block'
    passwordInvalid.style.display = 'none'
  }

  if(zipCode === '' || zipCode.length != 6){
    zipCodeInvalid.style.display = 'block'
    zipCodeValid.style.display = 'none'
    valid=false
  } else {
    zipCodeValid.style.display = 'block'
    zipCodeInvalid.style.display = 'none'
  }

  if(!tNCCheckBox){
    tnCInvalid.style.display = 'block'
    valid=false
  } else {
    tnCInvalid.style.display = 'none'
  }

  if(state === ''){
    stateInvalid.style.display = 'block'
    stateValid.style.display = 'none'
    valid=false
  } else {
    stateValid.style.display = 'block'
    stateInvalid.style.display = 'none'
  }
  if(valid){
      State.firstName= firstName
      State.lastName= lastName
      State.email= email
      State.password= password
      State.state= state
      State.zip= zipCode
      State.agreedToTnC= tNCCheckBox
      console.log(State)
  }
}

let homeNavLink = document.getElementById("home-nav-link")
let signUpNavLink = document.getElementById("signup-nav-link")
let loginNavLink = document.getElementById("login-nav-link")

let homePage = document.getElementById("home-page")
let signUpPage = document.getElementById("signup-page")
let loginPage = document.getElementById("login-page")
//homePage.style.display = 'none'
signUpPage.style.display = 'none'
loginPage.style.display = 'none'
const changeActiveNavlink = (navLinkClicked) => {
	homeNavLink.classList.remove("active")
	signUpNavLink.classList.remove("active")
	loginNavLink.classList.remove("active")
	homePage.style.display = 'none'
	signUpPage.style.display = 'none'
	loginPage.style.display = 'none'

	switch(navLinkClicked){
		case 'HOME':
			homeNavLink.classList.add("active")
			homePage.style.display = 'block'
			break
		case 'SIGN_UP':
			signUpNavLink.classList.add("active")
			signUpPage.style.display = 'block'
			break
		case 'LOGIN':
			loginNavLink.classList.add("active")
			loginPage.style.display = 'block'
			break
	}
}

function signIn(){
    let email=document.getElementById("logInEmail").value
    let password=document.getElementById("logInPassword").value
    let tncCheckBox=document.getElementById("tncCheckBox").checked
    let logInValid=document.getElementById("logInValid")
    let logInInvalid=document.getElementById("logInInValid")
    if(!tncCheckBox||email==""||password==""||(State.email!=email || State.password!=password)){
        logInValid.style.display='none'
        logInInvalid.style.display='block'
    }
    else{ 
        logInInvalid.style.display='none';
        logInValid.style.display='block' 
    }
}