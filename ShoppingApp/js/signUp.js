let firstNameInvalid = document.getElementById("invalid-feedback-firstName");
let lastNameInvalid = document.getElementById("invalid-feedback-lastName");
let emailInvalid = document.getElementById("invalid-feedback-email");
let passwordInvalid = document.getElementById("invalid-feedback-password");
let cityInvalid = document.getElementById("invalid-feedback-city");
let stateInvalid = document.getElementById("invalid-feedback-state");
let zipCodeInvalid = document.getElementById("invalid-feedback-zipCode");
let SuccessMessage  =document.getElementById("signedUpSuccessfully");

function signingUp(event) {
    //event.preventDefault();
    //event.stopPropagation();
    let firstName = document.getElementById("validationCustom01").value;
    let lastName = document.getElementById("validationCustom02").value;
    let email = document.getElementById("signupemail").value;
    let password = document.getElementById("signuppassword").value;
    let city = document.getElementById("validationCustom03").value;
    let state = document.getElementById("validationCustom04").value;
    let zipCode = document.getElementById("validationCustom05").value;
    let success=true;
    /*
    
    
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof email);
    
    console.log(typeof password);
    console.log(typeof city);
    console.log(typeof state);
    console.log(typeof zipCode);
    */
    firstNameInvalid.classList.add("valid");
    lastNameInvalid.classList.add("valid");
    emailInvalid.classList.add("valid");
    passwordInvalid.classList.add("valid");
    cityInvalid.classList.add("valid");
    stateInvalid.classList.add("valid");
    zipCodeInvalid.classList.add("valid");
    SuccessMessage.style.visibility='hidden';

    if(!firstName){  
        firstNameInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(!lastName){   
        lastNameInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(!email.length>5 || !email.includes("@")|| email.substr(-4)!=".com"){ 
        emailInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(password.length<8 || !password.match(/[a-z]/g) || !password.match(/[0-9]/g) || !password.match(/[!@#$%^*]/g)){ 
        passwordInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(!city){ 
        cityInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(!state){ 
        stateInvalid.classList.replace("valid","invalid"); 
        success=false;
    }
    if(zipCode.length!=6||zipCode.match(/[^0-9]/g)){ 
        zipCodeInvalid.classList.replace("valid","invalid");
        success=false; 
    }
    if(success){
        document.getElementById("validationCustom01").value='';
        document.getElementById("validationCustom02").value='';
        document.getElementById("signupemail").value='';
        document.getElementById("signuppassword").value='';
        document.getElementById("validationCustom03").value='';
        document.getElementById("validationCustom04").value='';
        document.getElementById("validationCustom05").value='';
        SuccessMessage.style.visibility='visible'; 
    }
        
}